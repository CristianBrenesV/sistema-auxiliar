import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/logo2.png";

const Sidebar: React.FC = () => (
  <nav className="col-md-3 col-lg-2 bg-dark sidebar text-white p-3 d-flex flex-column">
    {/* Logo */}
    <div className="mb-3 d-flex justify-content-center">
      <NavLink to="/principal">
        <img src={logo2} alt="Logo" style={{ width: 70, height: 70 }} />
      </NavLink>
    </div>

    <div className="mb-3 d-flex justify-content-center">
      <h4 className="text-center">Desarrollos Ordenados S.A</h4>
    </div>

    <div className="w-75 mx-auto mb-3" style={{ height: "3px", backgroundColor: "#e6e6e6" }} />

    <ul className="nav flex-column">
      <li className="nav-item mt-3">
        <span className="text-white h6">Centros de Costo</span>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/centroscosto">
          <i className="bi bi-grid me-2"></i> Gestión Centros de Costo
        </NavLink>
      </li>

      <li className="nav-item mt-3">
        <span className="text-white h6">Terceros</span>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/terceros">
          <i className="bi bi-people me-2"></i> Gestión Terceros
        </NavLink>
      </li>

      <li className="nav-item mt-3">
        <span className="text-white h6">Asignaciones / Prorrateo</span>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/asientos">
          <i className="bi bi-journal-check me-2"></i> Prorrateo de Asientos
        </NavLink>
      </li>

      <li className="nav-item mt-3">
        <span className="text-white h6">Reportes</span>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/reportes/centros">
          <i className="bi bi-diagram-3 me-2"></i> Movimientos por Centro
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/reportes/terceros">
          <i className="bi bi-person-lines-fill me-2"></i> Movimientos por Tercero
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Sidebar;