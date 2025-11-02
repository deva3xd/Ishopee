import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";

const Home = ({ products, categories, carts }) => {
  const [isActive, setIsActive] = useState('all');
  const [alert, setAlert] = useState(false);
  const filteredProducts = isActive === "all" ? products : products.filter((p) => p.category.name === isActive);

  const handleCartAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  }

  return (
    <MainLayout title="Home">
      <div className="p-4 mb-2 bg-white">
        <div className="w-full border-b-2 border-primary">
          <h2 className="text-primary font-medium text-xl">Product</h2>
        </div>
        <div className="font-medium text-sm flex flex-wrap items-center gap-1 my-2">
          {[{ id: 0, name: "all" }, ...categories].map((category) => (
            <button onClick={() => setIsActive(category.name)} key={category.id} className={`py-1 px-2 border border-primary rounded-sm hover:bg-primary hover:text-white capitalize ${isActive == category.name ? 'bg-primary text-white' : 'bg-white text-primary'}`}>{category.name}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1">
          <ProductCard products={filteredProducts} cartAlert={handleCartAlert} carts={carts} />
        </div>
      </div>
      {alert && (
        <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div role="alert" className="alert border border-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Product Added to Cart</span>
          </div>
        </div>
      )}
    </MainLayout>
  )
}

export default Home;