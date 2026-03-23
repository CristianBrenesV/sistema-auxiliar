import React from "react";
import { Navigate } from "react-router-dom";

export interface Usuario {
  rol: string;
  nombre: string;
  [key: string]: any;
}

interface PrivateRouteProps {
  children: React.ReactElement;
  roles?: string[];
}

const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const usuario: Usuario | null = JSON.parse(localStorage.getItem("usuario") || "null");

  if (!usuario) return <Navigate to="/login" replace />;

  if (roles && !roles.includes(usuario.rol)) return <Navigate to="/principal" replace />;

  return children;
};

export default PrivateRoute;