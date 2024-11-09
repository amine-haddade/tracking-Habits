// import TableHbits from "./TableHbits"

import {   useState } from "react"

// import FormsHabits from "./FormsHabits"
function Home() {

  const [habitudes,setHabitudes]=useState([])
  const [habitude,setHabitude]=useState('')

  function ajouterHbitude(){
    setHabitudes([
      ...habitudes,{id:Date.now(),nom:habitude,jours:Array(11).fill(false)}
    ])
    setHabitude('')
  }
  function Checkjour(habitudeId,ind){
   
      habitudes.map(()=>{
        setHabitudes(
          habitudes.map((habitude)=>// donner pour qoui lorsque effacer ce praquete{} le code fonction 
            habitude.id===habitudeId
           ? {...habitude,jours:habitude.jours.map((el,i)=>(i===ind ? !el : el))} 
           :habitude))
        
      })


     
      
  }

  function removeHbits(HbitsId){
    console.log(HbitsId)
    const newHbitudes=habitudes.filter((ele)=>(ele.id!==HbitsId))
    // console.log(newHbitudes)
    setHabitudes(newHbitudes)
  }
  // useEffect(()=>{
  //   removeHbits()
  // },[])
  

  
  
  return (
    <>
      <h1 id="title-home-page">Suivi des Habitudes</h1>
      <div id="forms-habits">
        {/* <FormsHabits/>
        <TableHbits/>
       */}
       <form onSubmit={(e)=>{e.preventDefault()}}>
          <h3>ajouter habitude</h3>
          <input value={habitude} onChange={(e)=>{setHabitude(e.target.value)}} placeholder="nouvelle habitude" type="text"/>
          <button onClick={()=>{ajouterHbitude()}}>ajouter</button>
        </form>


        <div className="tracking-container">
          <div className="table-container">
            <h3>Tableau de suivi</h3>
            <table>
                <thead>
                    <tr>
                        <th id="th-jours">Jour</th>
                        
                        
                        {habitudes.map((habitude,index)=>
                        <th key={index}>{habitude.nom}</th>
                        )}
                        
                    </tr>
                </thead>
                <tbody>

                {[...Array(11)].map((_, indiceJour)  => // le nombre de jout il doist stcké dans une varible siasir par le user
                        
                        <tr key={indiceJour}>
                          <td className="nbr-jr">{indiceJour+1}</td>
                          {habitudes.map((habitude,index)=>
                          <td key={index}  onClick={()=>Checkjour(habitude.id,indiceJour)}   ><div className="chek-box ">{habitude.jours[indiceJour] && <i className="fa-solid fa-check"></i>}</div></td>
                        )}
                        </tr>
                        
                      )}
                    
                   
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home



