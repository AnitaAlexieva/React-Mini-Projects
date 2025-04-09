import { useEffect, useState } from "react";
import { useAllTasks } from "../../api/taskApi"
import CreateTask from "../create-task/CreateTask";

export default function ToDoTable() {

  const allTasks = useAllTasks();
  const [showTasks, setShowTasks] = useState(allTasks);


  useEffect(() =>{
      setShowTasks(allTasks)
  },[allTasks])


  const createShowTask = (newTask) =>{
    setShowTasks(state => [...state, newTask])
  }
    return(
      <>
        <div className='to-do-table'>
        <table>
          <tbody>
            {showTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.newTask}</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateTask onCreate={createShowTask}/>
      </>
    )
}