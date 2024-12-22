import '../../StyleHomePage.css'
import Fonctionnalité from './Fonctionnalité'
import HeroSection from './HeroSection'
import Navbare from './Navbare'
import Avantage from './AvantageSection'
import StastiquePage from './StastiquePage'
import Experience from './Experience'
import PaymentPlan from './PaymentPlan'
import Footer from './Footer'

function HomePage() {
  return (
    <div className='HomePage'>
      <HeroSection/>
      <Fonctionnalité/>
      <StastiquePage/>
      <Experience/>
      <Avantage/>
      <PaymentPlan/>
      <Footer/>
      
    </div>
  )
}

export default HomePage
