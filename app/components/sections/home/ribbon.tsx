import { NextPage } from 'next';
import { cn } from '@/app/lib/heplers';
import { getTechnologies } from '@/app/lib/supabase/queries/server/technologies';

interface SectRibbonProps
  extends React.ComponentPropsWithoutRef<'section'> {}

const SectRibbon: NextPage<SectRibbonProps> = async () => {
  const technologies = await getTechnologies();
  if (technologies.error) {
    console.error(technologies.error);
    return null;
  }
  const keywords = technologies.data.map((tech) => tech.name);
  const keywordsString = (keywords.join(' · ') + ' · ').repeat(2);

  return (
    <section className="relative py-16 z-20 overflow-clip">
      <p
        className={cn(`
		group
		uppercase font-extrabold text-[40px] whitespace-nowrap text-bg leading-loose
		rotate-[3deg] md:scale-[101%] 
		origin-center select-none
		bg-white
		`)}
      >
        <span className="ribbon-animation__slideshow group-hover:-scale-y-100 transition-all duration-200 tracking-widest inline-block">
          {keywordsString}
        </span>
      </p>
    </section>
  );
};

export default SectRibbon;
