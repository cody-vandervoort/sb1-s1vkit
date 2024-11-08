import React from 'react'
import holycat from '../assets/holycat.jpg'

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={holycat}
          alt="The Holy Cat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 mix-blend-multiply" />
      </div>
      <div className="relative pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
              <span className="block">Welcome to</span>
              <span className="block text-indigo-400">The Legend of Holy Cat</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
              Embark on a mystical journey through the realms of cosmic feline wisdom.
              Where ancient symbols meet eternal guardianship.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Begin Your Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero