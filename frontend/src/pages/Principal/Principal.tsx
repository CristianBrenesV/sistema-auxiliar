import React from "react";
import logo4 from "../../assets/logo4.png";

interface PrincipalProps {
  usuario: { nombre: string };
}

const Principal: React.FC<PrincipalProps> = ({ usuario }) => {
  return (
    <div
      className="hero w-100"
      style={{
        backgroundImage: `url(${logo4})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "black",
          textShadow: `
            1px 1px 0 #fff,
            -1px 1px 0 #fff,
            1px -1px 0 #fff,
            -1px -1px 0 #fff,
            0 2px 2px rgba(0,0,0,0.2)
          `,
          fontWeight: 700,
          fontSize: "3rem",
        }}
      >
        ¡Bienvenido, {usuario?.nombre || "Invitado"}!
      </h1>
    </div>
  );
};

export default Principal;