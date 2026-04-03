import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

const TechStack = React.lazy(() => import('./components/TechStack'))
const ResumeSection = React.lazy(() => import('./components/ResumeSection'))
const ProjectsSection = React.lazy(() => import('./components/ProjectsSection'))

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <TechStack />
          <ResumeSection />
          <ProjectsSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
