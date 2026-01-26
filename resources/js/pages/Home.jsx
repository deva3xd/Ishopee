import { usePage, router, Link } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";

const Home = ({ results, categories }) => {
  const { url } = usePage();
  const query = new URLSearchParams(url.split('?')[1] || "");
  const queryCategory = query.get("category") ?? "all";

  const handleCategory = (categoryName) => {
    router.get(route('product'), { category: categoryName }, { preserveState: true });
  };

  return (
    <MainLayout title="Home">
      <div className="mb-2 bg-white p-4">
        <div className="w-full border-b-2 border-primary">
          <h2 className="text-primary font-medium text-xl">Product</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-between my-2">
          <div className="font-medium text-sm flex flex-wrap gap-1">
            {[{ id: 0, name: "all", slug: "all" }, ...categories.data].map((category) => (
              <button onClick={() => handleCategory(category.slug)} key={category.id} className={`btn btn-sm hover:bg-gray-200 text-primary capitalize ${queryCategory === category.slug && 'bg-primary text-white pointer-events-none'}`}>{category.name}</button>
            ))}
          </div>
          <div className="join flex mt-2 sm:mt-0 justify-center">
            {results.meta.links.map((r) => (
              <Link
                key={r?.label ?? "#"}
                href={r?.url ?? "#"}
                className={`join-item btn btn-sm hover:bg-gray-200 text-primary ${r.active === true && "bg-primary text-white pointer-events-none"}`}
                dangerouslySetInnerHTML={{ __html: r.label }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          {results ? (
            <ProductCard products={results.data} />
          ) : (
            <span>There's No Products Available</span>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home;