import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedRoute = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      {context.isAuthorized ? (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Navigate to={"/form"} />
      )}
    </div>
  );
};

export default ProtectedRoute;
