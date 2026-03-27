import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import ResumeSection from './components/ResumeSection'

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <TechStack />
        <ResumeSection />
      </main>
    </div>
  )
}

export default App
