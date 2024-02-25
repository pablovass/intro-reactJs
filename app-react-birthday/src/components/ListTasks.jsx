import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast  from "react-hot-toast"; 

const ListTasks = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInpregress] = useState([]);
  const [closed, setClosed] = useState([]);
  useEffect(() => {
    const fTodos = tasks.filter((task) => task.status === "todo");
    const fInProgress = tasks.filter((task) => task.status === "inprogress");
    const fClosed = tasks.filter((task) => task.status === "closed");

    setTodos(fTodos);
    setInpregress(fInProgress);
    setClosed(fClosed);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div className="flex gap-16">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
  );
};

export default ListTasks;
// las columnas de donde van a esta las listas

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
    const[{isOver},drop]=useDrop(()=>({
        accept:"task",
        drop:(item)=>addItemToSection(item.id),
        collect:(monitor)=>({
            isOver:!!monitor.isDragging(),
        }),
    }));
  let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "inProgress") {
    text = "In Progress";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }
  if (status === "closed") {
    text = "Closed";
    bg = "bg-green-500";
    tasksToMap = closed;
  }
const addItemToSection=(id)=>{
    console.log("droped",id);
}
  return (
    <div className={`w-64`}>
      <Header text={text} bg={bg} count={tasksToMap.length} />

      {tasksToMap.length > length &&
        tasksToMap.map((map) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div className={`${bg} flex items-center h-12 pl-4`}>
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex  items-center justify-center ">
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
     const handleRemove=(id)=>{
        console.log(id);
     }
  return (
    <div className={`relative p-4 mt-8 shadow-sm rounded-sm cursor-grab`}>
      <p>{task.name}</p>
      <button
        className="absolute button-1 right-1 text-slate-400"
        onClick={() => handleRemove(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};
