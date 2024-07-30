import { NextPage } from 'next';
import { Tables } from '@/app/types/db';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn, addProtocolToUrl } from '@/app/lib/heplers';

interface SectTechnologiesProps
  extends React.ComponentPropsWithoutRef<'section'> {
  technologies: Tables<'technologies'>[];
}

const SectTechnologies: NextPage<SectTechnologiesProps> = ({
  technologies,
}) => {
  return (
    <section
      className={cn(`
			col-span-8 row-span-2 row-start-2
			sm:col-span-4 sm:row-start-3
			lg:row-span-2  lg:row-start-auto
			xl:col-span-3 
			p-4 rounded-xl
			bg-white bg-opacity-10 backdrop-blur-sm
			border border-white border-opacity-10 h-fit`)}
    >
      <h2
        className={cn(`white_gradient
				 font-bod bg-clip-text text-transparent text-xl text-right leading-none`)}
      >
        Технологии на проекте
      </h2>
      <div className="mt-3 flex flex-row-reverse flex-wrap gap-3 prose prose-slate dark:prose-invert">
        {technologies.map((t) => (
          <a
            key={t.name}
            href={addProtocolToUrl(t.link)}
            className={cn(`text-2xl flex justify-center items-center
						 text-white text-opacity-60 hover:text-opacity-90 transition-colors`)}
            title={t.name}
          >
            <Icon icon={t.iconify_id} className="text-xl" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectTechnologies;
