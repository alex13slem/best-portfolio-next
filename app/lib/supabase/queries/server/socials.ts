import { cache } from 'react';
import supabase from '../../server';

export const getSocialBySlug = cache(
  async (slug: string) =>
    await supabase
      .from('socials')
      .select('*')
      .eq('slug', slug)
      .single()
);

export const getSocials = cache(
  async () => await supabase.from('socials').select('*')
);
