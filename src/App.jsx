import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      Hellow
    </div>
  )
}

export default App
