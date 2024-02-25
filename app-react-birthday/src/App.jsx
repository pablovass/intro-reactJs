import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CreateTask from './components/CreateTask';
import  ListTasks  from "./components/ListTasks";
import { useEffect, useState } from "react";

import { Toaster } from 'react-hot-toast';


const App=()=> {

  const [tasks, setTasks] = useState([]);

  
  console.log("tasks", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  
  return (
   <DndProvider backend={HTML5Backend}>
    <Toaster/>
    <div className="bg-slate-200 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32 ">
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
   </DndProvider>
  );
}
export default App
