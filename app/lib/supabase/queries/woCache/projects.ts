import { createClient } from '../../serverWOCashe';

export const getProjectsSlugs = async () => {
  const supabase = createClient();
  return (await supabase.from('projects').select('slug')).data;
};
