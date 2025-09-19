import { LucideIcon } from 'lucide-react';

type SecondaryBtnProps = {
  text: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
};

export default function SecondaryBtn({
  text,
  icon: Icon,
  onClick,
  className = '',
}: SecondaryBtnProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`btn btn-secondary flex items-center justify-center text-sm-fluid gap-2 ${className}`}
    >
      {Icon && <Icon className='w-4 h-4' />}
      <span>{text}</span>
    </button>
  );
}
