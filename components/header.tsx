import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import img from '../app/c3421710943b1b961c2396b7539e0b26.png'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src={img}
                alt="Newfound Systems Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-[#FF6B35]">
                Newfound Systems
              </span>
            </Link>
          </div>
         
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button className="bg-[#FF6B35] hover:bg-[#E85D2F] text-white" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

