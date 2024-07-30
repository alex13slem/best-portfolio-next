import { createClient as createServerClient } from '@supabase/supabase-js';
import { Database } from '../../types/db';

export function createClient() {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
