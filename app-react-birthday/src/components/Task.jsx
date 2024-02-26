import React, { useState } from "react";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import DeleteSvg from "./svg/DeleteSvg";
import SeeSvg from "./svg/SeeSvg";
import UserData from "./UserData";
import { deleteTask, getTask } from "../api/task.api";

const Task = ({ task, setTasks }) => {
  const [showUserData, setShowUserData] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleOutsideClick = (e) => {
    if (showUserData && !e.target.closest(".modal")) {
      setShowUserData(false);
    }
  };

  const handleSeeUserData = async () => {
    try {
      const response = await getTask(task.id);
      setUserData(response.data);
      setShowUserData(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Error fetching user data");
    }
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      // handle delete logic...
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Error deleting task");
    }
  };

  return (
    <div
      ref={drag}
      className={`relative p-4 mt-8 shadow-sm rounded-sm cursor-grab ${
        isDragging ? "opacity-25" : "opacity-100"
      }`}
    >
      <p>{task.name}</p>
      <div>
        <button
          className="absolute bottom-1 right-1 text-slate-500"
          onClick={() => handleDelete(task.id)}
        >
          <DeleteSvg />
        </button>
      </div>

      <div onClick={handleOutsideClick}>
        <button
          onClick={handleSeeUserData}
          className="absolute top-1 right-1 flex space-x-2"
        >
          <SeeSvg />
        </button>
        <UserData
          onClose={() => setShowUserData(false)}
          visible={showUserData}
          userData={userData}
        />
      </div>
    </div>
  );
};

export default Task;
