import { NextPage } from 'next';
import linesPNG from '@/app/assets/img/Lines.png';
import { parse } from 'marked';
import Image from 'next/image';
import ContactButton from '@/app/components/contact-button';
import HeroEpithets from '@/app/components/hero-epithets';
import { getHerosInfo } from '../../../lib/supabase/queries/server/main-info';
import { notFound } from 'next/navigation';

interface SectHeroProps
  extends React.ComponentPropsWithoutRef<'section'> {}

const SectHero: NextPage<SectHeroProps> = async () => {
  const herosInfo = await getHerosInfo();
  if (herosInfo.error) {
    console.error(herosInfo.error);
    notFound();
  }
  const { hero_epithets, hero_greeting } = herosInfo.data;

  return (
    <section className="pb-28 pt-16 md:py-28">
      <div className="container relative z-1 max-w-4xl grid grid-cols-1 gap-8">
        <Image
          src={linesPNG}
          alt="Lines"
          className="-translate-y-[1px] w-full absolute top-0 pointer-events-none -z-10"
        />
        <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-bold mt-1 animated-colors__gradient bg-clip-text text-transparent select-none">
          <HeroEpithets data={hero_epithets} />
          <br />
          JavaScript разработчик
        </h1>
        <article
          className="text-cyangrey text-lg text-center mx-auto max-w-xl"
          dangerouslySetInnerHTML={{ __html: parse(hero_greeting) }}
        />
        <footer className="text-center flex justify-center">
          <ContactButton variant="fill" />
        </footer>
      </div>
    </section>
  );
};

export default SectHero;
