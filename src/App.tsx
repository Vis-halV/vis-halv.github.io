import './App.css'

import MainLayout from './components/layout/MainLayout'

import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Hero from './pages/Hero'
import CaseStudies from './pages/CaseStudies'
import Personal from './pages/Personal'
import Contact from './pages/Contact'

function App() {

  return (
    <MainLayout>
      <Hero />
      <Blog />
      <Projects />
      <CaseStudies />
      <Personal />
      <Contact />
    </MainLayout>
  )
}

export default App
