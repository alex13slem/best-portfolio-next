import { cache } from 'react';
import supabase from '../../server';

export const getProjectsWithTechnologies = cache(
  async () =>
    await supabase.from('projects').select(`
		*,
    technologies (*)
  `)
);

export const getProjectsSlugs = cache(
  async () => (await supabase.from('projects').select('slug')).data
);

export const getProjectBySlug = cache(
  async (slug: string) =>
    await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()
);

export const getProjectWithTechnologiesBySlug = cache(
  async (slug: string) =>
    await supabase
      .from('projects')
      .select(
        `
				*,
				technologies (*)
				`
      )
      .eq('slug', slug)
      .single()
);
