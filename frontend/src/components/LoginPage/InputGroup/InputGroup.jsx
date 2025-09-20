import { useState } from "react";
import "./InputGroup.css";

const InputGroup = ({ type, placeholder, icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="input-group">
      {/* Ícone do input */}
      <i className={`bi ${icon}`}></i>

      {/* Input */}
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : "text"}
        placeholder={placeholder}
      />

      {/* Toggle de senha */}
      {type === "password" && (
        <i
          className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} toggle-password`}
          onClick={togglePassword}
        ></i>
      )}
    </div>
  );
};

export default InputGroup;
