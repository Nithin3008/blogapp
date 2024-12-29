import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/userDetails";

function AuthVerify({ children }) {
  const { authToken } = useContext(userContext);
  return authToken ? children : <Navigate to="/login" />;
}

export default AuthVerify;
