import React, { useState } from "react";
import { createTask } from "../api/task.api";

const ModalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    documentNumber: "",
    email: "",
    phone: "",
    status: "todo"
  });

  const handleSubmit = async () => {
    try {
      const response = await createTask(formData);
      console.log("Response from createTask:", response.data);
      // Aquí podrías hacer algo con la respuesta, como actualizar el estado de tu aplicación
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      {/* Agrega más campos de entrada para el resto de los datos de la tarea */}
      <button onClick={handleSubmit}>Create Task</button>
    </div>
  );
};

export default ModalForm;
