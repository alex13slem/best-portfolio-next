import { NextPage } from 'next';
import { cn } from '../lib/heplers';

interface SiteLogoProps
  extends React.ComponentPropsWithoutRef<'span'> {
  // Добавьте пропсы, если необходимо
}

const SiteLogo: NextPage<SiteLogoProps> = ({ className }) => {
  return (
    <span
      className={cn(
        `
			font-logo text-2xl text-transparent font-bold
			bg-clip-text bg-gradient-to-r from-cyan to-cyan via-yellow
			logo-animation`,
        className
      )}
    >
      alex13slem
    </span>
  );
};

export default SiteLogo;
