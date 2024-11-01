// import TableHbits from "./TableHbits"

import {   useState } from "react"

// import FormsHabits from "./FormsHabits"
function Home() {

  const [habitudes,setHabitudes]=useState([])
  const [habitude,setHabitude]=useState('')

  function ajouterHbitude(){
    setHabitudes([
      ...habitudes,{id:Date.now(),nom:habitude,jours:Array(7).fill(false)}
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

      // habitudes.map((ele) => {
      //   setHabitudes(
      //     habitudes.map((habitude) =>
      //       habitude.id === habitudeId
      //         ? { ...habitude, jours: habitude.jours.map((el, i) => (i === ind ? !el : el)) }
      //         : habitude
      //     )
      //   );
      // });
     
      
  }

  function removeHbits(HbitsId){
    console.log(HbitsId)
    const newHbitudes=habitudes.filter((ele)=>(ele.id!==HbitsId))
    console.log(newHbitudes)
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
                      <th>Habitude</th>
                      <th>Lun</th>
                      <th>Mar</th>
                      <th>Mer</th>
                      <th>Jeu</th>
                      <th>Ven</th>
                      <th>Sam</th>
                      <th>Dim</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  
                    {habitudes.map((habitude,i)=>(
                      <tr key={i}>
                      <td>{habitude.nom}</td>
                      {habitude.jours.map((jour,index)=>(
                        <td onClick={()=>{Checkjour(habitude.id,index)}} key={index}><div className="chek-box"   >{ jour && <i className="fa-solid fa-check"></i>}</div></td>

                      ))}
                      <td ><button onClick={()=>{removeHbits(habitude.id)}}  className="delete-btn" ><i className="fa-solid fa-trash-can"></i></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
