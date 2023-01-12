import React from 'react'
import { BellIcon, HashtagIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, MailIcon, UserIcon, HomeIcon } from '@heroicons/react/24/outline'

// interface Props {
//     Icon: (props: SVGProps<SVGSVGElement>) => JSXElement
//     title: String
// }

function Sidebarrow({ icon, title }) {
    return (
        <div className='flex cursor-pointer max-w-fit items-center space-x-2 px-6 py-4 rounded-full hover:bg-slate-100 transition-all duration-200 hover:text-twitter'>
            {icon}
            <p className=' hidden mx-2 md:inline'>{title}</p>
        </div>
    )
}

export default Sidebarrow