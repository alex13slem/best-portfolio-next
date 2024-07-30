import SectHero from './components/sections/hero';
import SectPortfolioCards from './components/sections/portfolio-cards';

export default function Home() {
  return (
    <main>
      <SectHero />
      <SectPortfolioCards />
      {/* <SectAboutMe /> */}
      {/* <SectRibbon /> */}
      {/* <SectContacts /> */}
    </main>
  );
}
