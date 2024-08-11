import { NextPage } from 'next';
import Image from 'next/image';
import { addProtocolToUrl, cn } from '@/app/lib/heplers';
import { Tables } from '@/app/types/db';

interface SectThumbnailProps
  extends React.ComponentPropsWithoutRef<'section'> {
  project: Tables<'projects'>;
}

const SectThumbnail: NextPage<SectThumbnailProps> = ({ project }) => {
  const { site_link, thumbnail_greeting, name } = project;
  const formattedSiteLink = addProtocolToUrl(site_link);
  return (
    <section
      className={cn(`
          col-span-full 
          lg:col-span-8 lg:row-span-2 
          p-[2px] overflow-clip z-10
					rounded-xl animate-gradient__rotate animate-gradient__activeXs
					relative group aspect-video lg:aspect-auto
        `)}
    >
      <a
        href={formattedSiteLink}
        target="_blank"
        className={cn(`
            block
          bg-white bg-opacity-10 backdrop-blur-sm
						rounded-[10px] border border-white border-opacity-10
						overflow-clip
						z-10 h-full
          `)}
      >
        <Image
          src={thumbnail_greeting}
          alt={name}
          width={800}
          height={450}
          className="bg-[#0D1420]
              w-full h-full object-cover"
        />
      </a>
      <i></i>
    </section>
  );
};

export function SectThumbnailSkeleton() {
  return (
    <section
      className={cn(
        `animate-pulse
      bg-white bg-opacity-10
      col-span-full 
      lg:col-span-8 lg:row-span-2 
      rounded-xl 
      backdrop-blur-sm
      border border-white border-opacity-10
      aspect-video lg:aspect-auto
    `
      )}
    ></section>
  );
}

export default SectThumbnail;
