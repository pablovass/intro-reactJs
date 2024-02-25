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
   <>
    <Toaster/>
    <div className="bg-slate-200 w-screen h-screen flex flex-col items-center pt-32 gap-16 text-lime-950">
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
   </>
  );
}
export default App
