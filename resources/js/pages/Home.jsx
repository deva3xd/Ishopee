import { useState } from "react";
import { useForm } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
// import useEmblaCarousel from 'embla-carousel-react';

const Home = ({ products, categories }) => {
  // const [emblaRef] = useEmblaCarousel();
  const [isActive, setIsActive] = useState('all');
  const [alert, setAlert] = useState(false);
  const filteredProducts = isActive === "all" ? products : products.filter((p) => p.category.name === isActive);
  const { data, post } = useForm({
    product_id: "",
    quantity: "",
  });

  const handleCart = (product) => {
    setAlert(true);

    setTimeout(() => setAlert(false), 3000);
    post(route("cart.store"), {
      onSuccess: () => {
        data({
          product_id: product.id,
          amount: 1,
        });
        // setTimeout(() => setAlert(false), 3000);
      },
    });
  }

  return (
    <MainLayout title="Home">
      <div className="p-4 mb-2 bg-white">
        <div className="w-full border-b-2 border-primary">
          <h2 className="text-primary font-medium text-xl">Product</h2>
        </div>
        <div className="font-medium text-sm flex items-center gap-1 my-2">
          <span className="text-primary">Category:</span>
          {[{ id: 0, name: "all" }, ...categories].map((category) => (
            <button onClick={() => setIsActive(category.name)} key={category.id} className={`py-1 px-2 border border-primary rounded-sm hover:bg-primary hover:text-white capitalize ${isActive == category.name ? 'bg-primary text-white' : 'bg-white text-primary'}`}>{category.name}</button>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1">
          <ProductCard products={filteredProducts} cart={handleCart} />
        </div>
      </div>
      {alert && (
        <div role="alert" className="alert border border-black fixed bottom-5 right-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Product Added to Cart</span>
        </div>
      )}
    </MainLayout>
  )
}
{/* <div className="overflow-hidden" ref={emblaRef}>
<div className="flex gap-3">
  <ProductCard products={products} />
</div> */}

export default Home;