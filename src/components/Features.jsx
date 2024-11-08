import React from 'react'

function Features() {
  const features = [
    {
      title: "Mystical Powers",
      description: "Harness the ancient wisdom of the Holy Cat's cosmic energy."
    },
    {
      title: "Sacred Symbols",
      description: "Decode the mysterious geometric patterns that guard ancient secrets."
    },
    {
      title: "Eternal Guardian",
      description: "Join forces with the legendary feline protector of cosmic realms."
    },
    {
      title: "Celestial Magic",
      description: "Master the art of celestial spells and mystical enchantments."
    }
  ]

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Discover Your Mystical Powers
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  ✧
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features