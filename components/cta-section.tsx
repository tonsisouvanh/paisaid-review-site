import { Book, PenSquare, Coffee } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-400 to-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dive into the World of Cafés
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover new favorites, share your experiences, and stay updated
            with the latest in café culture.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-lg font-semibold"
          >
            <Book className="mr-2 h-5 w-5" />
            Read Reviews
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-lg font-semibold bg-white text-primary hover:bg-white/90"
          >
            <PenSquare className="mr-2 h-5 w-5" />
            Submit Your Review
          </Button>
          <Link href="/blog">
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto text-lg font-semibold text-white hover:bg-white/10"
            >
              <Coffee className="mr-2 h-5 w-5" />
              Explore Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
