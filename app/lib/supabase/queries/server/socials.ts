import { cache } from 'react';
import { createClient } from '../../server';

export const getSocialBySlug = cache(async (slug: string) => {
  const supabase = createClient();
  return await supabase
    .from('socials')
    .select('*')
    .eq('slug', slug)
    .single();
});

export const getSocials = cache(async () => {
  const supabase = createClient();
  return await supabase.from('socials').select('*');
});
