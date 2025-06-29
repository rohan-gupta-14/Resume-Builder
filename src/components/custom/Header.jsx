import React from 'react'
import {Button} from '../ui/button'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
        <img src='/logo.svg' width={100} height={100}/>
        <Link to={'/auth/sign-in'}>
             <Button className='bg-gray-700'>Get Started</Button>
        </Link>
    </div>
  )
}

export default Header