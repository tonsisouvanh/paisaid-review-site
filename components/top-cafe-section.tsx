import { Star, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
const topCafes = [
  {
    id: 1,
    name: "Brew & Co.",
    image:
      "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviews: 120,
    description:
      "Artisanal coffee and freshly baked pastries in a cozy atmosphere.",
    location: "Downtown",
    tags: ["Cozy", "Pastries"],
  },
  {
    id: 2,
    name: "The Coffee Lab",
    image:
      "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 95,
    description:
      "Experimental brews and science-inspired decor for the curious coffee lover.",
    location: "University District",
    tags: ["Unique", "Study-friendly"],
  },
  {
    id: 3,
    name: "Seaside Sips",
    image:
      "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviews: 150,
    description: "Enjoy your latte with a breathtaking ocean view.",
    location: "Beachfront",
    tags: ["View", "Relaxing"],
  },
  {
    id: 4,
    name: "Green Bean",
    image:
      "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    reviews: 80,
    description:
      "Eco-friendly café serving organic, fair-trade coffee and vegan treats.",
    location: "Eco Park",
    tags: ["Organic", "Vegan-friendly"],
  },
  {
    id: 5,
    name: "Retro Roast",
    image:
      "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 110,
    description:
      "Step back in time with vintage decor and classic coffee preparations.",
    location: "Old Town",
    tags: ["Vintage", "Nostalgic"],
  },
  {
    id: 6,
    name: "Bytes & Beans",
    image:
      "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviews: 130,
    description:
      "Tech-themed café with high-speed Wi-Fi and gourmet coffee selections.",
    location: "Tech Hub",
    tags: ["Modern", "Work-friendly"],
  },
];

export default function TopCafesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Top Cafés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCafes.map((cafe) => (
            <Card key={cafe.id} className="overflow-hidden">
              <Image
                src={cafe.image}
                alt={cafe.name}
                className="w-full h-48 object-cover"
                priority
                quality={50}
                width={500}
                height={500}
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{cafe.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{cafe.rating}</span>
                  <span className="ml-1 text-gray-600">
                    ({cafe.reviews} reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{cafe.description}</p>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{cafe.location}</span>
                </div>
              </CardContent>
              <CardFooter className="px-4 py-3 bg-gray-50 flex flex-wrap gap-2">
                {cafe.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        <Link href="/cafe-listing">
          <Button size="lg" className="mt-8 w-full">
            View All Cafés
          </Button>
        </Link>
      </div>
    </section>
  );
}
