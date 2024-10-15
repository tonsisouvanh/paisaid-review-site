"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Latte: Mastering Milk Foam",
    excerpt:
      "Discover the secrets to creating the perfect latte art with our step-by-step guide...",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    category: "Brewing Tips",
    author: "Emma Barista",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Cozy Corner Café: A Hidden Gem in Downtown",
    excerpt:
      "Tucked away in a quiet alley, this charming café offers more than just great coffee...",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    category: "Café Spotlights",
    author: "Alex Explorer",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "The Rise of Sustainable Coffee Shops",
    excerpt:
      "How eco-friendly practices are reshaping the café industry and what it means for coffee lovers...",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    category: "Café Culture",
    author: "Sam Green",
    date: "2023-06-05",
  },
  {
    id: 4,
    title: "Global Coffee Prices Surge: What It Means for Your Daily Cup",
    excerpt:
      "Recent market trends are affecting coffee prices worldwide. Here's what you need to know...",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    category: "Café News",
    author: "Jamie Economist",
    date: "2023-06-01",
  },
  // Add more blog posts as needed
];

const categories = [
  "All",
  "Café Spotlights",
  "Café Culture",
  "Brewing Tips",
  "Café News",
];

export default function BlogHomepage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Café Chronicles: Our Blog</h1>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <Card key={post.id} className={index === 0 ? "md:col-span-2" : ""}>
            <CardHeader className="p-0">
              <Image
                src={post.image}
                alt={post.title}
                priority
                quality={50}
                className="w-full h-48 object-cover rounded-t-lg"
                width={500}
                height={500}
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
              <p className="text-sm text-gray-500 mb-2">
                {post.category} | {post.date}
              </p>
              <p className="text-gray-700">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/blog/${post.id}`}>
                <Button variant="outline">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
