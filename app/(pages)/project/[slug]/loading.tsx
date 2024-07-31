import { NextPage } from 'next';

interface ProjectLoadingProps
  extends React.ComponentPropsWithoutRef<'main'> {}

const ProjectLoading: NextPage<ProjectLoadingProps> = () => {
  return (
    <main>
      <h1>Loading...</h1>
    </main>
  );
};

export default ProjectLoading;
