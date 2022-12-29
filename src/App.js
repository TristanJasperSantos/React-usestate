import { useState } from 'react';
import React from 'react';

const App = ()=>{
    const [count, setCount] = useState(0);

    const minusCount = ()=>{
      setCount(prevCount=>{
         return prevCount - 1;
      })
    }

    const addCount = ()=>{
      setCount (prevCount =>{
        return prevCount + 1;
      }) 
    }

  return(
      <div>
        <div className=' flex justify-center items-center w-80 h-80 rounded-full bg-white mb-4'>
          <h1 className=' text-7xl'>{count}</h1>
        </div>
        <div className=' flex gap-8 justify-center items-center text-white'>
          <button onClick={minusCount} className=' flex justify-center items-center p-6 h-4 w-4 rounded-full border border-white text-2xl'>-</button>
          <button onClick={addCount} className=' flex justify-center items-center p-6 h-4 w-4 rounded-full border border-white text-2xl'>+</button>
        </div>
      </div>
  )
}

export default App;
