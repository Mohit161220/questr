import React from 'react'

function QuestionBox() {
    return (
        <div>
            <div>
                <form className='mx-10'>
                    <input type="text" placeholder='Type your question here' className='block m-2 w-96 h-20 outline-none '></input>
                    <button className=' bg-twitter text-white p-2 w-20 rounded-full text-xl'>Ask</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionBox