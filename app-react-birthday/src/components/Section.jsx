import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { getAllTasks } from "../api/task.api"; // Importa la función para obtener todas las tareas

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Personas";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "Invitados";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }

  useEffect(() => {
    // Realiza la solicitud de datos al montar el componente
    getAllTasks()
      .then((response) => {
        // Actualiza el estado de las tareas con los datos recibidos
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        // Maneja el error de la solicitud si es necesario
      });
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  const addItemToSection = (id) => {
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(mTasks));
      toast("Task status change", { icon: "👌" });
      return mTasks;
    });
  };

  return (
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-400" : ""}`}>
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div className={`${bg} flex items-center h-12 pl-4`}>
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default Section;
