import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext)

    const handleLogIn = data => {

        signIn(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    
    return (
        <div className='w-1/2 mx-auto rounded-md shadow-md mt-10'>
            <h1 className='text-2xl text-center font-bold mb-5'>Please Login</h1>
            <form onSubmit={handleSubmit(handleLogIn)}>
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("email", {
                            required: 'Email is required',

                        })}
                        type="email"
                        placeholder="Your Email Address"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("password", {
                            required: 'Email is required',

                        })}
                        type="password"
                        placeholder="Your Password"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </div>
            </form>
            <div className="form-control w-3/4 mx-auto mt-3">
                <p className='text-sm mt-3 mb-10 font-bold'>New to Daily Task ?
                    <Link className='text-accent font-bold' to='/signup'> Create new account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;