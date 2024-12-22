import React from 'react'
import {Clock3,Lock,Zap,History} from 'lucide-react'

function Avantage() {
  return (
    <div className='Avantage-section'>
       <h1>Avantage</h1>
       <p>Pourquoi choisir notre solution ? </p>
       <div className="list-Avantages">
            <div className="singl-avantage">
                <h4><div className='box-icon-avantage'><Clock3   size={22} /></div><span>Gestion des Taches</span></h4>
                <p>
                Organisez vos tâches quotidiennes avec notre système de todo list intuitif. Suivez vos progrès et restez productif
                </p>            
            </div>
            <div className="singl-avantage">
                <h4><div className='box-icon-avantage'><Zap   size={22} /></div><span>Gestion des Taches</span></h4>
                <p>
                Organisez vos tâches quotidiennes avec notre système de todo list intuitif. Suivez vos progrès et restez productif
                </p>            
            </div>
            <div className="singl-avantage">
                <h4><div className='box-icon-avantage'><Lock   size={22} /></div><span>Gestion des Taches</span></h4>
                <p>
                Organisez vos tâches quotidiennes avec notre système de todo list intuitif. Suivez vos progrès et restez productif
                </p>            
            </div>
            <div className="singl-avantage">
                <h4><div className='box-icon-avantage'><History   size={22} /></div><span>Gestion des Taches</span></h4>
                <p>
                Organisez vos tâches quotidiennes avec notre système de todo list intuitif. Suivez vos progrès et restez productif
                </p>            
            </div>
            
            
        </div>
    </div>
  )
}

export default Avantage
