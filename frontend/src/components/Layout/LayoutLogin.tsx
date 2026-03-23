import React from "react";
import { Outlet } from "react-router-dom";
import loginWallpaper from "../../assets/loginWallpaper.jpg";
import logo2 from "../../assets/logo2.png";  

const LayoutLogin: React.FC = () => {
  return (
    <div
      className="vh-100 w-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${loginWallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card shadow-lg p-4 text-center"
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#e6e6e6",
          borderRadius: "8px",
        }}
      >
        {/* Logo */}

        <img
          src={logo2}
          alt="Logo"
          className="mb-3"
          style={{
            maxHeight: "150px",
            maxWidth: "150px",
            width: "auto",
            height: "auto",
            display: "block",
            margin: "0 auto", 
          }}
        />
        <h4 className="mb-3">Iniciar sesión</h4>

        {/* Aquí se renderiza LoginForm */}
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutLogin;