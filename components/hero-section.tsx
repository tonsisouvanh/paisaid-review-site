import { Button } from "@/components/ui/button";
import { ChevronRight, Coffee, DollarSign, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const carouselItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cozy cafe interior",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Barista making coffee",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Delicious pastries display",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-100 overflow-hidden">
      {/* Carousel */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              priority
              width={500}
              height={500}
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          Discover Your Perfect Cafe
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Find, review, and share your favorite coffee spots in the city
        </p>
        <Link href="/cafe-listing" className="mb-10">
          <Button size="lg" className="mb-8">
            Start Exploring <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        {/* Quick filter */}
        {/* <GlobalFilter /> */}
      </div>

      {/* Feature highlights */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center">
            <Coffee className="h-6 w-6 mr-2 text-primary" />
            <span className="font-medium">1000+ Cafes</span>
          </div>
          <div className="flex items-center">
            <Star className="h-6 w-6 mr-2 text-yellow-500" />
            <span className="font-medium">Honest Reviews</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 mr-2 text-red-500" />
            <span className="font-medium">Location-based</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-6 w-6 mr-2 text-green-500" />
            <span className="font-medium">Price Ranges</span>
          </div>
        </div>
      </div>
    </section>
  );
}
