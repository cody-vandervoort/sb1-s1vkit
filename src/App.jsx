import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <Newsletter />
      <CTA />
    </div>
  )
}

export default App