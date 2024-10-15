"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  Grid,
  List,
  MapPin,
  Search,
  Star,
  Sun,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock data for cafes
const cafes = [
  {
    id: 1,
    name: "The Coffee House",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "123 Main St, Cityville",
    distance: "0.5 miles",
    tags: ["Cozy", "Good for Work"],
    amenities: ["WiFi", "Outdoor Seating"],
  },
  {
    id: 2,
    name: "Brew & View",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "456 Park Ave, Townsburg",
    distance: "1.2 miles",
    tags: ["Scenic", "Quiet"],
    amenities: ["Outdoor Seating"],
  },
  {
    id: 3,
    name: "Bytes & Beans",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "789 Tech Blvd, Smartcity",
    distance: "0.8 miles",
    tags: ["Modern", "Good for Work"],
    amenities: ["WiFi", "Power Outlets"],
  },
  // Add more mock cafe data as needed
];

export default function CafeListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("rating");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const filteredCafes = cafes
    .filter(
      (cafe) =>
        cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedAmenities.every((amenity) => cafe.amenities.includes(amenity))
    )
    .sort((a, b) => {
      if (sortOption === "rating") return b.rating - a.rating;
      if (sortOption === "distance")
        return parseFloat(a.distance) - parseFloat(b.distance);
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Café</h1>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search cafés..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort By <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setSortOption("rating")}>
                Highest Rated
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSortOption("distance")}>
                Nearest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            onClick={() =>
              setViewMode((prev) => (prev === "grid" ? "list" : "grid"))
            }
          >
            {viewMode === "grid" ? (
              <List className="h-4 w-4" />
            ) : (
              <Grid className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Checkbox
            id="wifi"
            checked={selectedAmenities.includes("WiFi")}
            onCheckedChange={() => handleAmenityToggle("WiFi")}
          />
          <label
            htmlFor="wifi"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            WiFi
          </label>
          <Checkbox
            id="outdoor"
            checked={selectedAmenities.includes("Outdoor Seating")}
            onCheckedChange={() => handleAmenityToggle("Outdoor Seating")}
          />
          <label
            htmlFor="outdoor"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Outdoor Seating
          </label>
          {/* Add more filter options as needed */}
        </div>
      </div>

      {/* Cafe Listing */}
      <div
        className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {filteredCafes.map((cafe) => (
          <Card key={cafe.id} className={viewMode === "list" ? "flex" : ""}>
            <Image
              src={cafe.image}
              alt={cafe.name}
              className={`object-cover ${viewMode === "grid" ? "h-48 w-full" : "h-full w-48"}`}
              priority
              quality={50}
              width={500}
              height={500}
            />
            <CardContent
              className={`p-4 ${viewMode === "list" ? "flex-grow" : ""}`}
            >
              <div className="flex justify-between items-start mb-2">
                <Link href={`/cafe-listing/${cafe.id}`}>
                  <h2 className="text-xl font-semibold">{cafe.name}</h2>
                </Link>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{cafe.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {cafe.location} ({cafe.distance})
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {cafe.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {cafe.amenities.includes("WiFi") && (
                  <Wifi className="h-5 w-5 text-gray-500" />
                )}
                {cafe.amenities.includes("Outdoor Seating") && (
                  <Sun className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
