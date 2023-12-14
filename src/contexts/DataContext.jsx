import { createContext, useContext, useReducer } from "react";
export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

//##rules
//# 
//# 1. single jsx file contains single context 
//# 2. single context contains passes single value  
//# 
//# 
const reducer =  (state, action) => {

  switch(action.type){
    case 'actionA':
      return "state is A";
    case 'actionB':
      return "state is B";
    
  } 
}
export const DataContextProvider = ({children}) => {

  const[data, dataDispatch ] = useReducer(reducer, 1);

  return (
    <DataContext.Provider value = {{data:data, dataDispatch:dataDispatch}}>
      {children}
    </DataContext.Provider>

  )

}
