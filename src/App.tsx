import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

const TechStack = React.lazy(() => import('./components/TechStack'))
const ResumeSection = React.lazy(() => import('./components/ResumeSection'))
const ProjectsSection = React.lazy(() => import('./components/ProjectsSection'))

function App() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div>
      <div className="side-grid side-grid-left" onMouseMove={handleMouseMove}></div>
      <div className="side-grid side-grid-right" onMouseMove={handleMouseMove}></div>
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
