import { useState } from "react";
import { usePage, router, Link } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";

const Home = ({ results, categories, carts }) => {
  const [alert, setAlert] = useState(false);
  const { url } = usePage();
  const query = new URLSearchParams(url.split('?')[1] || "");
  const queryCategory = query.get("category") ?? "all";

  const handleCartAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  const handleCategory = (categoryName) => {
    router.get(route('home'), { category: categoryName }, { preserveState: true });
  };

  return (
    <MainLayout title="Home">
      <div className="p-4 mb-2 bg-white">
        <div className="w-full border-b-2 border-primary">
          <h2 className="text-primary font-medium text-xl">Product</h2>
        </div>
        <div className="flex justify-between my-2">
          <div className="font-medium text-sm flex flex-wrap items-center gap-1">
            {[{ id: 0, name: "all", slug: "all" }, ...categories.data].map((category) => (
              <button onClick={() => handleCategory(category.slug)} key={category.id} className={`py-1 px-2 border border-primary rounded-sm hover:bg-gray-200 capitalize ${queryCategory === category.slug ? 'bg-primary text-white pointer-events-none' : 'bg-white text-primary'}`}>{category.name}</button>
            ))}
          </div>
          <div className="join flex justify-center">
            {results.meta.links.map((r) => (
              <Link
                key={r?.label ?? "#"}
                href={r?.url ?? "#"}
                className={`join-item btn btn-sm border border-rrimary hover:bg-gray-200 text-primary ${r.active === true && "bg-primary text-white pointer-events-none"}`}
                dangerouslySetInnerHTML={{ __html: r.label }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1">
          {results ? (
            <ProductCard products={results.data} cartAlert={handleCartAlert} carts={carts} />
          ) : (
            <span>There's No Products Available</span>
          )}
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