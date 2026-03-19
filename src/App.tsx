import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <HeroSection />
      </main>
    </div>
  )
}

export default App
