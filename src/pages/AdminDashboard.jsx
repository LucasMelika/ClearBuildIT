import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Helmet } from 'react-helmet-async';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Super simple password check (for local dev/testing only)
  // In production: use proper auth (Supabase Auth, Netlify Auth, etc.)
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'demo';

  useEffect(() => {
    if (!isAuthenticated) return;
    
    const fetchSubmissions = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }

      try {
        let query = supabase
          .from('form_submissions')
          .select('*')
          .order('created_at', { ascending: false });

        if (filter !== 'all') {
          query = query.eq('status', filter);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Error fetching submissions:', error);
        } else {
          setSubmissions(data || []);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [isAuthenticated, filter]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const updateSubmissionStatus = async (id, newStatus) => {
    if (!supabase) return;

    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
      } else {
        setSubmissions(submissions.map(s => s.id === id ? { ...s, status: newStatus } : s));
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const deleteSubmission = async (id) => {
    if (!confirm('Zeker weten dat je dit wilt verwijderen?')) return;

    if (!supabase) return;

    try {
      const { error } = await supabase
        .from('form_submissions')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting:', error);
      } else {
        setSubmissions(submissions.filter(s => s.id !== id));
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <Helmet>
          <title>Admin Dashboard - ClearBuildIT</title>
        </Helmet>
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-neutral-900 mb-6">Admin Dashboard</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Voer wachtwoord in"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-2 rounded-lg font-medium hover:bg-neutral-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (!supabase) {
    return (
      <div className="min-h-screen bg-neutral-50 p-6">
        <Helmet>
          <title>Admin Dashboard - ClearBuildIT</title>
        </Helmet>
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              ⚠️ Supabase is niet geconfigureerd. Voeg VITE_SUPABASE_URL en VITE_SUPABASE_ANON_KEY toe aan .env.local
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <Helmet>
        <title>Admin Dashboard - ClearBuildIT</title>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Admin Dashboard</h1>
            <p className="text-neutral-600 mt-1">
              {submissions.length} formulieren ontvangen
            </p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-50"
          >
            Logout
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-2 flex-wrap">
          {['all', 'new', 'in_progress', 'resolved', 'spam'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === status
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {status === 'all' ? 'Alles' : status === 'new' ? '🆕 Nieuw' : status === 'in_progress' ? '⏳ Bezig' : status === 'resolved' ? '✅ Afgehandeld' : '🚫 Spam'}
            </button>
          ))}
        </div>

        {/* Submissions Table */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-neutral-600">Bezig met laden...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-600">Geen formulieren gevonden</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700">Naam</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700">Datum</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700">Acties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-neutral-50">
                      <td className="px-6 py-4 text-sm text-neutral-900 font-medium">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600">
                        <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline">
                          {submission.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600">
                        {submission.project_type}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600">
                        {new Date(submission.created_at).toLocaleDateString('nl-NL')}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={submission.status}
                          onChange={(e) => updateSubmissionStatus(submission.id, e.target.value)}
                          className="text-sm px-3 py-1 rounded border border-neutral-300 focus:ring-2 focus:ring-green-500"
                        >
                          <option value="new">🆕 Nieuw</option>
                          <option value="in_progress">⏳ Bezig</option>
                          <option value="resolved">✅ Afgehandeld</option>
                          <option value="spam">🚫 Spam</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <a
                            href={`#details-${submission.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Details
                          </a>
                          <button
                            onClick={() => deleteSubmission(submission.id)}
                            className="text-red-600 hover:text-red-700 font-medium"
                          >
                            Verwijderen
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Details Section */}
        <div className="mt-8 space-y-4">
          {submissions.map((submission) => (
            <details
              key={`details-${submission.id}`}
              id={`details-${submission.id}`}
              className="bg-white rounded-lg border border-neutral-200 p-6"
            >
              <summary className="cursor-pointer font-medium text-neutral-900">
                📝 Bericht van {submission.name}
              </summary>
              <div className="mt-4 space-y-2 text-sm text-neutral-700">
                <p><strong>Naam:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Telefoon:</strong> {submission.phone || 'Niet opgegeven'}</p>
                <p><strong>Project Type:</strong> {submission.project_type}</p>
                <p><strong>Datum:</strong> {new Date(submission.created_at).toLocaleString('nl-NL')}</p>
                <div>
                  <strong>Bericht:</strong>
                  <p className="mt-1 whitespace-pre-wrap bg-neutral-50 p-3 rounded">
                    {submission.message}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
