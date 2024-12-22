
import { useState } from 'react'




function FormAdd(props) {
    const[name,setName]=useState('')
    const[statu,setStatu]=useState('ToDo')
    
    function handleSubmit(e){
        e.preventDefault()
        
        props.onclose()
    }
    const addTask=()=>{
        const newlist={name:name,statu:statu}
        props.setList([...props.list,{id:Date.now(),name:name,statu:statu}])
    }
        
    return (
        <div className='container-form'>
                <form onSubmit={(e)=>handleSubmit(e)} className='form-add-task'>
                    <input value={name} onChange={(ev)=>setName(ev.target.value)} type="text" id='name-task'  placeholder='Task name here...' autoComplete='off'/>
                        <div className="box-btns">
                            <div className="col col-1">
                                <select value={statu} onChange={(e)=>{setStatu(e.target.value)}}>
                                    <option value="">selected value</option>
                                    <option value="ToDo">ToDo</option>
                                    <option value="In-Progresse">In-Progresse</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                            <div className="col col-2">
                                <button >Cancel</button>
                                <button onClick={addTask}  type='submit' >Add Task</button>
                            </div>
                        </div>
                        
                </form>
                </div>
    )
    }

    export default FormAdd
