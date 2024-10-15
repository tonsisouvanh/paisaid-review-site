"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";
import AuthAction from "./auth-action";
import MobileMenu from "./mobile-menu";
import { navLinks } from "@/const";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <Logo />

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                <span className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Search bar */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="relative">
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
          <div className="hidden md:flex items-center">
            <AuthAction />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
