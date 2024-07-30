import { NextPage } from 'next';
import { getContacts } from '../lib/supabase/queries/server/main-info';
import SiteLogo from './site-logo';
import ContactButton from './contact-button';
import Link from 'next/link';

interface FooterProps
  extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: NextPage<FooterProps> = async ({}) => {
  const { data, error } = await getContacts();
  return (
    <footer className="backdrop-blur">
      <hr className="border-none h-px opacity-15 bg-gradient-to-r from-transparent via-white to-transparent" />
      <div className="container flex flex-col md:flex-row justify-between items-center py-4 gap-4">
        <div className="flex flex-col gap-2">
          <Link className="contents" href="/">
            <SiteLogo />
          </Link>
          {!error && data.email && (
            <a
              href={`mailto:${data.email}`}
              className="text-white text-opacity-60 font-medium text-sm"
            >
              {data.email}
            </a>
          )}
          <p className="text-white text-opacity-60 font-medium text-sm">
            © 2024 alex13slem. Все права защищены.
          </p>
        </div>
        <div className="flex gap-2">
          <ContactButton className="hidden md:block" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
