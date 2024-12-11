import {Calendar,Power,User} from 'lucide-react'
import DatePicker from './DatePicker'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { GetDataTodo } from '../../_provider/TodoLists'
import { format } from 'date-fns'




function FormEditTask({onclose,idTaskToEdit}) {
    const [openCalneder,setOpenCalander]=useState(false)
    const {option,lisTodo,setListToDo,selected, setSelected}=GetDataTodo()
    const[newName,setNewName]=useState('')
    const[Newpower,setNewPower]=useState('')

   

    useEffect(()=>{
        const Task=lisTodo.find((ele)=>ele.id==idTaskToEdit)
        console.log(Task)
        setNewName(Task.name)
        setNewPower(Task.Power)

    },[idTaskToEdit,lisTodo])
    
    
    
    function handleSubmit(e){
        e.preventDefault()
        setListToDo((prev) =>
            prev.map((task) =>
              task.id === idTaskToEdit
                ? { ...task, name: newName,dueDate:format(selected,'PP'), Power: Newpower }
                : task
            )
          );
      
        onclose()
    }



    const openCalender=()=>{
        setOpenCalander((prev)=>!prev)
    }

    const handleSelectedChanged=(selectedOption)=>{
        setNewPower(selectedOption.value)
        
    }
    

    
        
    return (
        <div className='container-form'>
                <form onSubmit={(e)=>handleSubmit(e)} className='form-add-task'>
                    <input value={newName} onChange={(ev)=>setNewName(ev.target.value)} type="text" id='name-task'  placeholder='Task name here...' autoComplete='off'/>
                        <div className="box-btns">
                            <div className="col col-1">
                                <label  onClick={openCalender} htmlFor="due-date" id='due-date-btn'><Calendar size={16} strokeWidth={1.75} />due date</label>
                                <input type="date" id='due-date' />
                                <Select value={option.find((opt)=>opt.value===Newpower)}  onChange={handleSelectedChanged} options={option} className='select-power' placeholder='power'  />
                            </div>
                            <div className="col col-2">
                                <button >Cancel</button>
                                <button   type='submit' >edit Task</button>
                            </div>
                        </div>
                        { openCalneder && (
                            <DatePicker   />
                        )

                        }
                </form>
                </div>
    )
    }

    export default FormEditTask
