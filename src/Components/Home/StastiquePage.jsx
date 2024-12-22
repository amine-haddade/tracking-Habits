import React, { useState } from 'react'
import Image2 from '../../assets/Image2.jpg'; 
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
function StastiquePage() {
    const [onCounter,setOnCounter]=useState(false)
  return (
    <div className='statisque-section'>
       <div className="col-1">
            <img src={Image2} alt="" />
       </div>
        <div className="col-2">
        <h1>Apprentissage Collaboratif</h1>
        <p>Transformez vos sessions d'étude en expériences collaboratives
             enrichissantes. Notre plateforme offre l'environnement idéal 
             pour les projets de groupe, le partage de notes et l'apprentissage 
             interactif.
        </p>
        <ScrollTrigger onEnter={()=>{setOnCounter(true)}}  onExit={()=>{setOnCounter(false)}}> 
            <div className="statistique-box-list">
                <div className="singl-box">
                     {onCounter && <h3><CountUp className='h3' start={0} end={92} duration={6} suffix="%" /></h3> }
                    <span>Amélioration de la productivité
                    </span>
                </div>
                <div className="singl-box">
                {onCounter && <h3><CountUp className='h3' start={0} end={40} duration={2} suffix="K+" /></h3> }

                    <span>Étudiants actifs
                    </span>
                </div>
                <div className="singl-box">
                {onCounter && <h3><CountUp className='h3' start={0} end={12} duration={3} suffix="h" /></h3> }
                <span>gain de temps hebdomadiare
                    </span>
                </div>
                <div className="singl-box">
                {onCounter && <h3><CountUp className='h3' start={0} end={99} duration={6} suffix="%" /></h3> }
                <span>s'atisfaction des étudiant
                    </span>
                </div>
            </div>
        </ScrollTrigger>
       </div>
    </div>
  )
}

export default StastiquePage
