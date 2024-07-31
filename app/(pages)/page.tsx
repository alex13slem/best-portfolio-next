import SectHero from '@/app/components/sections/home/hero';
import SectPortfolioCards from '@/app/components/sections/home/portfolio-cards';
import { getHerosInfo } from '@/app/lib/supabase/queries/server/main-info';
import { getProjectsWithTechnologies } from '../lib/supabase/queries/server/projects';
import { notFound } from 'next/navigation';
import SectAboutMe from '../components/sections/home/about-me';
import SectRibbon from '../components/sections/home/ribbon';
import { getTechnologies } from '../lib/supabase/queries/server/technologies';
import SectContacts from '../components/sections/home/contacts';
import { getSocials } from '../lib/supabase/queries/server/socials';
import { Metadata, ResolvingMetadata } from 'next';

export default async function Home() {
  const herosInfoPromise = getHerosInfo();
  const projectsWithTechnologiesPromise =
    getProjectsWithTechnologies();
  const technologiesPromise = getTechnologies();
  const socialsPromise = getSocials();
  const [herosInfo, projectsWithTechnologies, technologies, socials] =
    await Promise.all([
      herosInfoPromise,
      projectsWithTechnologiesPromise,
      technologiesPromise,
      socialsPromise,
    ]);
  if (herosInfo.error || projectsWithTechnologies.error) {
    notFound();
  }

  return (
    <main>
      <SectHero herosInfo={herosInfo.data} />
      <SectPortfolioCards projects={projectsWithTechnologies.data} />
      <SectAboutMe herosInfo={herosInfo.data} />
      {!technologies.error && (
        <SectRibbon technologies={technologies.data} />
      )}
      {!socials.error && <SectContacts socials={socials.data} />}
    </main>
  );
}
