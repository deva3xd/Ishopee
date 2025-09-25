import { Link } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from "lucide-react";

const Home = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <MainLayout title="Home">
      {/* category */}
      <div className="pb-12">
        <span className="text-primary font-medium text-xl">Category</span>
        <div className="grid grid-cols-6 gap-4">
          <div className="card bg-base-100 w-44 shadow-sm border-2 rounded-sm p-1">
            <figure className="rounded-sm">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="h-44" />
            </figure>
            <div className="card-body px-0 py-1">
              <h2 className="card-title">Card Title</h2>
            </div>
          </div>
        </div>
      </div>
      {/* category end */}

      {/* product */}
      <div className="pb-12">
        <span className="text-primary font-medium text-xl">All Product</span>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            <div className="card bg-base-100 w-52 shadow-sm flex-shrink-0 border-2 hover:border-primary rounded-sm p-1">
              <figure className="rounded-sm">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="h-52" />
              </figure>
              <div className="card-body px-0 py-1">
                <h2 className="card-title">Card Title</h2>
                <h3 className="card-title text-sm font-normal">Man Clothing</h3>
                <div className="flex justify-between items-center text-primary">
                  <span className="font-bold">$12.00</span>
                  <span className="flex items-center gap-1">
                    <Star size={18} className="fill-primary stroke-none" /><span className="font-bold text-sm">3.00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product end */}
    </MainLayout>
  )
}

export default Home;