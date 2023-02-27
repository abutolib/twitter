import { createContext,useState } from "react";

export const UserName = createContext(null)

export const UserNameProvider = ({children}) => {

  const [name,setName] = useState(JSON.parse(localStorage.getItem('username')) || '');

  return(
    <UserName.Provider value={{name,setName}}>
      {children}
    </UserName.Provider>
  )
}