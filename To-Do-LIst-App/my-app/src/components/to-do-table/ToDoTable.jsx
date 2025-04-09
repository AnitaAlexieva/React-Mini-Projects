import { useEffect, useState } from "react";
import { useAllTasks } from "../../api/taskApi"

export default function ToDoTable() {

  const {allTasks} = useAllTasks();

  useEffect(() =>{
      console.log(allTasks)
  },[allTasks])
    return(
      <>
        <div className='to-do-table'>
        <table>
          <tbody>
            {allTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.newTask}</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
    )
}