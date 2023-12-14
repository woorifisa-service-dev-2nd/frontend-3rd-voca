import { createContext, useContext, useReducer } from "react";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);


const dataReducer =  (state, action) => {

  switch(action.type){
    case "default":
      return 0;
  } 
}
export const DataContextProvider = ({children}) => {

  const[data, dataDispatch ] = useReducer(dataReducer, 1);

  return (
    <DataContext.Provider value = {data}>
      {children}
    </DataContext.Provider>

  )

}
