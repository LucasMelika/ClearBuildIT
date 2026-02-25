# Supabase Database Setup

## Database Schema

Hier is de SQL die je moet uitvoeren in Supabase Dashboard om de `form_submissions` tabel aan te maken:

```sql
-- Create submissions table
CREATE TABLE form_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  project_type VARCHAR(100),
  message TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_form_submissions_status ON form_submissions(status);
CREATE INDEX idx_form_submissions_email ON form_submissions(email);
CREATE INDEX idx_form_submissions_created_at ON form_submissions(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow insert (anonymous users can submit)
CREATE POLICY "Allow anonymous insert" ON form_submissions
  FOR INSERT
  WITH CHECK (true);

-- Policy to allow select with password (admin only in practice, but protected by app)
CREATE POLICY "Allow select" ON form_submissions
  FOR SELECT
  USING (true);

-- Policy to allow update (admin/app can update)
CREATE POLICY "Allow update" ON form_submissions
  FOR UPDATE
  USING (true);

-- Policy to allow delete (admin/app can delete)
CREATE POLICY "Allow delete" ON form_submissions
  FOR DELETE
  USING (true);
```

## Setup Steps

### 1. Create Supabase Project
- Go to [supabase.com](https://supabase.com)
- Create a new project
- Wait for the project to be ready

### 2. Run the Database Schema
- Go to **SQL Editor**
- Create a new query
- Paste the SQL above
- Click **Run**

### 3. Get Your API Keys
- Go to **Settings** → **API**
- Copy:
  - **Project URL** → `VITE_SUPABASE_URL`
  - **anon public** key → `VITE_SUPABASE_ANON_KEY`
  - **service_role secret** → `VITE_SUPABASE_SERVICE_KEY` (for backend only!)

### 4. Update `.env.local`
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...your-key...
```

### 5. Test the Connection
- Fill out the contact form
- Check the Supabase dashboard table `form_submissions`
- You should see your submission!

## Slack Integration Setup

### 1. Create Slack Webhook
- Go to [Slack API - Incoming Webhooks](https://api.slack.com/messaging/webhooks)
- Click **Create New App** and select **From scratch**
- Name it "ClearBuildIT Notifications"
- In **Incoming Webhooks**, click **Add New Webhook to Workspace**
- Select the channel (e.g., #general or #contact-forms)
- Copy the webhook URL

### 2. Add to `.env.local`
```bash
VITE_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
```

### 3. Test Slack Notifications
- Fill out the contact form
- Check your Slack channel - you should see the notification!

## Admin Dashboard Access

- Go to `/admin`
- Default password: `demo` (change this!)
- View, filter, and manage form submissions

### Change Admin Password
Edit `/src/pages/AdminDashboard.jsx` line 16:
```javascript
const ADMIN_PASSWORD = 'your-new-password';
```

**Important:** For production, use proper authentication (Supabase Auth, Netlify Auth, etc.)

## Production Notes

⚠️ **SECURITY:**
- Never expose `VITE_SUPABASE_SERVICE_KEY` in frontend code
- In production, use Supabase Auth or Netlify Functions for authenticated access
- Consider adding reCAPTCHA to prevent spam submissions
- Rate limiting is already implemented client-side

## Monitoring & Maintenance

1. **Regularly check submissions** - Monitor the admin dashboard
2. **Backup your data** - Supabase provides automatic daily backups
3. **Archive old submissions** - Delete or archive after handling
4. **Monitor Slack** - Ensure notifications are still being sent

## Troubleshooting

### "Supabase not configured"
- Check that `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Restart dev server after changing .env.local

### Form submissions not saving
- Check browser console for errors
- Verify RLS policies are enabled in Supabase
- Check that the table name is exactly `form_submissions`

### Slack notifications not working
- Verify webhook URL is correct
- Check that the Slack app has permission to post
- Look at browser console for fetch errors

## Next Steps

1. ✅ Setup Supabase database
2. ✅ Configure Slack webhook
3. Consider adding email templates (SendGrid/Resend)
4. Consider adding proper authentication
5. Setup monitoring/alerts
6. Deploy to production!
