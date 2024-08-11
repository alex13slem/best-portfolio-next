import { NextPage } from 'next';
import { Database } from '@/app/types/db';
import { cn } from '@/app/lib/heplers';
import Button from '@/app/components/ui/firm-button';
import Image from 'next/image';
import linesPNG from '@/app/assets/img/Lines.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import { getSocials } from '@/app/lib/supabase/queries/server/socials';
import { Suspense } from 'react';

interface SectContactsProps
  extends React.ComponentPropsWithoutRef<'section'> {}

const SectContacts: NextPage<SectContactsProps> = async () => {
  const socials = await getSocials();
  if (socials.error) {
    console.error(socials.error);
    return null;
  }
  const getButtonText = (
    slug: Database['public']['Enums']['socials_enum']
  ) => {
    switch (slug) {
      case 'telegram':
        return 'Связаться в Telegram';
      case 'github':
        return 'Посети мой GitHub';
      case 'vk':
        return 'Связаться в VK';
      case 'discord':
        return 'Связаться в Discord';
      case 'hh':
        return 'Посмотри мою вакансию';
    }
  };
  return (
    <section className="pt-36 pb-44 md:py-36">
      <div
        className={cn(`
		container max-w-5xl relative md:overflow-visible`)}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={linesPNG}
            alt="Lines"
            className="-translate-y-[1px] w-full h-[70vh] lg:h-auto absolute bottom-0 pointer-events-none -z-10"
          />
          <div
            className={cn(`
			w-full h-[60vh] 
			rounded-full 
			absolute bottom-0 md:top-0 translate-y-1/3  md:-translate-y-2/3
			gradient-experience__1 blur-3xl md:blur-[150px] opacity-100 z-10
			`)}
          ></div>
        </div>
        <h2
          className={cn(`
		text-center bg-clip-text text-transparent text-sm font-extrabold white_gradient uppercase mb-4`)}
        >
          Мои контакты
        </h2>
        <p
          className={cn(`
		font-bold text-4xl sm:text-5xl bg-clip-text white_gradient text-transparent leading-snug text-center
		`)}
        >
          Готовы начать интересный проект?
        </p>
        <Suspense>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 md:mt-20">
            {socials.data.map((social) => (
              <article
                key={social.id}
                className="text-center flex flex-col items-center gap-3"
              >
                <Icon
                  icon={social.iconify_id}
                  className="text-7xl text-white text-opacity-90"
                />
                <Button variant="fill" href={social.url} external>
                  {getButtonText(
                    social.slug as Database['public']['Enums']['socials_enum']
                  )}
                </Button>
              </article>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default SectContacts;
