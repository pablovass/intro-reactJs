import React, { useRef, useState, useEffect } from "react";
import EditSvg from './EditSvg'
import RemoveSvg from './RemoveSvg'
const UserData = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    documentNumber: "",
    email: "",
    phone: "",
    statusDB: ""
  });

  const [userData, setUserData] = useState([]); // Arreglo para almacenar los datos de usuario

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleFormClick = (event) => {
    event.stopPropagation(); // Evita que el clic dentro del formulario se propague al contenedor del modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    // Aquí puedes cargar los datos de usuario desde alguna fuente externa, como una API o el localStorage
    // Por ahora, inicializamos userData con datos de ejemplo
    const exampleData = [
      {
        id: 1,
        name: "John",
        lastName: "Doe",
        birthdate: "1990-01-01",
        documentNumber: "123456789",
        email: "john@example.com",
        phone: "123-456-789",
        statusDB: "Active",
        status: "Active"
      },
 
    ];
    setUserData(exampleData);
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
      onClick={handleClickOutside}
    >
      <div ref={modalRef} className="bg-white p-4 rounded-lg">
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
              {/* Aquí puedes agregar botones u otros elementos para interactuar con los datos de usuario */}
              <div className="flex space-x-4">
                <button>
                  {/* Aquí reemplaza 'EditSvg' con el componente SVG de edición */}
                  <EditSvg />
                </button>
                <button>
                  {/* Aquí reemplaza 'RemoveSvg' con el componente SVG de eliminación */}
                  <RemoveSvg />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Aquí puedes agregar cualquier otro contenido o elementos del modal */}
        
        
      </div>
     
        
    </div>
  );
};

export default UserData;
