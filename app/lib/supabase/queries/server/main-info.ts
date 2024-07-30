import { cache } from 'react';
import { createClient } from '../../server';

export const getHerosInfo = cache(async () => {
  const supabase = createClient();
  return await supabase
    .from('main_info')
    .select('hero_epithets, hero_greeting')
    .single();
});
