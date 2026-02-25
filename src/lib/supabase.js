import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase configuration missing - form submissions will not be saved');
}

export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

/**
 * Save form submission to database
 */
export async function saveFormSubmission(data) {
  if (!supabase) {
    console.warn('Supabase not configured - submission not saved to database');
    return null;
  }

  try {
    const { data: result, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          project_type: data.projectType,
          message: data.message,
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent,
          created_at: new Date().toISOString(),
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Error saving form submission:', error);
      return null;
    }

    return result?.[0];
  } catch (error) {
    console.error('Unexpected error saving submission:', error);
    return null;
  }
}

/**
 * Get client IP address
 */
async function getClientIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json', {
      method: 'GET',
      mode: 'cors',
    });
    const data = await response.json();
    return data.ip;
  } catch {
    return null;
  }
}

/**
 * Notify Slack about new submission (server-side, but we can trigger with webhook)
 */
export async function notifySlack(submission) {
  const webhookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn('Slack webhook not configured');
    return false;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: '🎯 Nieuw contactformulier ontvangen!',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Nieuw formulier*\n\n*Naam:* ${submission.name}\n*Email:* ${submission.email}\n*Telefoon:* ${submission.phone || 'Niet opgegeven'}\n*Project Type:* ${submission.project_type}\n\n*Bericht:*\n${submission.message}`
            }
          }
        ]
      })
    });
    return true;
  } catch (error) {
    console.error('Error notifying Slack:', error);
    return false;
  }
}
