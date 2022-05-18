import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) {
            toast.error(error.message)
        }
    }, [error])

    if (user) {
        navigate('/todo')
    }

    if (loading) {
        return <Loading />
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex w-96">

                    <div class="card w-full shadow-2xl bg-base-100">
                        <div class="card-body w-full">
                            <form onSubmit={handleLogin}>
                                <h1 className='text-center text-4xl text-purple-500'>Login</h1>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" class="input input-bordered" />
                                    <label class="label">
                                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn bg-purple-500 border-0 hover:bg-purple-800">Login</button>
                                </div>
                            </form>
                            <p className='text-center'>New here? <Link className='text-purple-500' to={'/registar'}>Create acount</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;