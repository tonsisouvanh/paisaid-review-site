"use client";
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import TopCafesSection from "@/components/top-cafe-section";

export default function Home() {
  // const createDocument = useMutation(api.documents.createDocument);
  // const documents = useQuery(api.documents.getDocuments);
  return (
    <div className="">
      <HeroSection />
      <TopCafesSection />
      <CTASection />
    </div>
  );
}
