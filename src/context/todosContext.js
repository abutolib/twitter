import { createContext,useState } from "react";

export const TodosContext = createContext(null)

export const TodosContextProvider = ({children}) => {

  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  return(
    <TodosContext.Provider value={{todos,setTodos}}>
      {children}
    </TodosContext.Provider>
  )
}