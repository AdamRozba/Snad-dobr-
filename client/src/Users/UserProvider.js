import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState("u1");
  const userMap = {
    u1: {
      id: "u1",
      name: "Ivánek",
    },
    u2: {
      id: "u2",
      name: "Nastěnka",
    },
    u3: {
      id: "u3",
      name: "Mrazík",
    },
    u4: {
      id: "u4",
      name: "Marfuša",
    },
  };

  const value = {
    userMap,
    userList: Object.keys(userMap).map((userId) => userMap[userId]),
    loggedInUser,
    setLoggedInUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
