import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Coffee, Filter, MapPin, Search, Star, X } from "lucide-react";
import { useState } from "react";

export default function GlobalFilter() {
  const [filters, setFilters] = useState<{
    search: string;
    rating: string;
    location: string;
    priceRange: number[];
    amenities: string[];
  }>({
    search: "",
    rating: "",
    location: "",
    priceRange: [1, 4],
    amenities: [],
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePriceRangeChange = (value: number[]) => {
    setFilters({ ...filters, priceRange: value });
  };

  const handleAmenityToggle = (amenity: string) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      rating: "",
      location: "",
      priceRange: [1, 4],
      amenities: [],
    });
  };

  const amenities = [
    "Wi-Fi",
    "Power Outlets",
    "Outdoor Seating",
    "Pet Friendly",
  ];

  return (
    <div className="bg-white text-slate-900 shadow-md rounded-lg p-4 mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            name="search"
            placeholder="Search cafes..."
            value={filters.search}
            onChange={handleInputChange}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Select name="rating" value={filters.rating}>
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
        </Select>
        <Select name="location" value={filters.location}>
          <option value="">All Locations</option>
          <option value="downtown">Downtown</option>
          <option value="uptown">Uptown</option>
          <option value="suburbs">Suburbs</option>
        </Select>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" /> More Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Price Range</h4>
                <Slider
                  min={1}
                  max={4}
                  step={1}
                  value={filters.priceRange}
                  onValueChange={handlePriceRangeChange}
                />
                <div className="flex justify-between mt-2">
                  <span>$</span>
                  <span>$$</span>
                  <span>$$$</span>
                  <span>$$$$</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Amenities</h4>
                <div className="flex flex-wrap gap-2">
                  {amenities.map((amenity) => (
                    <Button
                      key={amenity}
                      variant={
                        filters.amenities.includes(amenity)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => handleAmenityToggle(amenity)}
                    >
                      {amenity}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button onClick={clearFilters} variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>
      {(filters.search ||
        filters.rating ||
        filters.location ||
        filters.priceRange[0] !== 1 ||
        filters.priceRange[1] !== 4 ||
        filters.amenities.length > 0) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.search && (
            <Badge variant="secondary">Search: {filters.search}</Badge>
          )}
          {filters.rating && (
            <Badge variant="secondary">
              Rating: {filters.rating}+ <Star className="h-3 w-3 ml-1" />
            </Badge>
          )}
          {filters.location && (
            <Badge variant="secondary">
              Location: {filters.location} <MapPin className="h-3 w-3 ml-1" />
            </Badge>
          )}
          {(filters.priceRange[0] !== 1 || filters.priceRange[1] !== 4) && (
            <Badge variant="secondary">
              Price: {"$".repeat(filters.priceRange[0])} -{" "}
              {"$".repeat(filters.priceRange[1])}
            </Badge>
          )}
          {filters.amenities.map((amenity) => (
            <Badge key={amenity} variant="secondary">
              {amenity} <Coffee className="h-3 w-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
