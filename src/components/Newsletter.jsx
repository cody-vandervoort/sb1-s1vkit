import React, { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Join the Sacred Circle
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                  Receive mystical updates and ancient wisdom directly from the Holy Cat.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  >
                    Join Now
                  </button>
                </div>
              </form>
              {status === 'success' && (
                <p className="mt-3 text-sm text-indigo-200">
                  Welcome to the sacred circle! The Holy Cat will be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-sm text-red-200">
                  The mystical connection failed. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter