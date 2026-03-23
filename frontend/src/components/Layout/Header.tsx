import React from "react";
import avatar from "../../assets/avatar_generico.jpg";

interface HeaderProps {
  usuario: { nombre: string };
}

const Header: React.FC<HeaderProps> = ({ usuario }) => (
  <div
    className="topbar bg-dark d-flex justify-content-end align-items-center mb-3 px-3"
    style={{ height: "70px" }} 
  >
    <span className="me-3 text-white fs-5">{usuario?.nombre || "Invitado"}</span>

  <div className="dropdown">
    <button
      className="btn btn-dark rounded-circle p-0 border-0 dropdown-toggle"
      type="button"
      id="avatarDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{ width: 40, height: 40 }}
    >
      <img
        src={avatar}
        alt="Avatar"
        className="rounded-circle"
        style={{ width: 40, height: 40 }}
      />
    </button>
    <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="avatarDropdown">
      <li>
        <button className="btn btn-dark w-100 d-flex align-items-center justify-content-center">
          <i className="bi bi-box-arrow-right me-2"></i> Cerrar sesión
        </button>
      </li>
    </ul>
  </div>
  </div>
);

export default Header;