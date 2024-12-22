import React from 'react'
import {Check} from 'lucide-react'

function PaymentPlan() {
  return (
    <div className='payment-section'>
       <h1>Tarification</h1>
       <p>Des plans adaptés à vos besoins </p>
       <p>Choisissez le plan qui correspond le mieux à votre façon d'étudier  et de travailler<br/> Commencez gratuitement et évoluez selon vos besoins</p>
      <div className="lsit-type-upgrade">
        <div className="payment-gratuit payment-type">
          <h1>gratuit</h1>
          <p>Parfait pour commencer et découvrir nos outils essentiels</p>
          <h4><span>0$</span>/mois</h4>
          <ul>
            <li><Check size={18} color="#3d40d5" />Tâches illimitées</li>
            <li><Check size={18} color="#3d40d5" />3 projets maximum</li>
            <li><Check size={18} color="#3d40d5" />Tableau Kanban basique</li>
            <li><Check size={18} color="#3d40d5" />Collaboration limitée</li>
            <li><Check size={18} color="#3d40d5" />Support communautaire</li>
            <li><Check size={18} color="#3d40d5" />Fonctionnalités avancées</li>
            <li><Check size={18} color="#3d40d5" />Statistiques détalilées</li>
            <li><Check size={18} color="#3d40d5" />Support prioritaire</li>
          </ul> 
          <button>commencer gratuitement</button>
        </div>
        <div className="payment-pro payment-type">
          <h1>Pro</h1>
          <p>Parfait pour commencer et découvrir nos outils essentiels</p>
          <h4><span>55$</span>/mois</h4>
          <button id='populaire-btn'>Plus populaire</button>
          <ul>
            <li><Check size={18} color="#3d40d5" />Tâches illimitées</li>
            <li><Check size={18} color="#3d40d5" />3 projets maximum</li>
            <li><Check size={18} color="#3d40d5" />Tableau Kanban basique</li>
            <li><Check size={18} color="#3d40d5" />Collaboration limitée</li>
            <li><Check size={18} color="#3d40d5" />Support communautaire</li>
            <li><Check size={18} color="#3d40d5" />Fonctionnalités avancées</li>
            <li><Check size={18} color="#3d40d5" />Statistiques détalilées</li>
            <li><Check size={18} color="#3d40d5" />Support prioritaire</li>
          </ul>
          <button className='active'>commencer l'essai gratuit</button>
        </div>
        <div className="payment-equipe payment-type">
          <h1>Equibe</h1>
          <p>Parfait pour commencer et découvrir nos outils essentiels</p>
          <h4><span>99$</span>/mois</h4>
          <ul>
            <li><Check size={18} color="#3d40d5" />Tâches illimitées</li>
            <li><Check size={18} color="#3d40d5" />3 projets maximum</li>
            <li><Check size={18} color="#3d40d5" />Tableau Kanban basique</li>
            <li><Check size={18} color="#3d40d5" />Collaboration limitée</li>
            <li><Check size={18} color="#3d40d5" />Support communautaire</li>
            <li><Check size={18} color="#3d40d5" />Fonctionnalités avancées</li>
            <li><Check size={18} color="#3d40d5" />Statistiques détalilées</li>
            <li><Check size={18} color="#3d40d5" />Support prioritaire</li>
          </ul>
          <button>commencer équipe</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentPlan
