import {Plus,Filter,Check,Calendar,EllipsisVertical,Pencil,Trash2, ListTodo }  from 'lucide-react';
import FormAddTask from './FormAddTask';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select'
import { GetDataTodo } from '../../_provider/TodoLists';
import FormEditTask from './FormEditTask';

function TodoList() {

    const {option,lisTodo,setListToDo,selected, setSelected,optionFilter}=GetDataTodo()
    const [isOpen,setOpen]=useState(false)
    const [isOpenEdit,setOpenEdit]=useState(false)
    const [filterPower,setFilterPower]=useState('all')
    const [todoListFiltrer,setTodoListFiltrer]=useState([])
    const [showEditBox,setShowEditBox]=useState({status:false,stockId:''})
    const [idTaskToEdit,setIdTaskToEdit]=useState('')
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
                    <div className='importance-moyenne' ><div className='degré-div'></div><span>moyenne Priority </span></div>
                )
            case 3:
                return(
                    <div className='importance-high' ><div className='degré-div'></div><span>high Priority </span></div>
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

    const handelFilterSelect=(selectedOption)=>{
        setFilterPower(selectedOption.value)
        
        
    }
    useEffect(()=>{
        if(lisTodo.length>0){
            const ListTaskFiltring=filterPower==="all" ? lisTodo :
            lisTodo.filter((task)=>task.Power===filterPower);
            setTodoListFiltrer(ListTaskFiltring)
            
        } else{
            setTodoListFiltrer([])
        }

        },[lisTodo,filterPower])
    
    const shwoEditBox=(idtask)=>{
        setShowEditBox({...showEditBox,status:!showEditBox.status,stockId:idtask})
        
        
    }
    const showEditForm=(Id)=>{
        setOpenEdit(true)
        setIdTaskToEdit(Id)
        setShowEditBox({...showEditBox,status:!showEditBox.status,stockId:''})
    }
    const deletTask=(Id)=>{
        const NewList=lisTodo.filter((task)=>task.id!=Id)
        setListToDo(NewList);
    }
    

    
  return (
    <div >
        <h1 id='titreTodo'>To-Do</h1>
        <hr className="todo-line" />
        <div className="container-Add-Task">
            <button  onClick={()=>openForm()}><Plus/>new task</button>
            <Select onChange={handelFilterSelect}    options={optionFilter} className='select-power' placeholder={<><Filter/><span>filter</span></>} />
        </div>
        <div className="list-to-do">
            { todoListFiltrer &&
                todoListFiltrer.map((ele,index)=>(
                    
                    <div key={ele.id} className={`singl-to-do ${ele.status ?'cached-task':''}`}>
                            <div onClick={()=>{checkTask(ele.id)}} className="chek-box">
                                {ele.status ? <Check id='check-icon'/>:""}
                                
                            </div>
                            <div className="data-task">
                                <h3 className="title">{ele.name}</h3>
                                <div className="time"><Calendar size={16} strokeWidth={1.75} /> {ele.dueDate}</div>
                                {getDivPower(ele.Power)}
                            </div>
                            <div onClick={()=>shwoEditBox(ele.id)} className='box-edit-button'><EllipsisVertical className='edit-func' /></div>
                            {showEditBox.status & showEditBox.stockId===ele.id  ? (
                                <div className='Edit-Box'>
                                        <div onClick={()=>showEditForm(ele.id)}><Pencil size={16} color="#000000" /><span>Edit</span></div>
                                        <div onClick={()=>deletTask(ele.id)} ><Trash2 size={16} color="#ff0000" /><span>Remove</span></div>
                                        
                                        
                                </div>
                            ):null
                                
                            }
                            
                    </div>
                ))
            }
            {isOpen && (
            
            <>
            <div id='everly' className='dark-overlay' onClick={()=>setOpen(false)}></div>
                {createPortal(<FormAddTask onclose={()=>setOpen(false)} isOpenState={isOpen}  />,document.body)}
            
            </>
                
            )}
            {isOpenEdit && (
            
            <>
            <div id='everly' className='dark-overlay' onClick={()=>setOpenEdit(false)}></div>
                {createPortal(<FormEditTask onclose={()=>setOpenEdit(false)} isOpenState={isOpenEdit} idTaskToEdit={idTaskToEdit}  />,document.body)}
            
            </>
                
            )}
        </div>
    </div>
  )
}

export default TodoList
