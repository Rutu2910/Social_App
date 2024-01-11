import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState(
    storedUser ? JSON.parse(storedUser) : null
  );

  const user = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Ruturaj",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
