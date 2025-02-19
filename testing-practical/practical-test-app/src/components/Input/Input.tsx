import React from "react";

interface InputProps {
    placeholder: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Input;
