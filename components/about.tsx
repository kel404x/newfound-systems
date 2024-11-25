export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>

          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Founded in Bangalore, India, Newfound Systems brings over 15 years of global experience in software solutions, serving clients across the US, Singapore, Malaysia, and Europe. Our mission is simple: to deliver cost-effective, high-quality business applications that meet the unique needs of our customers.          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: 'Our Team',
                description: 'Newfound Systems is built on the strength of a diverse and skilled team. With a proven track record of success, we are passionate about delivering results that exceed expectations. Our customers trust us to deliver solutions that maximize ROI (Return on Investment) while staying affordable and always meeting agreed timelines.',
              },
              {
                name: 'Our Approach',
                description: 'Our processes are guided by the PRINCE2 methodology, ensuring structured and efficient project delivery. We prioritize the use of proven and stable open-standard software, focusing on reliability and long-term value for our customers.',
              },
              {
                name: 'Our Vision',
                description: 'We believe success in business comes from the power of ideas, not just the idea of power. At Newfound Systems, we are driven by this philosophy to create innovative, effective solutions that empower businesses to grow and thrive.',
              },
              {
                name: 'Our Commitment',
                description: 'We are committed to proactive, unparalleled support and services. For us, success is measured by our customers’ growth, and we take pride in being a trusted partner on that journey.',
              },
            ].map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}