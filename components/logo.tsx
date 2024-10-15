import Link from "next/link";
import { Coffee } from "lucide-react";

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link href="/" className="flex items-center">
      <Coffee className="h-8 w-auto sm:h-10 text-primary" />
      <span className="ml-2 text-xl font-bold text-gray-900">PaiSaiD</span>
    </Link>
  </div>
);

export default Logo;
