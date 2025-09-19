import NoteForm from '@/components/NoteForm';
import { LucideNotebookPen } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';
import MotivationalText from '@/components/MotivationalText';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className='wrapper mt-12'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex items-center gap-2 justify-center'
        >
          <LucideNotebookPen
            width={42}
            height={42}
            className='text-primary animate-pulse'
          />
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
            className='text-3xl-fluid font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg'
          >
            NOTED
          </motion.h1>
        </motion.div>
        {/* Motivational texts */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <MotivationalText />
        </motion.div>

        {/* NoteForm Component */}
        <NoteForm notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
