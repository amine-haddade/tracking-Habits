import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import AppHabitude from './Components/habitudes/AppHabitude.jsx'
// import KanbanBoerd from './Components/Home/KanbanBoerd/KanbanBoerd'
// import KanbanBoard from './Components/KanbanBoerd/KanbanBoerd'
// import AppTodo from './Components/ToDoApp/AppTodo'
// import AppKanban from './Components/KanbanBoerd/AppKanban'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
