import { useForm } from "@inertiajs/react";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";

const Detail = ({ product, relatedProducts, cart }) => {
  const [alert, setAlert] = useState(false);
  const { data, setData, post } = useForm({
    product_id: product.id,
    quantity: 1
  });

  const addToCart = () => {
    post(route('cart.store'), {
      onSuccess: () => {
        setAlert(true);
        setTimeout(() => setAlert(false), 3000);
      },
    })
  };

  return (
    <MainLayout title="Detail">
      <div className="flex flex-col sm:flex-row w-full bg-white rounded-xl p-8 sm:p-12 gap-2">
        <div className="flex justify-center">
          <div className="w-52 sm:w-60 aspect-[4/5] border-2 border-primary p-2 rounded-sm overflow-hidden">
            <img
              src={product.image}
              alt="Product"
              className="w-full h-full object-contain"
            />
          </div>
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
          {!cart ? (
            <div className="flex items-center justify-end sm:justify-start my-1 gap-2">
              <div className="flex items-center gap-4">
                <button onClick={() => setData('quantity', data.quantity - 1)} className="btn border-primary">-</button>
                <span className="underline text-lg">{data.quantity}</span>
                <button onClick={() => setData('quantity', data.quantity + 1)} className="btn border-primary">+</button>
              </div>
              <button onClick={addToCart} className="btn bg-primary text-white hover:brightness-95 border-primary">Add to Cart</button>
            </div>
          ) : (
            <div>
              <button className="btn text-gray-700" disabled>Item on Cart</button>
            </div>
          )}
        </div>
      </div>
      <div className="border border-primary my-2"></div>
      <div className="bg-white mb-2 p-4">
        <h3 className="text-xl font-normal my-2">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          <ProductCard products={relatedProducts} />
        </div>
      </div>
      {alert && (
        <div className="bg-black/25 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div role="alert" className="alert border border-primary absolute bottom-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current text-primary" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-primary">Product Added to Cart</span>
          </div>
        </div>
      )}
    </MainLayout>
  )
}

export default Detail;