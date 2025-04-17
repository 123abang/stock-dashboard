
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Using direct values since this is the public anon key meant to be exposed in client-side code
const SUPABASE_URL = "https://clzimxpwogqqabyatjtj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsemlteHB3b2dxcWFieWF0anRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2Nzk5MzgsImV4cCI6MjA2MDI1NTkzOH0.ZM2GypA8alFmfYrLd6RuxISN8ytKVYIdQQhqCLGYT1c";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
