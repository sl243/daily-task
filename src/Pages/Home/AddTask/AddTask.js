import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const hanldeAddTask = data => {
        const image = (data.image[0]);
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?expiration=600&key=c8b8f4751965741d3eaf91363d5ce7de'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success){
                    console.log(imgData.data.url)

                    const addtask = {
                        name: data.name,
                        image: imgData.data.url
                    }

                    // save infomation in the database
                    fetch('http://localhost:5000/addtasks', {
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json',
                        },
                        body: JSON.stringify(addtask)
                    })
                    .then( res => res.json())
                    .then( result => {
                        console.log(result)
                        // toast.success(`${data.name} is added successfully`)
                        // navigate('/dashboard/managedoctors')
                    })
                }
            })
    }

    return (
        <div className='w-1/2 mx-auto rounded-md shadow-md mt-10'>
            <h1 className='text-2xl text-center font-bold mb-5'>Add Task</h1>
            <form onSubmit={handleSubmit(hanldeAddTask)}>
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("name", {
                            required: 'Task is required'

                        })}
                        type="name"
                        placeholder="Add Task"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.text && <p className='text-red-500 w-3/4 mx-auto'>{errors.text?.message}</p>}
                <div className="form-control w-3/4 mx-auto mt-3">
                    <input
                        {...register("image", {
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