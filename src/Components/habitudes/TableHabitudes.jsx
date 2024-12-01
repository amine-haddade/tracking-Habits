import { useState, useEffect } from "react";
import {Pencil,Trash}  from 'lucide-react';
import { createPortal } from "react-dom";
import EditModel from "./EditModel";
import { GetHabitudes } from "../../_provider/Habitudes";

function TableHabitudes() {
    const {habitudes, setHabitudes,nbrJpours, setNbrJours} = GetHabitudes();
    const [stockIdHbits, setStockIdHbits] = useState({  id: null,  indiceJour: null});


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
        const JoursHabitudes = habitudes.find(
          (habitude) => habitude.id === stockIdHbits.id
        )?.jours[stockIdHbits.indiceJour];
        
        if (JoursHabitudes === true) {
    
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
        }
      }, [stockIdHbits]);
  return (
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
            (_,indiceJour ) => (
              <tr key={indiceJour}>
                <td className="nbr-jr">{indiceJour + 1}</td>
                {habitudes.map((habitude, index) => (
                  <td  key={index}  onClick={() => Checkjour(habitude.id, indiceJour)}>
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
  )
}

export default TableHabitudes
