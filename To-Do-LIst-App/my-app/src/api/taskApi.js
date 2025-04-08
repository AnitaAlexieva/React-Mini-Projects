import { request } from "../requester";

const baseUrl = 'https://localhost:3030/data/tasks';


    export const useCreateTask = () =>{

        const create = async(data) =>{
            await request(baseUrl, "POST", data);
        }
        return {create};
    }


