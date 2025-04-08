import { useCreateTask } from "../../api/taskApi";


export default function CreateTask() {

    const {create} = useCreateTask();

    const createHadnler = async(formData) =>{
        const data = Object.fromEntries(formData);
        const task = await create(data);
        console.log(task);
    }
    return (
        <div className='create-form'>
            <form>
                <input className="create-input" type="text" name='newTask' placeholder=' I have to...'></input>
                <button className="add-btn" type='submit' onSubmit={createHadnler}>Add Task</button>
            </form>
        </div>
    )
}