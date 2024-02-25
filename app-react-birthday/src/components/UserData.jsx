import React, { useState, useEffect } from "react";
import ModalForm from "./ModalForm"; // Suponiendo que ya tienes un componente ModalForm

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [editingUserData, setEditingUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Función para cargar los datos del localStorage al cargar el componente
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(storedData);
  }, []);

  // Función para manejar la edición de los datos
  const handleEdit = (data) => {
    setEditingUserData(data);
    setIsEditing(true);
  };

  // Función para manejar la cancelación de la edición
  const handleCancelEdit = () => {
    setEditingUserData(null);
    setIsEditing(false);
  };

  return (
    <div>
      <h2>User Data</h2>
      <ul>
        {userData.map((data) => (
          <li key={data.id}>
            <p>Name: {data.name}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Birthdate: {data.birthdate}</p>
            <p>Document Number: {data.documentNumber}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Status DB: {data.statusDB}</p>
            <p>Status: {data.status}</p>
            <button onClick={() => handleEdit(data)}>Edit</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <ModalForm
          data={editingUserData}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default UserData;
