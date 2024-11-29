import { Button } from "@/components/ui/button"
import img from '../app/premium_photo-1661963212517-830bbb7d76fc.avif'

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Innovative IT Solutions</span>{' '}
                <span className="block text-[#FF6B35] xl:inline">for Your Business</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We provide tailored IT solutions using proven technologies to optimize ROI and solve real business challenges.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="bg-[#FF6B35] hover:bg-[#E85D2F] text-white" asChild size="lg">
                    <a href="#contact">Get Started</a>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" size="lg" className="text-[#FF6B35] border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white" asChild>
                    <a href="#services">Learn More</a>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-32 w-full object-cover sm:h-48 md:h-64 lg:w-full lg:h-full" // Adjusted image size
          src={img.src}
          alt="IT Solutions"
        />
      </div>
    </div>
  )
}