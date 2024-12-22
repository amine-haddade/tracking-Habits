
import '../../styleTodo.css'
import TodoList from './TodoList'
import TodoListsProvider from "../../_provider/TodoLists"
function AppTodo() {
  return (
    <div className='bodyTodo'>
      <TodoListsProvider>
        <TodoList/>
      </TodoListsProvider>
    </div>
  )
}

export default AppTodo
