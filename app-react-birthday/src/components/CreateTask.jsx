import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";

const CreateTask = ({ tasks, setTasks }) => {
  const [showMyModal, setShowMyModal] = useState(false);
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo", //can also bi inprogress or closed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3)
      return toast.error("a task must have more than 3 characters");

    if (task.name.length > 100)
      return toast.error("A task must not be more than 100 characters");

    setTasks((prev) => {
      const list = prev ? [...prev, task] : [task]; // Use conditional spread
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("Task Created");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showMyModal && !e.target.closest(".modal")) {
        setShowMyModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMyModal]);

  return (
    <form onSubmit={handleSubmit}>
      <ModalForm onClose={() => setShowMyModal(false)} visible={showMyModal} />
      <button
        className="bg-cyan-500 rounded-md px-4 h-12 text-white hover:scale-95 transition text-xl"
        onClick={() => setShowMyModal(true)}
      >
        CARGA PERSONA
      </button>
    </form>
  );
};

export default CreateTask;
