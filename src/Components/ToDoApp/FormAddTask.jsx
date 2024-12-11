import {Calendar,ListTodo,Power,User} from 'lucide-react'
import DatePicker from './DatePicker'
import Select from 'react-select'
import { useState } from 'react'
import { GetDataTodo } from '../../_provider/TodoLists'
import { format } from 'date-fns'




function FormAddTask({onclose}) {
    const [openCalneder,setOpenCalander]=useState(false)
    const {option,lisTodo,setListToDo,selected, setSelected}=GetDataTodo()
    const[name,setName]=useState('')
    const[power,setPower]=useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        onclose()
    }



    const openCalender=()=>{
        setOpenCalander((prev)=>!prev)
    }

    const handleSelectedChanged=(selectedOption)=>{
        setPower(selectedOption.value)
        
    }

    function AddTask(){
        setListToDo([...lisTodo,{id:Date.now(),name:name,dueDate:format(selected,'PP'),Power:power,Status:false}])
    }
        
    return (
        <div className='container-form'>
                <form onSubmit={(e)=>handleSubmit(e)} className='form-add-task'>
                    <input value={name} onChange={(ev)=>setName(ev.target.value)} type="text" id='name-task'  placeholder='Task name here...' autoComplete='off'/>
                        <div className="box-btns">
                            <div className="col col-1">
                                <label className='due-date-form-add'  onClick={openCalender} htmlFor="due-date" id='due-date-btn'><Calendar size={16} strokeWidth={1.75} />due date</label>
                                <input type="date" id='due-date' />
                                <Select  onChange={handleSelectedChanged} options={option} className='select-power' placeholder='power'  />
                            </div>
                            <div className="col col-2">
                                <button >Cancel</button>
                                <button onClick={()=>AddTask()}  type='submit' >Add Task</button>
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

    export default FormAddTask
