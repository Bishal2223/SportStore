import React from 'react'

const About = () => {
  
  return (
    <div className="about-page bg-[#f9f9f9] text-gray-800">
      
      {/* Hero Section */}
      <section className="about-hero text-white py-20">
        <div className="container mx-auto px-4 text-center text-black">
          <h1 className="text-4xl font-bold mb-3">About SportZone</h1>
          <p className="text-lg opacity-90">
            Empowering athletes since 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 space-y-16">

        {/* Our Story */}
        <section className="about-section max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4 leading-relaxed">
            SportZone was born from a passion for athletics and a commitment to
            providing athletes of all levels with access to premium sports
            equipment. We believe everyone deserves the right gear to reach
            their full potential.
          </p>
          <p className="leading-relaxed">
            Our curated collection includes top-quality products across
            multiple sports—football, badminton, basketball, fitness, and more—
            ensuring you’re always equipped to perform at your best.
          </p>
        </section>

        {/* Mission */}
        <section className="about-section max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            To inspire and support athletes by delivering high-quality sports
            equipment, expert assistance, and a trusted platform that fuels
            performance, confidence, and growth.
          </p>
        </section>

        {/* Values */}
        <section className="values-section">
          <h2 className="text-2xl font-semibold text-center mb-10">Our Values</h2>

          <div className="values-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="value-card bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-sm">
                We offer products that meet strict quality and durability
                standards.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-semibold mb-2">Performance Driven</h3>
              <p className="text-sm">
                Every item is selected to enhance athletic performance.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="font-semibold mb-2">Customer Focus</h3>
              <p className="text-sm">
                Your satisfaction is our top priority.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm">
                We build a strong, supportive sports community.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-section max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wide range of sports equipment</li>
            <li>Affordable pricing on premium brands</li>
            <li>Fast and reliable delivery</li>
            <li>Friendly customer support</li>
            <li>Easy returns and exchanges</li>
            <li>Frequent offers and new arrivals</li>
          </ul>
        </section>

      </div>
    </div>
  );

}

export default About