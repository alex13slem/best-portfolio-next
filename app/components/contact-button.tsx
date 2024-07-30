import { NextPage } from 'next';
import { VariantStyles } from './ui/firm-button/types';
import Button from './ui/firm-button';
import { getSocials } from '../lib/supabase/queries/client/socials';

interface ContactButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  variant?: VariantStyles;
  text?: string;
}

const ContactButton: NextPage<ContactButtonProps> = async ({
  text,
  ...props
}) => {
  const socials = (await getSocials()).data;
  const href = socials?.find(
    (social) => social.slug === ('telegram' || 'vk' || 'hh')
  )?.url;

  return (
    <Button href={href} external {...props}>
      {text || 'Напиши мне'}
    </Button>
  );
};

export default ContactButton;
