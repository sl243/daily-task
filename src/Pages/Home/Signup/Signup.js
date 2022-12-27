import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = data => {

    }

    return (
        <div className='w-1/2 mx-auto rounded-md shadow-md mt-10'>
            <h1 className='text-2xl text-center font-bold mb-5'>Please Signup</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-3/4 mx-auto">
                    <input
                        {...register("name", {
                            required: 'Name is required'
                        })}
                        type="name"
                        placeholder="Your Full Name"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.name && <p className='text-red-500 w-3/4 mx-auto'>{errors.name?.message}</p>}
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
                {errors.email && <p className='text-red-500 w-3/4 mx-auto'>{errors.email?.message}</p>}
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("password", {
                            required: 'password is required',
                            minLength: { value: 8, message: 'Password Must be at least 6 character and Strong' },

                        })}
                        type="password"
                        placeholder="Your Password"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.password && <p className='text-red-500 w-3/4 mx-auto'>{errors.password?.message}</p>}
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                </div>
            </form>
            <div className="form-control w-3/4 mx-auto mt-3">
                <p className='text-sm mt-3 '>Already have an account?
                    <Link className='text-accent' to='/login'> Please Login</Link>
                </p>
            </div>
            <div className="form-control w-3/4 mx-auto mt-3">
                <div className="divider ">OR</div>
            </div>
            <div className="form-control w-3/4 mx-auto mt-3">
                <button className='btn btn-outline w-full mb-10'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;