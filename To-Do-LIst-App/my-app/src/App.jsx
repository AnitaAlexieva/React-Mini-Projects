import './App.css'
import CreateTask from './components/create-task/CreateTask'
import Header from './components/header/Header'
import ToDoTable from './components/to-do-table/ToDoTable'

function App() {
  
  return (
    <>
      <Header/>

      <ToDoTable/>

      <CreateTask/>
      
    </>
  )
}

export default App
