import Navbar from "@/components/navbar"
import Hero from "@/components/header"
import Product from "@/components/product";
import Contributors from "@/components/contributors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans max-w-[1200px]">
      <Navbar />
      <Hero />
      <Product />
      <Contributors />
      <Footer />
    </div>
  );
}
