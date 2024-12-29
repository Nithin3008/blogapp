import { Navigate } from "react-router-dom";

function AuthVerify({ children }) {
  const authToken = localStorage.getItem("authToken");
  return authToken ? children : <Navigate to="/login" />;
}

export default AuthVerify;
