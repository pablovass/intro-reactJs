import React from 'react';
import { useDrag } from 'react-dnd';
import toast from 'react-hot-toast';
import RemoveSvg from './RemoveSvg';
import SeeSvg from './SeeSvg';

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
          <RemoveSvg/>
          
        </button>
        <button className="absolute top-1 right-1 flex space-x-2"
         onClick={() => handleEdit(task.id)}>
          <SeeSvg/>
          
        </button>
      </div>
    );
  };
  

export default Task;
