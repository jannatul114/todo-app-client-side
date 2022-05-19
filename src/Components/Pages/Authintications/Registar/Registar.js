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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex w-96">

                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body w-full">
                            <form onSubmit={onSubmit}>
                                <h1 className='text-center text-4xl text-purple-500'>Registar</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name(optional)</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn bg-purple-500 border-0 hover:bg-purple-800">Registar</button>
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