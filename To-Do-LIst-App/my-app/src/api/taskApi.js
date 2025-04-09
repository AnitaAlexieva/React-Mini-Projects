import { request } from "../requester";

const baseUrl = 'http://localhost:3030/jsonstore/tasks';


    export const useCreateTask = () =>{

        const create = async(data) =>{
            await request(baseUrl, "POST", data);
        }
        return {create};
    }


