import React from 'react';
import { useDrag } from 'react-dnd';
import toast from 'react-hot-toast';

const Task = ({ task, tasks, setTasks }) => {
    // esta contante es la que me deja moverme de constado
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "task",
      item: { id: task.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
    console.log(isDragging);
    // desde handle tenes haceso a la logica de borrado de items
    const handleRemove = (id) => {
      //  console.log(id);
      const fTasks = tasks.filter((t) => t.id !== id);
      localStorage.setItem("tasks", JSON.stringify(fTasks));
      setTasks(fTasks);
      toast("Task removed", { icon: "💀" });
    };
    return (
      <div
        ref={drag}
        className={`relative p-4 mt-8 shadow-sm rounded-sm cursor-grab ${
          isDragging ? "opacity-25" : "opacity-100"
        } 
      `}
      >
        <p>{task.name}</p>
        <button
          className="absolute bottom-1 right-1 text-slate-500"
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
        <button className="absolute top-0 right-0 flex space-x-2"
         onClick={() => handleEdit(task.id)}>
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      </div>
    );
  };
  

export default Task;
