import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navLinks } from "@/const";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Search } from "lucide-react";
import Link from "next/link";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => (
  <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden pb-5`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navLinks.map((link) => (
        <Link
          onClick={() => setIsMenuOpen(false)}
          key={link.label}
          href={link.href}
        >
          <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
    <div className="pt-4 pb-3 border-t border-gray-200">
      <div className="px-2">
        <div className="relative mt-1">
          <Input
            type="search"
            placeholder="Search cafes..."
            className="w-full pl-10 pr-4 py-2 rounded-full"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-fit mx-auto">
      <Unauthenticated>
        <Button>
          <SignInButton />
        </Button>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </div>
  </div>
);

export default MobileMenu;
