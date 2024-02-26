import React, { useRef, useEffect } from "react";
import EditSvg from './svg/EditSvg'
import RemoveSvg from './svg/RemoveSvg'

const UserData = ({ visible, onClose, userData }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (visible) {
      // Aquí puedes realizar alguna lógica adicional cuando el componente se muestra
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
      onClick={handleClickOutside}
    >
      <div ref={modalRef} className="bg-white p-4 rounded-lg">
        <h2>User Data</h2>
        {userData && (
          <>
            <p>Name: {userData.name}</p>
            <p>Last Name: {userData.lastName}</p>
            <p>Birthdate: {userData.birthdate}</p>
            <p>Document Number: {userData.documentNumber}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Status DB: {userData.statusDB}</p>
            <p>Status: {userData.status}</p>
            <div className="flex space-x-4">
              <button>
                <EditSvg />
              </button>
              <button>
                <RemoveSvg />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserData;
