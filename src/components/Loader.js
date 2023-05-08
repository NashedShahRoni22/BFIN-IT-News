import React from 'react';

const Loader = () => {
    return (
        <div className='p-10 flex justify-center items-center gap-4'>
            <div className='h-6 w-6 rounded-full bg-blue-500 animate-bounce'></div>
            <div className='h-6 w-6 rounded-full bg-blue-500'></div>
            <div className='h-6 w-6 rounded-full bg-blue-500 animate-bounce'></div>
        </div>
    );
};

export default Loader;