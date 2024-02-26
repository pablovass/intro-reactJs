import React, { useState } from "react";
import ModalForm from "./ModalForm";

const CreateTask = () => {
  const [showModalForm, setShowModalForm] = useState(false);

  const handleOutsideClick = (e) => {
    if (showModalForm && !e.target.closest(".modal")) {
      setShowModalForm(false);
    }
  };

  return (
    <div onClick={handleOutsideClick}>
      <button
        className="bg-cyan-500 rounded-md px-4 h-12 text-white hover:scale-95 transition text-xl"
        onClick={() => setShowModalForm(true)}
      >
        GUARDAR LISTA
      </button>
      <ModalForm onClose={() => setShowModalForm(false)} visible={showModalForm} />
    </div>
  );
};

export default CreateTask;
