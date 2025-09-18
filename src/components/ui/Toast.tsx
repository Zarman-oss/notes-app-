import { CheckCircle, AlertTriangle, Info, XCircle } from 'lucide-react';

type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
};

export default function Toast({ message, type = 'info', onClose }: ToastProps) {
  const styles: Record<typeof type, string> = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-600',
  };

  const icons = {
    success: <CheckCircle className='w-4 h-4 mr-2' />,
    error: <XCircle className='w-4 h-4 mr-2' />,
    warning: <AlertTriangle className='w-4 h-4 mr-2' />,
    info: <Info className='w-4 h-4 mr-2' />,
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center
                  px-4 py-2 rounded-lg text-sm shadow-md animate-fade-in-out
                  ${styles[type]}`}
      role='alert'
    >
      {icons[type]}
      <span>{message}</span>
    </div>
  );
}
