import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutDashboardProps {
  usuario: { nombre: string; rol: string };
}

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ usuario }) => (
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
        <Header usuario={usuario} />
        <Outlet />
      </main>
    </div>
  </div>
);

export default LayoutDashboard;