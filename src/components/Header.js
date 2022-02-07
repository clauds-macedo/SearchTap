import React from 'react';
import Dropdown from './Dropdown'
import Toggle from './Toggle';

const Header = () => {
  return (
      <div className='flex w-100 justify-center items-center mt-6'>
          <div className='sm:flex w-11/12 justify-center p-1
          '>
                <div className='flex justify-around gap-3.5 items-center'>
                    <button><a>Suporte</a></button>
                    <button><a>Logar</a></button>
                    <Dropdown/>
                    <Toggle/>
                </div>
          </div>
      </div>
  )
}

export default Header;