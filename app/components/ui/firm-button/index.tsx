import type { ButtonHTMLAttributes, ComponentProps, FC } from 'react';
import type { VariantStyles } from './types';
import { variantsCss } from './styles';
import { cn } from '@/app/lib/heplers';
// import Link from 'next/link';
import { Link } from 'next-view-transitions';

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ComponentProps<FC> {
  variant?: VariantStyles;
  href?: string;
  external?: boolean;
}

const Button: FC<Props> = ({
  className,
  href,
  external,
  children,
  disabled,
  variant = 'bordered',
  ...props
}) => {
  const BtnLink = external ? 'a' : Link;
  return (
    <button
      className={cn(
        variantsCss.root[variant],
        `relative  rounded-full 
        font-medium text-base group z-0`,
        disabled ? 'filter grayscale' : 'cursor-pointer',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {href && (
        <BtnLink
          href={href}
          target={external ? '_blank' : ''}
          className="absolute inset-0 z-20"
        />
      )}
      <span
        className={cn(
          variantsCss.text[variant],
          `inline-block px-7 py-3 rounded-full z-10 relative`
        )}
      >
        {children}
      </span>
      {!disabled && <i className={cn(variantsCss.i[variant])} />}
    </button>
  );
};

export default Button;
