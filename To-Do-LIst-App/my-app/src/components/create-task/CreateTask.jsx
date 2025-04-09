import { useCreateTask } from "../../api/taskApi";


export default function CreateTask({
    onCreate
}) {

    const {create} = useCreateTask();

    const createHadnler = async(formData) =>{
        const data = Object.fromEntries(formData);

        try{
            const task = await create(data);
            console.log(task);
            onCreate(task)
        }catch(error){
            console.log(error); 
        }
        
    }
    return (
        <div className='create-form'>
            <form action={createHadnler}>
                <input className="create-input" type="text" name='newTask' placeholder=' I have to...'></input>
                <button className="add-btn" type='submit'>Add Task</button>
            </form>
        </div>
    )
}