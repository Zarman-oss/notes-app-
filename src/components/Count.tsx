import { useState } from 'react';
import React from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    return setCount;
  };

  return (
    <>
      <div>
        count: {count}
        <button className='bg-white p-3' onClick={increment}></button>
      </div>
    </>
  );
}
