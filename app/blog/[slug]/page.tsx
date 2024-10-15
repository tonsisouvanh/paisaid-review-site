"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Linkedin, Twitter, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const blogPost = {
  id: 1,
  title: "The Art of Latte: Mastering Milk Foam",
  content: `
    <p>Coffee lovers around the world can agree that there's something magical about a perfectly crafted latte. The harmonious blend of rich espresso and velvety milk foam creates a drink that's not just delicious, but also visually stunning. In this post, we'll dive into the art of creating the perfect latte, focusing on one of its most crucial elements: milk foam.</p>

    <h2>Understanding Milk Foam</h2>
    <p>Milk foam is created by introducing air into milk, causing the proteins to form a stable structure around air bubbles. The key to great latte art lies in creating microfoam - a smooth, silky texture with tiny, uniform bubbles.</p>

    <h2>The Right Equipment</h2>
    <p>To create perfect milk foam, you'll need:</p>
    <ul>
      <li>A good quality espresso machine with a steam wand</li>
      <li>Fresh, cold milk (whole milk works best for beginners)</li>
      <li>A metal milk pitcher</li>
      <li>A thermometer (optional, but helpful)</li>
    </ul>

    <h2>The Technique</h2>
    <ol>
      <li>Fill your milk pitcher about 1/3 full. The milk will expand as you steam it.</li>
      <li>Purge the steam wand to remove any condensation.</li>
      <li>Submerge the tip of the steam wand just below the surface of the milk, off-center.</li>
      <li>Turn on the steam to full power. You should hear a gentle hissing sound.</li>
      <li>As the milk expands, gradually lower the pitcher to keep the tip of the wand just below the surface.</li>
      <li>Once the milk has expanded by about 50%, submerge the wand deeper to heat the milk.</li>
      <li>Heat until the pitcher is too hot to touch comfortably (or until your thermometer reads about 150°F).</li>
      <li>Turn off the steam and remove the wand. Wipe it clean immediately.</li>
      <li>Tap the pitcher on the counter to break any large bubbles, then swirl to incorporate the foam.</li>
    </ol>

    <p>With practice, you'll be creating silky, glossy milk foam perfect for latte art. Remember, the key is in the technique, not strength. Gentle, consistent movements will yield the best results.</p>

    <h2>Troubleshooting Common Issues</h2>
    <p>If your foam is too bubbly, you may be introducing too much air. Try keeping the wand tip slightly deeper in the milk. If your foam is too thin, you may not be introducing enough air. Keep the wand tip closer to the surface for longer.</p>

    <p>Creating the perfect milk foam is an art that takes practice. Don't be discouraged if your first attempts aren't perfect. With time and patience, you'll be crafting Instagram-worthy lattes in no time. Happy foaming!</p>
  `,
  image:
    "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  category: "Brewing Tips",
  author: {
    name: "Emma Barista",
    avatar:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Certified barista and latte art champion with 10 years of experience in specialty coffee.",
    twitter: "emmabarista",
    linkedin: "emma-barista",
  },
  date: "2023-06-15",
  relatedPosts: [
    {
      id: 2,
      title: "Espresso Basics: Pulling the Perfect Shot",
      excerpt:
        "Learn the fundamentals of espresso extraction for a balanced, flavorful shot every time.",
      image:
        "https://images.unsplash.com/photo-1513798752019-e24b7e5f7e04?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "The Science Behind Coffee Roasting",
      excerpt:
        "Discover how different roasting techniques affect the flavor profile of your coffee.",
      image:
        "https://images.unsplash.com/photo-1513798752019-e24b7e5f7e04?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Alternative Milk Options for Your Latte",
      excerpt:
        "Explore dairy-free alternatives that can create delicious and creamy lattes.",
      image:
        "https://images.unsplash.com/photo-1513798752019-e24b7e5f7e04?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function BlogPostPage() {
  const [comment, setComment] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
          <p className="text-gray-500 mb-4">
            {blogPost.category} | {blogPost.date}
          </p>
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
            priority
            width={500}
            height={500}
          />
        </header>

        <div
          className="prose max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        <div className="flex justify-start space-x-4 mb-8 overflow-x-scroll">
          <Button variant="outline">
            <Facebook className="w-4 h-4 mr-2" />
            Share on Facebook
          </Button>
          <Button variant="outline">
            <Twitter className="w-4 h-4 mr-2" />
            Share on Twitter
          </Button>
          <Button variant="outline">
            <Linkedin className="w-4 h-4 mr-2" />
            Share on LinkedIn
          </Button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold">{blogPost.author.name}</h3>
              <p className="text-sm text-gray-600">{blogPost.author.bio}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href={`https://twitter.com/${blogPost.author.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://linkedin.com/in/${blogPost.author.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Leave a Comment</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Comment submitted:", comment);
            }}
          >
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="mb-4"
            />
            <Button type="submit">Submit Comment</Button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPost.relatedPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader className="p-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                    priority
                    quality={50}
                    width={500}
                    height={500}
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                  <p className="text-sm text-gray-700">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
