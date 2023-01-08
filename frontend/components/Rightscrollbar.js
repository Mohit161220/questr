import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Rightscrollbar() {
    return (
        <div className=' col-span-3 border-l hidden lg:inline'>
            <div className='flex items-center rounded-full bg-slate-100 '>
                <MagnifyingGlassIcon className=' h-8 m-2' />
                <input type="text" className=" h-8 mx-5 bg-transparent outline-none" placeholder='Search Questions'></input>
            </div>

        </div>
    )
}

export default Rightscrollbar