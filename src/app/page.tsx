'use client'; 
import Image from "next/image";
import { HeroUIProvider } from "@heroui/react";
import ProductsGrid from "../../components/product-list/product-grid";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroUIProvider>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
          <ProductsGrid />
        </div>
      </div>
    </HeroUIProvider>
       <Footer />
    </div>
  );
}
``