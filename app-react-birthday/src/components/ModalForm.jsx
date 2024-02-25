import React, { useRef, useState } from "react";

const ModalForm = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    documentNumber: "",
    email: "",
    phone: "",
    statusDB: ""
  });

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

  if (!visible) return null;

  return (
    <div
    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50" 
    onClick={handleClickOutside}
    >
      <div ref={modalRef} className="bg-white p-2 rounded-md">
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-2 rounded w-72" onClick={handleFormClick}>
            <h1 className="font-semibold text-center text-xl text-gray-700">
              Welcome back
            </h1>
            <p className="text-center text-gray-700 mb-5">Sign in</p>

            <div className="flex flex-col">
  <input
    type="text"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    className="border border-gray-700 p-2 rounded mb-5"
    placeholder="Last Name"
  />
  <input
    type="text"
    name="birthdate"
    value={formData.birthdate}
    onChange={handleChange}
    className="border border-gray-700 p-2 rounded mb-5"
    placeholder="Birthdate"
  />
  <input
    type="text"
    name="documentNumber"
    value={formData.documentNumber}
    onChange={handleChange}
    className="border border-gray-700 p-2 rounded mb-5"
    placeholder="Document Number"
  />
  <input
    type="text"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="border border-gray-700 p-2 rounded mb-5"
    placeholder="Email"
  />
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className="border border-gray-700 p-2 rounded mb-5"
    placeholder="Phone"
  />
  <input
    type="text"
    name="statusDB"
    value={formData.statusDB}
    onChange={handleChange}
    className="border border-gray-700 p-2 rounded mb-5"
    placeholder="Status DB"
  />
</div>

            <div className="text-center">
              <button className="px-5 py-2 bg-gray-700 text-white rounded">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
