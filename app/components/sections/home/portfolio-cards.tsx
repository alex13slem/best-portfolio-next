import { NextPage } from 'next';
import Image from 'next/image';
import heyImage from '@/app/assets/img/stickers/hey.png';
import ProjectCard from '@/app/components/project-card';
import { getProjectsWithTechnologies } from '@/app/lib/supabase/queries/server/projects';
import { Suspense } from 'react';

interface SectPortfolioCardsProps
  extends React.ComponentPropsWithoutRef<'section'> {}

const SectPortfolioCards: NextPage<
  SectPortfolioCardsProps
> = async () => {
  const projects = await getProjectsWithTechnologies();
  if (projects.error) {
    console.error(projects.error);
    return null;
  }
  return (
    <section className="relative">
      <div className="-z-10 min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full absolute top-0 gradient-experience__1 blur-[150px] -translate-y-1/4 -translate-x-1/2 left-1/2"></div>

      <div className="-z-20 w-full h-full max-w-[394px] max-h-[560px] gradient-experience__2 absolute top-0 -translate-x-1/2 left-1/2 opacity-100 blur-[150px] translate-y-2/3 lg:translate-y-1/3"></div>

      <div
        className={
          'relative max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10'
        }
      >
        <div className="-z-10 absolute top-6 left-0 select-none pointer-events-none -translate-y-full">
          <Image
            src={heyImage}
            alt={'Саша машет Вам рукой!'}
            className={'object-contain ml-3 md:ml-20 mx-auto w-auto'}
            height={184}
          />
        </div>
        <Suspense>
          {projects.data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default SectPortfolioCards;
