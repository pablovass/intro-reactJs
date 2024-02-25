import React from "react";

const ModalForm = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white p-2 rounded-md">
        <p>Mi modal</p>
        <button
          onClick={onClose}
          className="bg-cyan-500 rounded-md px-4 h-12 text-white hover:scale-95 transition text-xl"
        >
          Cerrar o actualizar o lo que sea
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
