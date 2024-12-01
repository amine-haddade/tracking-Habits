import Home from './Home'
import React from 'react'
import '../../style.css'
import { HbaitudeProvider } from "../../_provider/Habitudes"

function AppHabitude() {
  return (
    <div className='bodyHabitudes'>
    <HbaitudeProvider>
      <Home/>
    </HbaitudeProvider>
    </div>
  )
}

export default AppHabitude
