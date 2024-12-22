import AppHabitude from './Components/habitudes/AppHabitude'
import AppTodo from './Components/ToDoApp/AppTodo'
import HomePage from "./Components/Home/HomePage"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbare from "./Components/Home/Navbare"
import AppKanban from './Components/KanbanBoerd/AppKanban'


function App() {
 

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbare/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/Habitude' element={<AppHabitude/>}/>
            <Route path='/Todo' element={<AppTodo/>}/>
            <Route path='/Kanban' element={<AppKanban/>}/>
            </Route>
        </Routes>
 
    </BrowserRouter>
  )
}

export default App
