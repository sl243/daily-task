import React from 'react';
import { useForm } from 'react-hook-form';

const DailyTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const hanldeDailyTask = data => {

    }
    return (
        <div className='w-1/2 mx-auto rounded-md shadow-md mt-10'>
            <h1 className='text-2xl text-center font-bold mb-5'>Add Daily Task</h1>
            <form onSubmit={handleSubmit(hanldeDailyTask)}>
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("text", {
                            required: 'Task is required',

                        })}
                        type="text"
                        placeholder="Enter Your Daily Task"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.text && <p className='text-red-500 w-3/4 mx-auto'>{errors.text?.message}</p>}
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input className='btn btn-accent w-full mb-10' value='Add' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default DailyTask;