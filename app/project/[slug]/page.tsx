import { getProjectsSlugs } from '../../lib/supabase/queries/woCache/projects';

export async function generateStaticParams() {
  return await getProjectsSlugs();
}

interface ProjectProps {
  params: { slug: string };
}

export default function Project({ params }: ProjectProps) {
  const { slug } = params;
  return <h1>Product {slug}</h1>;
}
