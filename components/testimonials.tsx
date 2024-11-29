import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      content: "TechConsult transformed our IT infrastructure, significantly improving our efficiency and security.",
      author: "Jane Doe",
      position: "CTO, Tech Corp",
    },
    {
      content: "Their cloud migration services were top-notch. We saw immediate improvements in our operations.",
      author: "John Smith",
      position: "CEO, CloudNet",
    },
    {
      content: "The data analytics solutions provided by TechConsult gave us invaluable insights into our business.",
      author: "Emily Brown",
      position: "Data Scientist, AnalyticsPlus",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#FF6B35] font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:border-[#FF6B35] transition-colors">
                <CardContent className="pt-4">
                  <p className="text-lg text-gray-600">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div>
                    <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-[#FF6B35]">{testimonial.position}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

