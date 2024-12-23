import React, { useState } from 'react'
import {CircleCheckBig,ArrowRight,Menu,X} from 'lucide-react'
import { Link,Outlet } from 'react-router-dom'
import "../../style.css"
import "../../styleTodo.css"
import "../../styleHomePage.css"
import "../../Kanban.css"
function Navbare() {
    const [menuOpen,setMenuOpen]=useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }
  return (
        <>
            <header >
                <nav className='flex-normal '>
                    
                    <div className="logo">
                        <CircleCheckBig size={44} color="#3d40d5" />
                        <Link to='/' className='link'><h1><span style={{color:"#3d40d5"}}>Life</span>Planner</h1></Link>
                    </div>
                    <button className="menu-button" onClick={toggleMenu}>
                        <Menu size={24} />
                    </button>
                    
                    <div className={`menu-mobile ${menuOpen ? 'open' : 'close'}`}>
                    <X  color={'red'} id='close-btn' size={30} onClick={toggleMenu}/>
                            <ul>
                               <li><Link to='/'         className='link'>home        </Link></li>
                               <li><Link to='/Habitude' className='link'>track habits</Link></li>
                               <li><Link to='/Todo'     className='link'>ToDo        </Link></li>
                               <li><Link to='/Kanban'   className='link'>Kanban      </Link></li>
                               <li><Link to='/'         className='link'>calender    </Link></li>
                            </ul>
                    </div>
                        <ul className='list-link-nav'>
                            <li><Link to='/'         className='link'>home        </Link></li>
                            <li><Link to='/Habitude' className='link'>track habits</Link></li>
                            <li><Link to='/Todo'     className='link'>ToDo        </Link></li>
                            <li><Link to='/Kanban'   className='link'>Kanban      </Link></li>
                            <li><Link to='/'         className='link'>calender    </Link></li>
                        </ul>
                        <div className="login-form-btn  flex-normal">
                            <button><a className='link-btn flex-normal'>sing up <ArrowRight color="#ffffff" /></a></button>
                            <button><a id='btn-sing-in' className='link-btn flex-normal'>sing in</a></button>
                        </div>
                    
                </nav>
            </header>
            < >
                <Outlet />
            </>
        </>
  )
}

export default Navbare
