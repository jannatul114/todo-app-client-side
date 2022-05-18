import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
const Registar = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    useEffect(() => {
        if (error) {
            toast(error.message)
        }
    }, [error])
    const navigate = useNavigate()
    if (user) {
        navigate('/todo')
    }
    if (loading) {
        return <Loading />
    }

    const onSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex w-96">

                    <div class="card w-full shadow-2xl bg-base-100">
                        <div class="card-body w-full">
                            <form onSubmit={onSubmit}>
                                <h1 className='text-center text-4xl text-purple-500'>Registar</h1>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name(optional)</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' class="input input-bordered" required />
                                    <label class="label">
                                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn bg-purple-500 border-0 hover:bg-purple-800">Registar</button>
                                </div>
                            </form>
                            <p className='text-center'>Already have an account here? <Link className='text-purple-500' to={'/'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registar;