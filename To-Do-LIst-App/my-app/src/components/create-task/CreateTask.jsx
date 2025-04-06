export default function CreateTask() {
    return (
        <div className='create-form'>
            <form>
                <input className="create-input" type="text" name='newTask' placeholder='I have to...'></input>
                <button className="add-btn" type='submit'>Add Task</button>
            </form>
        </div>
    )
}