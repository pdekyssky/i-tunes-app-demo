
import { Route, Routes } from 'react-router-dom'

//styles
// import reactLogo from './assets/react.svg'
import './App.css'

//components
import  Navigation  from './components/Navigation.tsx'

//pages
import Home from './pages/Home.tsx'
import Music from './pages/Music.tsx'
import About from './pages/About.tsx'


function App() {

  return (
  <div className='header App-header'>
    <header>
      <Navigation/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/music' element={<Music />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </main>

    <footer>
       {/* <img src={reactLogo} className='App-logo' alt='logo' /> */}
    </footer>
  </div>    
  )
}

export default App
