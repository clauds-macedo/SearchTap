import React from 'react';
import Dropdown from './Dropdown'
import Toggle from './Toggle';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation().pathname

  return (
      <div className='flex w-100 justify-center items-center mt-6 sm:ml-2'>
          <div className='sm:flex w-11/12 justify-center p-1
          '>
                <div className='flex justify-around gap-3.5 items-center'>
                    {location !== '/' ?
                        <Link to="/"><button><a className='md:text-2xl'>SearchTap</a></button></Link>
                    : null }
                    <Dropdown/>
                    <Toggle/>
                </div>
          </div>
      </div>
  )
}

export default Header;