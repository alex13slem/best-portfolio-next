import { NextPage } from 'next';
import Image from 'next/image';
import classImg from '@/app/assets/img/stickers/class.png';
import thinkAboutThisImg from '@/app/assets/img/stickers/ThkAbtIt.png';
import AppearsText from '@/app/components/appears-text';
import { getHerosInfo } from '@/app/lib/supabase/queries/server/main-info';
import { Suspense } from 'react';

interface SectAboutMeProps
  extends React.ComponentPropsWithoutRef<'section'> {}

const SectAboutMe: NextPage<SectAboutMeProps> = async ({}) => {
  const herosInfo = await getHerosInfo();
  if (herosInfo.error) {
    console.error(herosInfo.error);
    return null;
  }
  return (
    <section id="about-me" className="pt-36 pb-28 md:py-36">
      <div className="container relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={thinkAboutThisImg}
            alt="Think About This"
            width={210}
            className={`absolute left-0 lg:left-10 top-0 -translate-y-full md:-translate-y-3/4 lg:translate-y-0 w-[9rem] md:w-[11rem] lg:w-auto pointer-events-none`}
          />
          <Image
            src={classImg}
            alt="Class"
            width={210}
            className={`absolute bottom-0 right-0 lg:right-10 translate-y-full lg:translate-y-0 md:translate-y-3/4 w-[9rem] md:w-[11rem] lg:w-auto pointer-events-none`}
          />
        </div>
        <h2 className="text-center bg-clip-text text-transparent text-sm font-extrabold white_gradient uppercase mb-4">
          Обо мне
        </h2>
        <Suspense>
          <AppearsText text={herosInfo.data.about_hero} />
        </Suspense>
      </div>
    </section>
  );
};

export default SectAboutMe;
