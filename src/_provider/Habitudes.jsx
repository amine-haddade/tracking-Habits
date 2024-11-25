import { useState,useContext,createContext } from "react"
const HabitudesContext=createContext()
export function HbaitudeProvider ({children}) {
    const name="amine"
    const [habitudes, setHabitudes] = useState([]);
    const [nbrJpours, setNbrJours] = useState(Array(8).fill({ prog: 0 }));

  return (
    <>
       <HabitudesContext.Provider  value={{habitudes,setHabitudes,nbrJpours, setNbrJours}}>
        {children}
       </HabitudesContext.Provider>
    </>
  )
}
export function GetHabitudes(){
    return useContext(HabitudesContext)
}


