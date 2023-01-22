import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import TagsComp from '../components/TagsComp';

export default function AllTopics() {
    return (
        <div className=' pt-5 md:col-span-7 col-span-11 min-h-screen'>
            <h1 className='texport default ext-3xl'>AllTopics</h1>
            <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
            <p>Show all tag synonyms</p>

            <div className='flex justify-between'>
                <div className='flex items-center rounded-full bg-slate-100 w-3/12'>
                    <MagnifyingGlassIcon className=' h-6 m-2' />
                    <input type="text" className=" h-6 mx-5 bg-transparent outline-none" placeholder='Filter By Name'></input>
                </div>
                <div className='flex w-3/12'>
                    <div className='p-3 border-gray-300 border border-r-0'>
                        <p >Popular</p>
                    </div>
                    <div className='p-3 border-gray-300 border border-r-0'>
                        <p >Name</p>
                    </div>
                    <div className='p-3 border-gray-300 border'>
                        <p >New</p>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-3'>
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />
                <TagsComp />

            </div>
        </div>
    )
}
