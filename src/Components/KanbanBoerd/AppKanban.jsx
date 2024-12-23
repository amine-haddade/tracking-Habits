import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import {Trash2} from 'lucide-react'
import '../../../Kanban.css';

import FormAdd from './FormAdd'
function AppKanban() {
    const [status,setStatus]=useState(['ToDo','In-Progresse','Done'])
    const [hoveredColumn, setHoveredColumn] = useState("");
    const [lisTasks,setLisTasks]=useState([])
    const [isOpen,setOpen]=useState(false)
    function openModel(){
        setOpen((prev)=>!prev)
    }

    const updateTask=(updatedTask)=>{
      setLisTasks((prevList)=>
      prevList.map((task)=>
        task.id=== updatedTask.id? updatedTask:task
      )
    )
    }
    const handelDragStart=(e,id)=>{
      e.dataTransfer.setData('id',id);
    }
    const handelDrop=(e,statu)=>{
      e.preventDefault();
      const id=e.dataTransfer.getData("id");
      const Task=lisTasks.find((task)=>task.id==id)
      if(Task){
        updateTask({...Task,statu})
      }
      setHoveredColumn("")
    }
    const handelDragOver=(e,statu)=>{
        e.preventDefault()
        setHoveredColumn(statu)
    }
    function deleteTask(Id){
      const Newlist=lisTasks.filter((ele)=>ele.id!=Id)
      setLisTasks(Newlist)
    }
  return (
    <div className='kanabanBoerd'>
      <div className="hero-nav">
        <h1>get started</h1>
        <button onClick={openModel} >new task</button>
      </div>
      <div className="columns">
        {status.map((statu)=>{
            return (
                <div key={statu}
                onDrop={(e)=>handelDrop(e,statu)}
                onDragOver={(e)=>handelDragOver(e,statu)}
                className={`column-task ${
                  hoveredColumn === statu ? "hovered" : ""
                }`} 
                >
                    <span className={statu}></span>
                    <h2>{statu}</h2>
                    <div className='lis-tasks'>
                        {lisTasks.filter((ele)=>ele.statu===statu).
                        map((ele,index)=>{
                            return(
                              <div className='task-name'
                               draggable
                                  onDragStart={(e)=>handelDragStart(e,ele.id)}
                                  key={ele.id}>
                                <p
                                  
                                  >{ele.name}</p>
                                  <Trash2  onClick={()=>{deleteTask(ele.id)}} className='delete-icon' color="#ff0000" />
                              </div>
                            )
                        })
                        }
                    </div>
                </div>
            )
        })}
      </div>





      {isOpen && 
        <>
            <div id='everly' className='dark-overlay' onClick={openModel}></div>
                {createPortal(<FormAdd list={lisTasks} setList={setLisTasks} onclose={openModel}/>,document.body)}
        </>
      }
    </div>
  )
}

export default AppKanban
