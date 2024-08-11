import { NextPage } from 'next';
import { SectDetailDescriptionSkeleton } from '@/app/components/sections/project/detail-description';
import { GithubButtonSkeleton } from '@/app/components/sections/project/github-button';
import { SectShortDescriptionSkeleton } from '@/app/components/sections/project/short-description';
import { SectTechnologiesSkeleton } from '@/app/components/sections/project/technologies';
import { SectThumbnailSkeleton } from '@/app/components/sections/project/thumbnail';

interface ProjectLoadingProps
  extends React.ComponentPropsWithoutRef<'main'> {}

const ProjectLoading: NextPage<ProjectLoadingProps> = () => {
  return (
    <main className="container py-5 grid grid-cols-12 grid-flow-dense gap-4">
      <SectThumbnailSkeleton />
      <SectDetailDescriptionSkeleton />
      <SectShortDescriptionSkeleton />
      <GithubButtonSkeleton />
      <SectTechnologiesSkeleton />
    </main>
  );
};

export default ProjectLoading;
