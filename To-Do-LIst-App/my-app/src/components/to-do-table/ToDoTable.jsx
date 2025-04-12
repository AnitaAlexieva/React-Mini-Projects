import { useEffect, useState } from "react";
import { deleteTask, useAllTasks } from "../../api/taskApi";
import CreateTask from "../create-task/CreateTask";

export default function ToDoTable() {
  const allTasks = useAllTasks();
  const [showTasks, setShowTasks] = useState([]);
  const { delTask } = deleteTask();

  useEffect(() => {
    // Normalize tasks to have 'id' and add 'completed' state
    const normalizedTasks = allTasks.map(task => ({
      ...task,
      id: task._id, // use _id as id
      completed: task.completed || false, // ensure 'completed' is boolean
    }));
    setShowTasks(normalizedTasks);
  }, [allTasks]);

  const createShowTask = (newTask) => {
    setShowTasks(state => [
      ...state,
      {
        ...newTask,
        completed: false,
      },
    ]);
  };

  const removeTask = async (taskId) => {
    try {
      await delTask(taskId);
      setShowTasks(prev => prev.filter(task => task.id !== taskId));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCompleted = (taskId) => {
    setShowTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="to-do-table">
        <table>
          <tbody>
            {showTasks.map((task) => (
              <tr key={task._id} className={task.completed ? "crossTask" : ""}>
                <td>{task.newTask}</td>
                <td>
                  <button onClick={() => toggleCompleted(task.id)}>
                    <i className="fa-solid fa-check"></i>
                  </button>
                </td>
                <td>
                  <button onClick={() => removeTask(task.id)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateTask onCreate={createShowTask} />
    </>
  );
}
