import { cache } from 'react';
import supabase from '../../server';

export const getHerosInfo = cache(
  async () =>
    await supabase
      .from('main_info')
      .select('hero_epithets, hero_greeting')
      .single()
);
