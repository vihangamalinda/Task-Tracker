import { useState } from 'react'
import AddTask from './components/AddTask';

import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks,setTasks]  = useState([{
    id: 1,
    text : "Hello World",
    day : "13/09/2021",
    reminder : true,
},
{
  id: 2,
  text : "Second Hello",
  day : "14/09/2021",
  reminder : true,
},
])
// Deleting an item 
const onDeleteTask=(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle Riminder
const toggleRiminder=(id)=>{
  setTasks(tasks.map( (task)=> task.id === id
  ? {...task,reminder: !task.reminder} : task

  ))}

// adding the task
const addTask = (task) =>{
  const id = Math.floor(Math.random()* 1000) + 1 
  console.log(id)
  //adding the values from submited form with a random id no
  const newTask = {id,...task}
  setTasks([...tasks,newTask])

}




  return (
    <div className="container">
       <Header title="Task Tracker"
        onAdd = {()=> {
          setShowForm(!showForm)
          
          }} 
        showForm ={showForm}
        />
      {showForm &&
      <AddTask onAdd={addTask}/>
      }
    
     {tasks.length >0 ?
      (<Tasks tasks={tasks} onDeleteTask={onDeleteTask} onToggle={toggleRiminder}/>):
      (<p>There is no task to do</p>)
      }
    </div>

  );
}

export default App;
