import React from 'react';
import { useForm } from 'react-hook-form';

const DailyTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const hanldeDailyTask = data => {

        const task = {
            DailyTask: data.name
        };
        console.log(task)

        // const task = data.name

        // daily task store in database
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='w-1/2 mx-auto rounded-md shadow-md mt-10'>
            <h1 className='text-2xl text-center font-bold mb-5'>Add Daily Task</h1>
            <form onSubmit={handleSubmit(hanldeDailyTask)}>
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("name", {
                            required: 'Task is required',

                        })}
                        type="name"
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