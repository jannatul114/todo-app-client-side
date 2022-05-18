import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';



const Todo = () => {
    const [user, loading] = useAuthState(auth);
    const [tasks, setTask] = useState([])

    const email = user.email;
    useEffect(() => {
        fetch(`https://infinite-scrubland-82298.herokuapp.com/tasks?email=${email}`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [tasks])
    if (loading) {
        return <Loading />
    }
    const AddTask = event => {
        event.preventDefault();
        const taskName = event.target.task.value;
        const userEmail = user.email;
        const description = event.target.description.value;

        const usersTask = { title: taskName, user: userEmail, description: description }
        fetch(`https://infinite-scrubland-82298.herokuapp.com/tasks`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(usersTask)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.success('YAY!! Task successfully added!!')
        event.target.reset()

    }

    const deleteTask = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `https://infinite-scrubland-82298.herokuapp.com/tasks/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tasks.filter(task => task._id !== id)
                    setTask(remaining);
                })
        }
    }

    const handleTextDecor = id => {
        fetch(`https://infinite-scrubland-82298.herokuapp.com/tasks/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };



    return (
        <div>
            <div className='w-full h-56 bg-purple-400'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-5xl text-center text-white mt-14'>Compleate your task with us!!</h1>
                </div>
            </div>
            <div className='w-1/2 bg-base-200 p-3 mt-[-35px] mx-auto flex justify-center rounded-xl shadow-lg border-purple-400 border-2'>
                <div>
                    <form onSubmit={AddTask}>
                        <div className=' my-4'>
                            <input type="text" placeholder="Task title" name='task' class="input input-primary w-full max-w-xl rounded-none outline-none" required />
                            <textarea name='description' class="textarea border-purple-500 border-2 w-full my-3 rounded-none" placeholder="Task description" required></textarea>
                            <div className='flex justify-center'>
                                <button type='submit' className='btn bg-purple-500 hover:bg-purple-600 rounded-none'>Add Task</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div
                class="container mt-6 mb-2 flex mx-auto w-full items-center justify-center"
            >
                <ul class="grid grid-cols-1  p-4 gap-5">
                    {
                        tasks?.length === 0 ? <h1 className='text-center text-purple-400 text-5xl'>No Tasks Yet</h1> : tasks?.map(task => <li class="mx-auto flex justify-center rounded-xl ">
                            <div
                                class="select-none flex justify-center p-5 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-purple-400"
                            >
                                <div>
                                    <div class=" pl-1 mr-16 text-center">


                                        <h1 className='text-4xl text-center'>{task?.title}</h1>


                                        <div class="font-medium text-center">
                                            {task?.description}
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-5'>
                                        <button onClick={() => handleTextDecor(task._id)} className='btn bg-purple-500 hover:bg-purple-600 rounded-none mr-3' >Compleate! 🙂</button>
                                        <button onClick={() => deleteTask(task?._id)} className='btn bg-purple-500 hover:bg-purple-600 rounded-none'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg></button>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }



                </ul>
            </div>
        </div>
    );
};

export default Todo;