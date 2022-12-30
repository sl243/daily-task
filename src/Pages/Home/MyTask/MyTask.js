import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const MyTask = () => {
    const { user } = useContext(AuthContext)

    const { data: mytasks, isLoading, refetch } = useQuery({
        queryKey: ['mytasks'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://daily-task-server-eight.vercel.app/mytask?email=${user?.email}`, {
                })
                const data = await res.json();
                return data;
            }
            catch {

            }
        }
    })


    // delete My Task
    const handleDeleteTask = mytask => {
        fetch(`https://daily-task-server-eight.vercel.app/mytask/${mytask._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${mytask.name} deleted successfully`)
                }

            })
    }

    return (
        <div className='w-3/4 mx-auto'>
            <h3 className='text-3xl mb-6 mt-5'>My Task</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>task</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytasks?.map((mytask, i) => <tr key={mytask._id}>
                                <th>{i + 1}</th>
                                <td>{mytask.DailyTask}</td>
                                <td>
                                    {<button className="btn btn-ghost">Update</button>}
                                </td>
                                <td>
                                    {<button onClick={handleDeleteTask} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;