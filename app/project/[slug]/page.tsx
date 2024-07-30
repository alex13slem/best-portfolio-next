import { getProjectsSlugs } from '../../lib/supabase/queries/woCache/projects';

export const generateStaticParams = async () => {
  const projectsSlugs = await getProjectsSlugs();
  return projectsSlugs.map(({ slug }) => ({ slug }));
};

interface ProjectProps {
  params: { slug: string };
}

export default function Project({ params }: ProjectProps) {
  const { slug } = params;
  return <h1>Product {slug}</h1>;
}
