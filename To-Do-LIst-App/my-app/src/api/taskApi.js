import { useEffect, useState } from "react";
import { request } from "../requester";

const baseUrl = 'http://localhost:3030/jsonstore/tasks';


    export const useCreateTask = () =>{

        const create = async(data) =>{
            return await request(baseUrl, "POST", data);
        }
        return {create};
    }

    export const useAllTasks = () =>{
        const [allTasks, setAllTasks] = useState([]);

        useEffect(() =>{
            const getAll = async() =>{
                const data = await request(baseUrl, "GET")
                setAllTasks(Object.entries(data).map(([id, newTask]) => ({id, ...newTask})))
            }
            getAll();
        },[])
       
        return allTasks;
    }

    export const deleteTask = () =>{
        const delTask = async (taskId) =>{
            await request(`${baseUrl}/${taskId}`, "DELETE");
        }
        return{delTask};
    }

