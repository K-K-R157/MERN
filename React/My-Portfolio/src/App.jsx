import './App.css'
import AboutMe from './Components/AboutMe'
import Activities from './Components/Activities'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Header from './Components/Header'
import Hobbies from './Components/Hobbies'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills'

function App() {
  

  return (
    <div className='bg-slate-100 px-8 py-3'>
        
        <div className='bg-white max-w-3xl mx-auto shadow-lg'>
          <Header/>
          <AboutMe/>
          <Projects/>
          <Skills/>
          <Education/>
          <Hobbies/>
          <Activities/>
          <Contact/>
        </div>
        
    </div>
  )
}

export default App
