import React from 'react'
import {CodeXml,Grab,MonitorCheck,ArrowRight} from 'lucide-react'

function HeroSection() {
  return (
    <div className='hero-section'>
        {/* <div className="bg"></div> */}
        <div className="version">
            <div className='solid'></div>
            <span>v.0.01:</span>
            <ArrowRight size={18} />
        </div>
        <ul>
            <li><CodeXml color="#838383" />code optionel</li>
            <li><Grab color="#838383" />Drag & drop</li>
            <li><MonitorCheck color="#838383" />Windows ,mac ,linux</li>
        </ul>
      <h1>Streamline Your Daily <br /> Life with Ease</h1>
      <p>Track your habits manage your tasks and plan your <br /> schedule—all in one place</p>
        <div className="box-btn-hero-section">
            <button>get started <ArrowRight size={24} /></button>
            <button>get docs</button>
        </div>
    </div>
  )
}

export default HeroSection
