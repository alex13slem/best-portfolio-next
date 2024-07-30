import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '../../types/db';

export function createClient() {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        ...cookieStore,
        setAll: (cookies) => {
          for (const cookie of cookies) {
            cookieStore.set(
              cookie.name,
              cookie.value,
              cookie.options
            );
          }
        },
        getAll: () => cookieStore.getAll(),
      },
    }
  );
}
