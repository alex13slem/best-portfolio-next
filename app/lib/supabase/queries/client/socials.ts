import supabase from '../../client';

export const getSocials = () => supabase.from('socials').select('*');
