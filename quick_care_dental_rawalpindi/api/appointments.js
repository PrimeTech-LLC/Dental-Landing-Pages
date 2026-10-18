// Vercel serverless function — POST /api/appointments
//
// Validates the booking form submission and returns 200 OK.
// Submissions are logged to Vercel function logs (visible in the Vercel dashboard).
// To add email notifications or a database later, extend this file.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    full_name,
    phone,
    email,
    service,
    preferred_date,
    preferred_time,
    notes,
  } = req.body || {};

  if (!full_name || !phone) {
    return res.status(400).json({ error: 'full_name and phone are required' });
  }

  // Log submission — visible in Vercel → Functions → Logs
  console.log('New appointment request:', {
    full_name,
    phone,
    email: email || null,
    service: service || null,
    preferred_date: preferred_date || null,
    preferred_time: preferred_time || null,
    notes: notes || null,
    submitted_at: new Date().toISOString(),
  });

  return res.status(200).json({ ok: true });
}
