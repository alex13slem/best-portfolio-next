import { cache } from 'react';
import { createClient } from '../../server';

export const getProjectsWithTechnologies = cache(async () => {
  const supabase = createClient();
  return await supabase.from('projects').select(`
		*,
    technologies (*)
  `);
});

export const getProjectsSlugs = cache(async () => {
  const supabase = createClient();
  return (await supabase.from('projects').select('slug')).data;
});

export const getProjectBySlug = cache(async (slug: string) => {
  const supabase = createClient();
  return await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();
});

export const getProjectWithTechnologiesBySlug = cache(
  async (slug: string) => {
    const supabase = createClient();
    return await supabase
      .from('projects')
      .select(
        `
				*,
				technologies (*)
				`
      )
      .eq('slug', slug)
      .single();
  }
);
