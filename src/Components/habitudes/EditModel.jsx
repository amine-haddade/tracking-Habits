import { useState } from "react";
export default function EditModel({ onClose,habitudeEditable,allHabitudes,setAllhabitudes ,setHabitudeEditFromHome}) {
  const habitudeData=allHabitudes.find((ele)=>ele.id===habitudeEditable)
  const [nomhabitude,setNomhabitude]=useState(habitudeData.nom)

  const  modifyHabitude=()=>{
    const habitudmodif=allHabitudes.map((ele)=>{
      if(ele.id===habitudeEditable){
       return {...ele,nom:nomhabitude}
      }
      else{
        return ele
      }
    })
    setAllhabitudes(habitudmodif)
    onClose()
    setNomhabitude('')
    setHabitudeEditFromHome('')
  }
  return (
    <div className="edit-model">
      <h3>Modifier habitude</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input value={nomhabitude} onChange={(e)=>setNomhabitude(e.target.value)} placeholder="hbitude" type="text" />
        <button type="button" onClick={modifyHabitude}>Modifier</button>
      </form>
    </div>
  );
}



