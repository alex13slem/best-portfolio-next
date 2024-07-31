import SectHero from '@/app/components/sections/home/hero';
import SectPortfolioCards from '@/app/components/sections/home/portfolio-cards';
import SectAboutMe from '@/app/components/sections/home/about-me';
import SectRibbon from '@/app/components/sections/home/ribbon';
import SectContacts from '@/app/components/sections/home/contacts';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense>
        <SectHero />
      </Suspense>
      <Suspense>
        <SectPortfolioCards />
      </Suspense>
      <Suspense>
        <SectAboutMe />
      </Suspense>
      <Suspense>
        <SectRibbon />
      </Suspense>
      <Suspense>
        <SectContacts />
      </Suspense>
    </main>
  );
}
