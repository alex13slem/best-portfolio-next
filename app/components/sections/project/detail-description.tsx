import { NextPage } from 'next';
import { Tables } from '@/app/types/db';
import { cn } from '@/app/lib/heplers';
import { parse } from 'marked';

interface SectDetailDescriptionProps
  extends React.ComponentPropsWithoutRef<'section'> {
  project: Tables<'projects'>;
}

const SectDetailDescription: NextPage<SectDetailDescriptionProps> = ({
  project,
}) => {
  const { body } = project;
  return (
    <section
      className={cn(`
          col-span-full 
          lg:col-span-8 lg:row-start-3 
          p-4 rounded-xl
					bg-white bg-opacity-10 backdrop-blur-sm
					border border-white border-opacity-10`)}
    >
      <div
        className="prose prose-sm md:prose-base prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: parse(body) }}
      />
    </section>
  );
};

export function SectDetailDescriptionSkeleton() {
  return (
    <section
      className={cn(`
          col-span-full 
          lg:col-span-8 lg:row-start-3 
          rounded-xl
          bg-white bg-opacity-10 backdrop-blur-sm
          border border-white border-opacity-10
          animate-pulse
          min-h-svh
      `)}
    ></section>
  );
}

export default SectDetailDescription;
