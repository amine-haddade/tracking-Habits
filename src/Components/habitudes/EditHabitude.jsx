import EditModel from "./EditModel";
import {Pencil,Trash}  from 'lucide-react';
import { createPortal } from "react-dom";
import { GetHabitudes } from '../../_provider/Habitudes';
import { useState,useEffect } from 'react';

function EditHabitude() {
    const {habitudes, setHabitudes,nbrJpours, setNbrJours} = GetHabitudes();
    const [showModel,setShowModel]=useState(false);
    const [habitudeEdit,setHabitudeEdit]=useState('')


    function FormEdit(IdHabitude){
        setHabitudeEdit(IdHabitude)
        setShowModel(true)
      }
      useEffect(()=>{
        if (showModel) {
          const body = document.body;
          const everlyDiv=document.getElementById('everly');
          everlyDiv.classList.add("dark-overlay");
          everlyDiv.onclick=()=>setShowModel(false)
          body.style.overflow = 'hidden';
        } else {
          const body = document.body;
          document.getElementById('everly').classList.remove("dark-overlay");
          body.style.overflow = 'auto';
        }
      },[showModel])


      const  removeHabitude=(IdHbitude)=>{
        const nouveauxIndicesSup = [];
        const NewHabitudes=habitudes.filter((ele)=>{
          if(ele.id===IdHbitude){
            ele.jours.forEach((ele,indice)=>{
              if(ele===true){
                nouveauxIndicesSup.push(indice)
              }
            })
            return false
          }
          return true
        })
        setHabitudes(NewHabitudes)
        const NewNbrJours = nbrJpours.map((ele, indice) => {
          if (nouveauxIndicesSup.includes(indice)) {
            return { ...ele, prog: ele.prog - 1 };
          }
          return ele;
        });
      
        setNbrJours(NewNbrJours);
      }

  return (
    <div className="containe-crud">
        <h3>gestion des habitudes</h3>
            {habitudes.map((habitude)=>(
            <div key={habitude.id} className="contain-crud-habits">
            <h1>{habitude.nom}</h1>
            <div className="btns-crud">
                    <div onClick={()=>{FormEdit(habitude.id)}}  className="parent-icon">
                    
                    <Pencil  className='icon edit-icon' />
                    </div>
                    <div onClick={()=>removeHabitude(habitude.id)} className="parent-icon">
                    <Trash   className="icon delete-icon"  />
                    </div>
            </div>     
            </div>
            ))  }  
            {showModel && createPortal(
                <EditModel  onClose={() => setShowModel(false)}  setHabitudeEditFromHome={setHabitudeEdit} habitudeEditable={habitudeEdit} allHabitudes={habitudes} setAllhabitudes={setHabitudes}/>,document.body
            )}         
    </div>

  )
}

export default EditHabitude
