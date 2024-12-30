import { createContext, useState } from "react";

export const userContext = createContext();
function userDetails({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  const [authToken, setToken] = useState(null);
  function logout() {
    setToken(null);
    setUserDetails(null);
  }

  return (
    <userContext.Provider
      value={{ userDetails, authToken, setUserDetails, setToken, logout }}
    >
      {children}
    </userContext.Provider>
  );
}

export default userDetails;
