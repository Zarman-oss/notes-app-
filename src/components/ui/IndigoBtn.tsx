import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

type IndigoBtnProps = {
  text: string;
  icon?: LucideIcon;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function IndigoBtn({
  text,
  icon: Icon,
  className = '',
  ...props
}: IndigoBtnProps) {
  return (
    <button
      {...props}
      className={`btn btn-secondary text-sm-fluid flex items-center justify-center gap-2 ${className}`}
    >
      {Icon && <Icon className='w-4 h-4' />}
      <span>{text}</span>
    </button>
  );
}
