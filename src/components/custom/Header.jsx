import React from 'react'
import {Button} from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react'
function Header() {
   const {user, isSignedIn} = useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
        <img src='/logo.svg' width={100} height={100}/>
        {isSignedIn ?
          <div className='flex gap-2 items-center'>
            <Button variant="outline">Dashboard</Button>
            <UserButton/>
          </div> :
          <Link to={'/auth/sign-in'}>
             <Button className='bg-gray-700'>Get Started</Button>
          </Link>
      
        }
        
    </div>
  )
}


export default Header