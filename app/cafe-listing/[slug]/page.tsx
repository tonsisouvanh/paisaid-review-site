"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Camera,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  Star,
  Twitter,
  Umbrella,
  Users,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock data for the café
const cafeData = {
  id: 1,
  name: "The Cozy Corner Café",
  rating: 4.7,
  address: "123 Main St, Cityville, State 12345",
  openingHours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-9pm",
  phone: "+1 (555) 123-4567",
  website: "www.cozycornercafe.com",
  socialMedia: {
    facebook: "cozycornercafe",
    instagram: "cozycornercafe",
    twitter: "cozycornercafe",
  },
  amenities: ["WiFi", "Seating for 50", "Outdoor Area", "Vegan Options"],
  images: [
    "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};

// Mock data for reviews
const reviewsData = [
  {
    id: 1,
    user: {
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2023-05-15",
    comment:
      "Absolutely love this place! Great atmosphere and even better coffee.",
    helpful: 12,
  },
  {
    id: 2,
    user: { name: "Bob Smith", avatar: "/placeholder.svg?height=40&width=40" },
    rating: 4,
    date: "2023-05-10",
    comment:
      "Solid spot for a quick work session. WiFi is reliable and the pastries are delicious.",
    helpful: 8,
  },
  // Add more mock reviews as needed
];

interface Cafe {
  id: number;
  name: string;
  rating: number;
  address: string;
  openingHours: string;
  phone: string;
  website: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  amenities: string[];
  images: string[];
}

function HeaderSection({ cafe }: { cafe: Cafe }) {
  return (
    <section className="relative">
      <Image
        src={cafe.images[0]}
        alt={cafe.name}
        className="w-full h-64 object-cover"
        priority
        width={500}
        height={500}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
        <div className="container mx-auto px-4 py-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{cafe.name}</h1>
          <div className="flex items-center mb-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium">{cafe.rating}</span>
          </div>
          <p className="flex items-center mb-2">
            <MapPin className="h-5 w-5 mr-2" />
            {cafe.address}
          </p>
          <p className="flex items-center mb-2">
            <Clock className="h-5 w-5 mr-2" />
            {cafe.openingHours}
          </p>
          <div className="flex space-x-4">
            <a href={`tel:${cafe.phone}`} className="flex items-center">
              <Phone className="h-5 w-5 mr-1" />
              {cafe.phone}
            </a>
            <a
              href={`https://${cafe.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Globe className="h-5 w-5 mr-1" />
              {cafe.website}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SocialMediaLinksProps {
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

function SocialMediaLinks({ socialMedia }: SocialMediaLinksProps) {
  return (
    <div className="flex space-x-4 mt-4">
      <a
        href={`https://facebook.com/${socialMedia.facebook}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href={`https://instagram.com/${socialMedia.instagram}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href={`https://twitter.com/${socialMedia.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="h-6 w-6" />
      </a>
    </div>
  );
}

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const [sortBy, setSortBy] = useState("helpful");
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "helpful") return b.helpful - a.helpful;
    if (sortBy === "newest")
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return 0;
  });

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the new review to your backend
    console.log("Submitting review:", newReview);
    // Reset the form
    setNewReview({ rating: 5, comment: "" });
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        <div className="mb-4">
          <label htmlFor="sort-reviews" className="mr-2">
            Sort by:
          </label>
          <select
            id="sort-reviews"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-1"
          >
            <option value="helpful">Most Helpful</option>
            <option value="newest">Newest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
        <div className="space-y-4 mb-8">
          {sortedReviews.map((review) => (
            <div key={review.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Avatar>
                  <AvatarImage
                    src={review.user.avatar}
                    alt={review.user.name}
                  />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="font-semibold">{review.user.name}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
              <div className="mt-2 text-sm text-gray-500">
                {review.helpful} people found this helpful
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="mb-4">
              <label htmlFor="rating" className="block mb-2">
                Rating:
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="mr-1"
                  >
                    <Star
                      className={`h-6 w-6 ${star <= newReview.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block mb-2">
                Your Review:
              </label>
              <Textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                rows={4}
                className="w-full"
                placeholder="Share your experience..."
              />
            </div>
            <Button type="submit">Submit Review</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function PhotoGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Cafe image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
              priority
              width={500}
              height={500}
            />
          ))}
        </div>
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-3xl">
            <Image
              src={selectedImage || ""}
              alt="Selected cafe image"
              className="w-full h-auto"
              priority
              width={500}
              height={500}
            />
          </DialogContent>
        </Dialog>
        <div className="mt-4">
          <Button>
            <Camera className="mr-2 h-4 w-4" />
            Upload Photo
          </Button>
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection({ amenities }: { amenities: string[] }) {
  const amenityIcons: { [key: string]: JSX.Element } = {
    WiFi: <Wifi />,
    "Seating for 50": <Users />,
    "Outdoor Area": <Umbrella />,
    "Vegan Options": <Leaf />,
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center bg-white shadow rounded-lg p-4"
            >
              {amenityIcons[amenity]}
              <span className="ml-2">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CafeDetailPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderSection cafe={cafeData} />
      <div className="container mx-auto px-4 py-8">
        <SocialMediaLinks socialMedia={cafeData.socialMedia} />
        <Tabs defaultValue="reviews" className="mt-8">
          <TabsList>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews">
            <ReviewsSection reviews={reviewsData} />
          </TabsContent>
          <TabsContent value="photos">
            <PhotoGallery images={cafeData.images} />
          </TabsContent>
          <TabsContent value="amenities">
            <AmenitiesSection amenities={cafeData.amenities} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
