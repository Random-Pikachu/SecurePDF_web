import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Contributors from './components/Contributors'

const App = () => {
  return (
    <>
        <div className="bg-[#0a0012] text-white overflow-x-hidden h-screen">
          <Hero />
          <Features />
          <Contributors />
        </div>
    </>
  )
}

export default App