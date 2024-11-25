export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-700 font-semibold tracking-wider uppercase">
            Service Offerings
          </h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            Customer-focused solutions that deliver results.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 lg:mx-auto">
            We provide tailored IT solutions using proven technologies to optimize ROI and solve real business challenges.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">Our Key Services</h3>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>
              <strong>Finance Dashboards:</strong> Track KPIs to reduce costs and improve productivity.
            </li>
            <li>
              <strong>Custom Applications:</strong> Scalable solutions built with J2EE, Spring MVC, and Spring Boot.
            </li>
            <li>
              <strong>eInvoicing:</strong> Unicode invoices with digital signatures for global B2B applications.
            </li>
            <li>
              <strong>API Development:</strong> Reliable SOAP and REST APIs.
            </li>
            <li>
              <strong>Secure File Transfers:</strong> FTP, SFTP, and FTPS solutions.
            </li>
            <li>
              <strong>Service Dashboards:</strong> Tools to manage tickets and reduce maintenance costs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}