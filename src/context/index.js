import React,{
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
}
 from 'react'

const AppContext = createContext(null);    

function AppContextProvider({children}) {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
};
export const useAppContext = () => useContext(AppContext);
export default AppContextProvider