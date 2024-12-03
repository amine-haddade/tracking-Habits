import { createContext,useContext, useState } from "react"

const TodoContext=createContext()
function TodoListsProvider({children}) {
    const [lisTodo,setListToDo]=useState([])
    const [selected, setSelected] = useState('');
    const option=[
        {   value:1,
            label:(
                <div className='importance-base' ><div className='degré-div'></div><span>base Priority </span></div>
            )
           
        },
        {
            value:2,
            label:(
                <div className='importance-moyenne' ><div className='degré-div'></div><span>moyenne Priority </span></div>
            )
        },
        {
            value:3,
            label:(
                <div className='importance-high' ><div className='degré-div'></div><span>Low Priority </span></div>
            )
        },
    ]
    const optionFilter=[
        {   value:'all',
            label:(
                <h3>all</h3>
            )
           
        },
        {   value:1,
            label:(
                <div className='importance-base' ><div className='degré-div'></div><span>base Priority </span></div>
            )
           
        },
        {
            value:2,
            label:(
                <div className='importance-moyenne' ><div className='degré-div'></div><span>moyenne Priority </span></div>
            )
        },
        {
            value:3,
            label:(
                <div className='importance-high' ><div className='degré-div'></div><span>Low Priority </span></div>
            )
        },
    ]
  return (
    <>
      <TodoContext.Provider value={{option,lisTodo,setListToDo,selected, setSelected,optionFilter}}>
            {children}
      </TodoContext.Provider>
    </>
  )
}

export default TodoListsProvider

export function GetDataTodo(){
    return useContext(TodoContext)
}
