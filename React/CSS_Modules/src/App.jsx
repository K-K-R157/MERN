
import style  from './App.module.css'
import Container from './Container'

function App() {
  
  return (
    <>
      
      <Container>
        <header className={style.header}>This is modules</header>
        <p className={`${style.para} ${style.heading}`}>This is a sample paragraph</p>
      </Container>

      <Container>
        
      </Container>
    </>
  )
}

export default App
