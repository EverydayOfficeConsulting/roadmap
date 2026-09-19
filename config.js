// Supabase connection — used by index.html and admin.html.
// Find both values in Supabase: Project Settings → API (or "Connect").
// The anon/publishable key is safe to put in a public GitHub repo:
// Row Level Security (schema.sql) decides what each visitor can do.
// NEVER put the service_role / secret key here.
window.EOCO_CONFIG = {
  SUPABASE_URL: 'https://YOUR-PROJECT-ID.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR-ANON-PUBLIC-KEY'
};
