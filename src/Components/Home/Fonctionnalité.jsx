import React from 'react'
import {ListTodo,MoveRight,Brain,Kanban,Calendar,BookOpen,Target} from 'lucide-react'

function Fonctionnalité() {
  return (
    <div className='Fonctionnlité-section'>
       <h1>Fonctionnalités</h1>
       <p>Tout ce dont vous avez besoin pour rester <br />organisé</p>
       <p>Des outils puissants et intuitifs pour gérer tous les aspects de votre vie</p>
       <div className="list-fonction">
            <div className="singl-fonctionnalite">
                <h4><ListTodo color="#4f46e5" />Gestion des Taches</h4>
                <p>
                Organisez vos tâches quotidiennes avec notre système de todo list intuitif. Suivez vos progrès et restez productif
                </p>
                <a href="">commncer <MoveRight className='icon-flech' size={20} color='#3d40d5' /></a>
            </div>
            <div className="singl-fonctionnalite">
                <h4><Brain color="#4f46e5" />Gestion de Projets</h4>
                <p>
                Gérez vos projets efficacement avec nos outils de planification et de suivi. Gardez une vue d'ensemble claire.                </p>
                <a href="">explorer <MoveRight className='icon-flech' size={20} color='#3d40d5'/></a>
            </div>
            <div className="singl-fonctionnalite">
                <h4><Kanban   color="#4f46e5" />Tableau Kanban</h4>
                <p>
                    Tableau KanbanVisualisez votre flux de travail avec notre tableau Kanban. Optimisez votre processus et identifiez les blocages.                </p>
                <a href="">voir le tableau  <MoveRight className='icon-flech' size={20} color='#3d40d5'/></a>
            </div>
            <div className="singl-fonctionnalite">
                <h4><Calendar color="#4f46e5" />palnification</h4>
                <p>
                Planifiez vos journées et vos semaines. Gardez un équilibre entre travail, études et vie personnelle.
                </p>
                <a href="">palnifier <MoveRight className='icon-flech'  size={20} color='#3d40d5'/></a>
            </div>
            <div className="singl-fonctionnalite">
                <h4><BookOpen color="#4f46e5" />Études Organisées</h4>
                <p>
                Des outils spécialement conçus pour les étudiants. Gérez vos cours, devoirs et révisions efficacement.                </p>
                <a href="">apprendre plus <MoveRight  className='icon-flech' size={20} /></a>
            </div>
            <div className="singl-fonctionnalite">
                <h4><Target color="#4f46e5" />Objectifs</h4>
                <p>
                Définissez et suivez vos objectifs. Mesurez vos progrès et célébrez vos réussites.                </p>
                <a href="">fixer des objectifs <MoveRight className='icon-flech' size={20} color='#3d40d5'/></a>
            </div>
        </div>
    </div>
  )
}

export default Fonctionnalité
