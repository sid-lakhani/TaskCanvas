import React from 'react';


const Header= () => {
  return (
    <>
      <div className='flex justify-between items-center fixed top-0 w-full left-0 bg-inherit px-5 sm:px-10 border-b border-solid border-white'>
        <h1 className='text-6xl font-extrabold select-none py-2'>Task<span className="text-gradient">Canvas</span></h1>
        <a href="./"><img src='/home.svg' alt='Home' className='w-12 h-12 hover:opacity-50 duration-300 cursor-pointer'/></a>
        <style>
                {`
                    .text-gradient {
                        background-image: var(--accent-gradient);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-size: 500%;
                        background-position: 10%;
                    }
                `}
            </style>
      </div>
    </>
  );
};

export default Header;
