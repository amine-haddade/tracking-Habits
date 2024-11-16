import { useState, useEffect } from "react";
import {Pencil,Trash}  from 'lucide-react';
import { createPortal } from "react-dom";
import EditModel from "./model/EditModel";
function Home() {
  const [habitudes, setHabitudes] = useState([]);
  const [habitude, setHabitude] = useState("");
  const [stockIdHbits, setStockIdHbits] = useState({
    id: null,
    indiceJour: null,
  });
  const [nbrJpours, setNbrJours] = useState(Array(8).fill({ prog: 0 }));
  const [showModel,setShowModel]=useState(false);
  function ajouterHbitude() {
    setHabitudes([
      ...habitudes,
      { id: Date.now(), nom: habitude, jours: Array(8).fill(false) },
    ]);
    setHabitude(""); // Réinitialiser la progression pour éviter les doublons
  }
  function Checkjour(habitudeId, ind) {
    setStockIdHbits({ id: habitudeId, indiceJour: ind });
    habitudes.map(() => {
      setHabitudes(
        habitudes.map(
          (
            habitude // donner pour qoui lorsque effacer ce praquete{} le code fonction
          ) =>
            habitude.id === habitudeId
              ? {
                  ...habitude,
                  jours: habitude.jours.map((el, i) => (i === ind ? !el : el)),
                }
              : habitude
        )
      );
    });
  }

  useEffect(() => {
    console.log(habitudes); // habitude changer
    console.log(stockIdHbits);
    const JoursHabitudes = habitudes.find(
      (habitude) => habitude.id === stockIdHbits.id
    )?.jours[stockIdHbits.indiceJour];
    if (JoursHabitudes === true) {
      // pour tester si le joure clicker true
      // si true
      setNbrJours(
        nbrJpours.map((el, ind) =>
          ind === stockIdHbits.indiceJour ? { ...el, prog: el.prog + 1 } : el
        )
      );
      setStockIdHbits({ id: null, indiceJour: null });
    } else {
      // si le jours est décliqué
      setNbrJours(
        nbrJpours.map((el, ind) =>
          ind === stockIdHbits.indiceJour ? { ...el, prog: el.prog - 1 } : el
        )
      );
      // setStockIdHbits({id:null,indiceJour:null})
    }
  }, [habitudes,stockIdHbits]);

  function FormEdit(IdHabitude){
    console.log(IdHabitude)
    setShowModel(true)
    
  }
  useEffect(()=>{
    if (showModel) {
      // Ajouter un overlay sombre au body
      const body = document.body;
      document.getElementById('everly').classList.add("dark-overlay");

      // Empêcher le scroll de la page sous le modèle
      body.style.overflow = 'hidden';
    } else {
      // Retirer l'overlay sombre du body
      const body = document.body;
      document.getElementById('everly').classList.remove("dark-overlay");

      // Réactiver le scroll
      body.style.overflow = 'auto';
    }
  },[showModel])
  return (
    <>
      <h1 id="title-home-page">Suivi des Habitudes</h1>
      <div id="forms-habits">
        <div  id="row-1">
          <form onSubmit={(e) => {   e.preventDefault(); }} >
            <h3>ajouter habitude</h3>
            <input value={habitude} onChange={(e) => { setHabitude(e.target.value); }} placeholder="nouvelle habitude" type="text"/>
            <button onClick={() => { ajouterHbitude();  }}>
              ajouter
            </button>
          </form>
            <div className="containe-crud">
              <h3>gestion des habitudes</h3>
                  {habitudes.map((habitude)=>(
                    <div key={habitude.id} className="contain-crud-habits">
                    <h1>{habitude.nom}</h1>
                    <div className="btns-crud">
                          <div onClick={()=>{FormEdit(habitude.id)}}  className="parent-icon">
                            
                            <Pencil  className='icon edit-icon' />
                          </div>
                          <div onClick={()=> {console.log(habitude.id)}} className="parent-icon">
                            <Trash   className="icon delete-icon"  />
                          </div>
                    </div>     
                    </div>
                  ))  }           
            </div>
        </div>
        <div className="tracking-container">
          <div className="table-container">
            <h3>Tableau de suivi</h3>
            <table>
              <thead>
                <tr>
                  <th id="th-jours">Jour</th>

                  {habitudes.map((habitude, index) => (
                    <th key={index}>{habitude.nom}</th>
                  ))}
                  <th className="th-progress">progress</th>
                </tr>
              </thead>
              <tbody>
                {[...nbrJpours].map(
                  (
                    _,
                    indiceJour // le nombre de jout il doist stcké dans une varible siasir par le user
                  ) => (
                    <tr key={indiceJour}>
                      <td className="nbr-jr">{indiceJour + 1}</td>
                      {habitudes.map((habitude, index) => (
                        <td
                          key={index}
                          onClick={() => Checkjour(habitude.id, indiceJour)}
                        >
                          <div className="chek-box ">
                            {habitude.jours[indiceJour] && (
                              <i className="fa-solid fa-check"></i>
                            )}
                          </div>
                        </td>
                      ))}
                      <td className="th-progress-count">
                        {nbrJpours[indiceJour].prog}/{habitudes.length}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
        {showModel && createPortal(
      <EditModel  onClose={() => setShowModel(false)} />,document.body
    )}
      </div>
    </>
  )
}

export default Home;

