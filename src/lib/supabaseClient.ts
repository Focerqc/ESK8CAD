import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL
const supabaseUrl = 'https://vupaclakcmrkzmgmfou.supabase.co';

// Your public ANON key (Grab this from Dashboard -> Settings -> API)
// IMPORTANT: Use the 'anon' 'public' key here, NOT the service_role key!
const supabaseAnonKey = process.env.GATSBY_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1cGFjbGFrY21ya3ptcmdtZm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1NTg2NzAsImV4cCI6MjA4NzEzNDY3MH0.heiIoMAtsRjJG2iqNe1GPIjxtyIDogC30aFemJom8kY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);