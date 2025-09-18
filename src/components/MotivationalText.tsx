import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Lightbulb, Leaf, Rocket } from 'lucide-react';

const messages = [
  { text: 'Make your day with your notes ✨', Icon: Sparkles },
  { text: 'Every thought matters 💡', Icon: Lightbulb },
  { text: 'Capture ideas, grow daily 🌱', Icon: Leaf },
  { text: 'Stay organized, stay inspired 🚀', Icon: Rocket },
];

export default function MotivationalText() {
  const [index, setIndex] = useState(0);

  // cycle every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { text, Icon } = messages[index];

  return (
    <div
      className='
        flex items-center gap-2 rounded-xl px-3 py-1 text-sm font-medium text-white shadow-sm
        bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]
        animate-gradient-move
      '
    >
      <AnimatePresence mode='wait'>
        <motion.span
          key={index + '-icon'}
          initial={{ rotate: -30, opacity: 0, x: -10 }}
          animate={{ rotate: 0, opacity: 1, x: 0 }}
          exit={{ rotate: 30, opacity: 0, x: 10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Icon className='w-4 h-4' />
        </motion.span>
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <motion.span
          key={index + '-text'}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='italic'
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
