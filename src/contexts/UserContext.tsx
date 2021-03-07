import { createContext, useState, ReactNode, useEffect } from "react";

interface UserContextData {
  username: string;
  login: () => void;
}

interface UserProvider {
  children: ReactNode;
  username: string;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children, ...rest }: UserProvider) {
  const [username, setUsername] = useState(rest.username);

  function login() {
    setUsername(username);
  }

  return (
    <UserContext.Provider value={{ username, login }}>
      {children}
    </UserContext.Provider>
  );
}
