import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import QuestionBox from './QuestionBox';

function Feedbar() {
    return (
        <div className='col-span-7 lg:col-span-5 '>
            <div className='flex justify-between p-3 '>
                <p className='text-xl font-bold'>Home</p>
                <ArrowPathIcon className=' h-8 cursor-pointer hover:text-twitter duration-200 hover:rotate-180' />

            </div>

            <QuestionBox />
        </div>
    )
}

export default Feedbar