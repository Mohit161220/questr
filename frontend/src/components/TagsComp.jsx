import React from 'react'

function TagsComp() {
    return (
        <div className='p-3 border-gray-300 border m-2 rounded-md'>
            <span className='text-blue-600 hover:text-blue-400 bg-slate-100 p-2 '>Javascript</span>
            <p className='my-3 text-sm'>
                compiled client and server successfully in 86 ms (166 modules)
                wait  - compiling / (client and server)...
                event - compiled client and server successfully in 219 ms (794 modules)
            </p>
        </div>
    )
}

export default TagsComp