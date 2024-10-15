import React from "react";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <Loader className="animate-spin text-blue-500" size={32} />
        <span className="text-lg font-medium text-gray-700">Loading...</span>
      </div>
    </div>
  );
}
