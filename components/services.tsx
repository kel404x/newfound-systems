import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      title: "Finance Dashboards",
      description: "Track KPIs to reduce costs and improve productivity.",
      color: "#1B98E0",
    },
    {
      title: "Custom Applications",
      description: "Scalable solutions built with J2EE, Spring MVC, and Spring Boot.",
      color: "#E8373D",
    },
    {
      title: "eInvoicing",
      description: "Unicode invoices with digital signatures for global B2B applications.",
      color: "#2EC4B6",
    },
    {
      title: "API Development",
      description: "Reliable SOAP and REST APIs.",
      color: "#1B98E0",
    },
    {
      title: "Secure File Transfers",
      description: "FTP, SFTP, and FTPS solutions.",
      color: "#E8373D",
    },
    {
      title: "Service Dashboards",
      description: "Tools to manage tickets and reduce maintenance costs.",
      color: "#2EC4B6",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#FF6B35] font-semibold tracking-wide uppercase">Service Offerings</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Key Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Customer-focused solutions that deliver results.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-t-4" style={{ borderTopColor: service.color }}>
                <CardHeader>
                  <CardTitle className="mt-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

