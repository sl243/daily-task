import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const hanldeAddTask = data => {

    }
    return (
        <div className='w-1/2 mx-auto rounded-md shadow-md mt-10'>
            <h1 className='text-2xl text-center font-bold mb-5'>Add Task</h1>
            <form onSubmit={handleSubmit(hanldeAddTask)}>
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("text", {
                            required: 'Task is required'

                        })}
                        type="text"
                        placeholder="Add Task"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.text && <p className='text-red-500 w-3/4 mx-auto'>{errors.text?.message}</p>}
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("file", {
                            required: 'image is required',

                        })}
                        type="file"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.file && <p className='text-red-500 w-3/4 mx-auto'>{errors.file?.message}</p>}
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input className='btn btn-accent w-full mb-10' value='Submit' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;