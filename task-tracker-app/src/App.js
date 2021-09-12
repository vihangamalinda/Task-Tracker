import { useState } from 'react'

import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [tasks,setTasks]  = useState([{
    id: 1,
    text : "Hello World",
    date : "13/09/2021",
    reminder : true,
},
{
  id: 2,
  text : "Second Hello",
  date : "14/09/2021",
  reminder : true,
},
])
  return (
    <div className="container">
     <Header title="Task Tracker"/>
     <Tasks tasks={tasks}/>
    </div>

  );
}

export default App;
