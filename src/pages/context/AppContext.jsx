import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userGlobel, setUserGlobel] = useState("Prateek Tripathi");
  const [theme, setTheme] = useState("light");

  const value = {
    userGlobel,
    setUserGlobel,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
