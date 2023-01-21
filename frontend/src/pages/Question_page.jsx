import React from 'react'

function Question_page() {
    return (
        <div className='mx-20 pt-5 md:col-span-7 grid col-span-9 min-h-screen gap-y-4'>
            <div className=' text-4xl m-3'>
                <h1>Ask a public question</h1>
            </div>
            <div className=' bg-blue-300 p-6'>
                <h2 class="fs-title fw-normal mb8">Writing a good question</h2>
                <p class="fs-body2 mb0">
                    Youre ready to programming-related question and this form will help guide you through the process.
                </p>
                <ul>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>Describe what you tried and what you expected to happen.</li>
                    <li>Add “tags” which help surface your question to members of the community.</li>
                    <li>Review your question and post it to the site.</li>
                </ul>
            </div>
            <div className='my-8 border p-4 shadow-lg' >
                <h1 className=' text-xl'>Title</h1>
                <p>Be specific and imagine youre asking a question to another person.</p>
                <div>
                    <input type='text' className='p-3 w-full my-4 outline outline-1 outline-gray-200 ' ></input>
                </div>
                <div>
                    <button className=' bg-blue-300 p-3 rounded-full'>Next</button>

                </div>
            </div>
            <div className='my-8 border p-4 shadow-lg' >
                <h1 className=' text-xl'>What are the details of your problem?</h1>
                <p className=' mb-4'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                <div>
                    <textarea class="p-3 resize-y w-full h-60 outline outline-1 outline-gray-200 my-4"></textarea>
                    {/* <input type='text' className=' w-full  my-4' ></input> */}
                </div>
                <div className='mt-4'>
                    <button className=' bg-blue-300 p-3 rounded-full'>Next</button>
                </div>
            </div>
            <div className='my-8 border p-4 shadow-lg' >
                <h1 className=' text-xl'>What did you try and what were you expecting?</h1>
                <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
                <div>
                    <textarea class="p-3 my-4 resize-y w-full h-60 outline outline-1 outline-gray-200"></textarea>
                    {/* <input type='text' className=' w-full  my-4' ></input> */}
                </div>
                <div>
                    <button className=' bg-blue-300 p-3 rounded-full'>Next</button>
                </div>
            </div>
            <div className='my-8 border p-4 shadow-lg ' >
                <h1 className=' text-xl'>Tags</h1>
                <p>Be Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                <div >
                    <input type='text' className='p-3 w-full  my-4  outline outline-1 outline-gray-200' ></input>
                </div>
                <div>
                    <button className=' bg-blue-300 p-3 rounded-full'>Next</button>

                </div>
            </div>
            <div>
                <button className=' text-red-600 hover:bg-red-200 p-2'>Discard Draft</button>
            </div>
        </div>
    )
}

export default Question_page