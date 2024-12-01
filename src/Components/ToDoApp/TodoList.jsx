import {Plus,Filter,Check,Calendar}  from 'lucide-react';
import FormAddTask from './FormAddTask';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import Select from 'react-select'
import { GetDataTodo } from '../../_provider/TodoLists';

function TodoList() {

    const {option,lisTodo,setListToDo,selected, setSelected}=GetDataTodo()
    const [isOpen,setOpen]=useState(false)
    function openForm(){
        setOpen(true)
    }
    const getDivPower=(power)=>{
        switch(power){
            case 1:
                return(
                    <div className='importance-base' ><div className='degré-div'></div><span>base Priority </span></div>
                )
            case 2:
                return(
                    <div className='importance-moyenne' ><div className='degré-div'></div><span>base Priority </span></div>
                )
            case 3:
                return(
                    <div className='importance-high' ><div className='degré-div'></div><span>base Priority </span></div>
                )
        }
    }

    function checkTask(id){
        const NewList=lisTodo.map((ele)=>{
            if(ele.id===id){
                return {...ele,status:!ele.status}
            }
            else{
                return ele
            }
        })
        setListToDo(NewList)
    }

    

    
  return (
    <div >
        <h1 id='titreTodo'>To-Do</h1>
        <hr className="todo-line" />
        <div className="container-Add-Task">
            <button  onClick={()=>openForm()}><Plus/>new task</button>
            <Select  onMenuOpen={() => {  console.log('Menu ouvert');}} options={option} className='select-power' placeholder={<><Filter/><span>filter</span></>} />
        </div>
        <div className="list-to-do">
            {
                lisTodo.map((ele,index)=>(
                    <div key={ele.id} className={`singl-to-do ${ele.status ?'cached-task':''}`}>
                            <div onClick={()=>{checkTask(ele.id)}} className="chek-box">
                                {ele.status ? <Check id='check-icon'/>:""}
                                
                            </div>
                            <div className="data-task">
                                <h3 className="title">{ele.name}</h3>
                                <div className="time"><Calendar size={16} strokeWidth={1.75} /> {ele.dueDate}</div>
                                {getDivPower(ele.Power)}
                            </div>
                    </div>
                ))
            }
            {isOpen && (
            
            <>
            <div id='everly' className='dark-overlay' onClick={()=>setOpen(false)}></div>
                {createPortal(<FormAddTask onclose={()=>setOpen(false)} isOpenState={isOpen}  />,document.body)}
            
            </>
                
            )}
        </div>
    </div>
  )
}

export default TodoList
