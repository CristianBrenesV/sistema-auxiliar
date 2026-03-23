import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LayoutLogin from "../Layout/LayoutLogin";
import LayoutDashboard from "../Layout/LayoutDashboard";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import CentrosCostoList from "../pages/CentrosCosto/index";
import TercerosList from "../pages/Terceros/index";


const useAuth = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario")); // ejemplo
  return { usuario, loggedIn: !!usuario };
};

// Componente para rutas privadas
function PrivateRoute({ children, roles }) {
  const { usuario, loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(usuario.rol)) {
    return <Navigate to="/principal" replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<LayoutLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>

        {/* Rutas privadas con Dashboard */}
        <Route
          element={
            <PrivateRoute>
              <LayoutDashboard usuario={JSON.parse(localStorage.getItem("usuario"))} />
            </PrivateRoute>
          }
        >
          <Route path="/principal" element={<Principal />} />
          <Route path="/centroscosto" element={<CentrosCostoList />} />
          <Route path="/terceros" element={<TercerosList />} />
          
        </Route>

        {/* Ruta catch-all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}