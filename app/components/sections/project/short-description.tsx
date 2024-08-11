import { NextPage } from 'next';
import { Tables } from '@/app/types/db';
import { cn } from '@/app/lib/heplers';
import { parse } from 'marked';

interface SectShortDescriptionProps
  extends React.ComponentPropsWithoutRef<'section'> {
  project: Tables<'projects'>;
}

const SectShortDescription: NextPage<SectShortDescriptionProps> = ({
  project,
}) => {
  const { name, role, description } = project;
  return (
    <section
      className={cn(`
          col-span-full row-span-1 row-start-4 
          sm:col-span-8 sm:row-start-2 sm:row-span-4 
          lg:row-span-1 lg:row-start-auto lg:col-span-4 
          p-4 rounded-xl
          bg-white bg-opacity-10 backdrop-blur-sm
          border border-white border-opacity-10 min-h-96`)}
    >
      <h1
        className={cn(`white_gradient
             font-bold bg-clip-text text-transparent text-3xl text-right`)}
      >
        {name}
      </h1>
      <p className="text-base text-gray-300 font-medium text-right">
        {role}
      </p>
      <div
        className="prose prose-sm md:prose-base prose-slate dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: parse(description) }}
      />
    </section>
  );
};

export function SectShortDescriptionSkeleton() {
  return (
    <section
      className={cn(`
          col-span-full row-span-1 row-start-4 
          sm:col-span-8 sm:row-start-2 sm:row-span-4 
          lg:row-span-1 lg:row-start-auto lg:col-span-4 
          rounded-xl
          bg-white bg-opacity-10 backdrop-blur-sm
          border border-white border-opacity-10
          animate-pulse
          min-h-96
      `)}
    ></section>
  );
}

export default SectShortDescription;
