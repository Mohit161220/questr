import React from 'react'
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/24/outline'
import Sidebarrow from './Sidebarrow'

function Sidebar() {
    return (
        <div className='border-r text-center col-span-2'>
            <img src='https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale' className=' h-16'></img>
            <Sidebarrow
                icon={<HomeIcon className='h-10' />}
                title={"Home"}
            />

            <Sidebarrow
                icon={<BookmarkIcon className='h-10' />}
                title={"Bookmark"}
            />

            <Sidebarrow
                icon={<HashtagIcon className='h-10' />}
                title={"Explore"}
            />

            <Sidebarrow
                icon={<UserIcon className='h-10' />}
                title={"User"}
            />

            <Sidebarrow
                icon={<EnvelopeIcon className='h-10' />}
                title={"Messages"}
            />



        </div>
    )
}



export default Sidebar