

import React, { useState } from 'react';
import pic from '../images/nice.jpg'
const img = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

const CounterApp = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if(count > 0)
        {
            setCount(count - 1);
        }
       
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div style={img} className='flex justify-center items-center h-screen '>
          
            <div className='border rounded-2xl  bg-[#000000B2] h-96 w-96 flex flex-col justify-between p-4'>
                <h1 className='font-extrabold text-4xl text-center text-white  '>Counter App</h1>
                <span className='text-center text-9xl text-white'>{count}</span>
                <div className='flex justify-between'>
                    <button onClick={decrement} className='border rounded-full bg-black text-white w-10 h-10' disabled={count === 0}>-</button>
                    <button onClick={increment} className='border rounded-full bg-black text-white w-10 h-10'>+</button>
                    <button onClick={reset} className='border rounded-full bg-black text-white w-11 h-11 '>Reset</button>
                </div>
               
            </div>
        </div>
    );
};

export default CounterApp;
