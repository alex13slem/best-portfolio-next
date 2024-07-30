import ContactButton from './contact-button';
import SiteLogo from './site-logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur">
      <div
        className="container flex justify-between
  items-center py-4"
      >
        <a className="contents" href="/">
          <SiteLogo />
        </a>
        <ContactButton />
      </div>
      <hr className="border-none h-px opacity-15 bg-gradient-to-r from-transparent via-white to-transparent" />
    </header>
  );
}
