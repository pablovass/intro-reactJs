import { useEffect, useState } from "react";
import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  useEffect(() => {
    if (tasks) {
      const fTodos = tasks.filter((task) => task.status === "todo");
      const fInProgress = tasks.filter((task) => task.status === "inprogress");

      setTodos(fTodos);
      setInProgress(fInProgress);
    }
  }, [tasks]);

  const statuses = ["todo", "inprogress"];

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
        />
      ))}
    </div>
  );
};

export default ListTasks;
