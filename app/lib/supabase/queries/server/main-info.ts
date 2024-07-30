import { cache } from 'react';
import { createClient } from '../../server';

export const getHerosInfo = cache(async () => {
  const supabase = createClient();
  return await supabase
    .from('main_info')
    .select('hero_epithets, hero_greeting, about_hero')
    .single();
});

export const getContacts = cache(async () => {
  const supabase = createClient();
  return await supabase
    .from('main_info')
    .select('email, phone')
    .single();
});

export const getMainSeo = cache(async () => {
  const supabase = createClient();
  return await supabase
    .from('main_info')
    .select('site_name, site_description, open_graph_image')
    .single();
});
