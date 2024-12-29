import { createContext, useState } from "react";

export const userContext = createContext();
function userDetails({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  const [authToken, setToken] = useState(null);

  return (
    <userContext.Provider
      value={{ userDetails, authToken, setUserDetails, setToken }}
    >
      {children}
    </userContext.Provider>
  );
}

export default userDetails;
