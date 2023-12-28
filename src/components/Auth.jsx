import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/FirebaseContext";

export default function Auth() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <Navigate to={"/login"} state={{ from: location }} />
      )}
    </>
  );
}
