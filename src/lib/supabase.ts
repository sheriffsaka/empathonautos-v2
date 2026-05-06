/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if variables are available
const isConfigured = supabaseUrl && supabaseAnonKey && 
                    supabaseUrl !== 'https://your-project.supabase.co' && 
                    supabaseAnonKey !== 'your-anon-key';

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Note: If supabase is null, the application should gracefully fall back
 * to a mock service or display a message to configure Supabase.
 */
export const isSupabaseConfigured = !!supabase;
