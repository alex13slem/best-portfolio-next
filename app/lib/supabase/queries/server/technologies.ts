import { createClient } from '../../server';

export async function getTechnologies() {
  const supabase = createClient();
  return await supabase.from('technologies').select('*');
}
