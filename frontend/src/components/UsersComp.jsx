import React from 'react'

function UsersComp(props) {
    const user=props.user;
    return (
        <div className='flex p-2 m-2'>
            <div className='m-1 mr-2 '>
                <img src='https://www.gravatar.com/avatar/0555bd0deb416a320a0069abef08078a?s=96&d=identicon&r=PG&f=1' className='h-16 p-1'></img>
            </div>

            <div className='p-1'>
                <h1 className='text-blue-600  hover:text-blue-400 text-lg '>{user.username}</h1>
                <p className='text-sm text-gray-500'>User_id</p>
                <p className='text-sm'>11234</p>
                <p className='text-sm text-blue-600  hover:text-blue-400'>java,c++</p>
            </div>
        </div>
    )
}

export default UsersComp