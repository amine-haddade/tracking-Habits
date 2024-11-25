import Home from './Home'
import React from 'react'
import { HbaitudeProvider } from '../../_provider/habitudes'

function AppHabitude() {
  return (
    <>
    <HbaitudeProvider>
        
      <Home/>
    </HbaitudeProvider>
    </>
  )
}

export default AppHabitude
