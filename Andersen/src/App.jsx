import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'
import Michael from './assets/Michael.jpg'
import Ladies from './assets/Ladies.jpg'
import Hokum from './assets/Hokum.jpg'
import Prada from './assets/Prada.jpg'
import Project from './assets/Project.jpg'
import Supergirl from './assets/Supergirl.jpg'


function App() {
  
  return (
    
    <div className='card-list'>
      <div className='title-block'><h1>Absolute Cinema</h1></div>
      <Card image={Michael}
            title="Michael"
            text="biographical musical drama, 2026"
      />
      <Card image={Ladies}
            title="Ladies First"
            text="satirical comedy, 2026"
      />
      <Card image={Hokum}
            title="Hokum"
            text="horror-thriller, 2026"
      />
      <Card image={Prada}
            title="The Devil Wears Prada"
            text="comedy-drama, 2026"
      />
      <Card image={Project}
            title="Project Hail Mary"
            text="hard science fiction novel, 2026"
      />
      <Card image={Supergirl}
            title="Supergirl"
            text="science fiction and adventure, 2026"
      />
    </div>
  )
}

export default App
