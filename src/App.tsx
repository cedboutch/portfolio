import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import ResumeSection from './components/ResumeSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <TechStack />
        <ResumeSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
