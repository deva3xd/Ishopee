import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";

const Detail = ({ product, relatedProducts }) => {
  return (
    <MainLayout title="Detail">
      <div className="flex flex-col sm:flex-row w-full bg-white rounded-xl p-8 sm:p-12 gap-2">
        <div className="flex justify-center w-full">
          <img src={product.image} alt="Product" className="w-52 sm:w-60 border-2 border-primary p-2 rounded-sm" />
        </div>
        <div className="flex gap-y-2 flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">${product.price}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] items-center gap-x-3 gap-y-1">
            <span className="text-gray-700">Shop</span>
            <span className="text-base">{product.profile.name}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] items-center gap-x-3 gap-y-1">
            <span className="text-gray-700">Category</span>
            <span className="text-base capitalize">{product.category.name}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] items-center gap-x-3 gap-y-1">
            <span className="text-gray-700">Description</span>
            <p className="text-base first-letter:uppercase text-justify">{product.description}</p>
          </div>
          <div className="flex items-center justify-end sm:justify-start my-1 gap-2">
            <div className="flex items-center gap-4">
              <button className="btn border-primary">-</button>
              <span className="underline text-lg">12</span>
              <button className="btn border-primary">+</button>
            </div>
            <button className="btn bg-primary text-white hover:brightness-95 border-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="border border-primary my-2"></div>
      <div className="bg-white mb-2 p-2">
        <h3 className="text-xl font-normal py-2">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          <ProductCard products={relatedProducts} />
        </div>
      </div>
    </MainLayout>
  )
}

export default Detail;