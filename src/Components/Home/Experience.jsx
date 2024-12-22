import React from 'react'
import {Target, Zap,Users,Sparkles} from 'lucide-react'
function Experience() {
  return (
    <div className='exper-section'>
      <h1>Élevez Votre Expérience d'Étude</h1>
      <p>Découvrez une nouvelle façon d'apprendre avec nos fonctionnalités innovantes <br/> conçues pour enrichir votre parcours académique.</p>
      <div className="listGoals">
        <div className="sing-box-goals">
            <div className="animat-div"></div>
            <Zap size={30}  className='ico'/>
            <h5>Suivi en Temps Réel</h5>
            <p>Suivez vos objectifs et réalisations instantanément</p>
        </div>
        <div className="sing-box-goals">
        <div className="animat-div"></div>
            <Target size={30}  className='ico' />
            <h5>Objectifs Intelligents</h5>
            <p>Définissez et suivez vos objectifs académiques personnalisés</p>
        </div>
        <div className="sing-box-goals">
        <div className="animat-div"></div>
            <Users size={30} className='ico' />
            <h5>Dynamique de Groupel</h5>
            <p>Collaborez facilement avec vos groupes d'étude</p>
        </div>
        <div className="sing-box-goals">
        <div className="animat-div"></div>
            <Sparkles size={30}   className='ico'/>
            <h5>Suivi en Temps Réel</h5>
            <p>Suivez vos objectifs et réalisations instantanément</p>
        </div>
      </div>
    </div>
  )
}

export default Experience
