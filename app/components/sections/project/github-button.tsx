import { Icon } from '@iconify/react';
import { NextPage } from 'next';
import { cn } from '@/app/lib/heplers';

interface GithubButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  link: string;
}

const GithubButton: NextPage<GithubButtonProps> = ({ link }) => {
  return (
    <button
      className={cn(` 
          row-start-2 col-span-4
          sm:row-start-auto
          xl:col-span-1
          rounded-xl relative p-4
          bg-white bg-opacity-10 backdrop-blur-sm
          border border-white border-opacity-10
          flex justify-center items-center
          text-white text-opacity-60 hover:text-opacity-90 transition-colors`)}
    >
      <a href={link} target="_blank" className="absolute inset-0"></a>
      <Icon icon="octicon:logo-github-16" className="text-xl" />
    </button>
  );
};

export default GithubButton;
