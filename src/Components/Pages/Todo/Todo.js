import React from 'react';

const Todo = () => {
    return (
        <div>
            <div className='w-full h-56 bg-purple-400'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-5xl text-center text-white mt-14'>Compleate your task with us!!</h1>
                </div>
            </div>
            <div className='w-1/2 bg-base-200 p-3 mt-[-35px] mx-auto flex justify-center rounded-xl shadow-lg border-purple-400 border-2'>
                <div>
                    <div className='flex my-3'>
                        <input type="text" placeholder="Type here" class="input input-primary w-full max-w-xs rounded-none outline-none" />
                        <button className='btn bg-purple-500 hover:bg-purple-600 rounded-none'>Add Task</button>
                    </div>

                </div>
            </div>
            <div
                class="container mt-6 mb-2 flex mx-auto w-full items-center justify-center"
            >
                <ul class="flex flex-col p-4">
                    <li class="border-gray-400 flex flex-row">
                        <div
                            class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-purple-400"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">
                                    Product-Based Service Based or Hybrid?
                                </div>
                            </div>
                            <button className='btn bg-purple-500 hover:bg-purple-600 rounded-none mr-3'>Compleate! 🙂</button>
                            <button className='btn bg-purple-500 hover:bg-purple-600 rounded-none'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg></button>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div
                            class="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-purple-400 hover:shadow-2xl"
                        >
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">
                                    Target audience of startup
                                </div>
                            </div>
                            <button className='btn bg-purple-500 hover:bg-purple-600 rounded-none mr-3'>Compleate! 🙂</button>
                            <button className='btn bg-purple-500 hover:bg-purple-600 rounded-none'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg></button>

                        </div>
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Todo;