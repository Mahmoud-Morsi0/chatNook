/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const userContext = createContext();
export function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  return (
    <userContext.Provider
      value={{
        userToken,
        setUserToken,
        userId,
        setUserId,
        userEmail,
        setUserEmail,
        userName,
        setUserName,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
