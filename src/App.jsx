import './App.css'

import HeroSection from './components/heroSection/HeroSections'
import AboutSection from './components/aboutSection/AboutSections'
import SkillsSection from './components/skillsSection/SkillsSection'
import StatsSection from './components/statsSection/StatsSection'
import ContactSection from './components/contactSection/ContactSection'
import BuiltWith from './components/builtWith/BuiltWith'

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <StatsSection />
      <ContactSection />
      <BuiltWith />
    </div>
  )
}

export default App
