import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await authService.login(usuario, contraseña);
    if (!res.success) {
      setError(res.message || "Usuario y/o contraseña incorrectos.");
    } else {
      localStorage.setItem(
        "usuario",
        JSON.stringify({ rol: "admin", nombre: usuario })
      );
      navigate("/principal");
    }
  };

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input
            type="text"
            id="usuario"
            className="form-control"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingrese su usuario"
            required
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary w-100">Aceptar</button>
      </form>
    </>
  );
};

export default LoginForm;