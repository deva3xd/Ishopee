import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { ShoppingCart } from "lucide-react";
import { Store } from "lucide-react";
import Modal from "../components/Modal";

const ProductCard = ({ products, cart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectItem, setSelectItem] = useState('');
  const { auth } = usePage().props;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  // const handleModal = (item) => {
  //   setSelectItem(item);
  //   setIsModalOpen(true);
  // };

  // const handleCart = (product) => {
  //   cart(product);
  // };

  return (
    products.map((product) => (
      <div key={product.id} className="card bg-base-100 w-52 shadow-sm flex-shrink-0 border-2 hover:border-primary rounded-sm p-1">
        <figure className="rounded-sm py-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-52 object-contain"
            loading="lazy"
          />
        </figure>
        <div className="card-body px-0 py-1">
          <h3 className="card-title truncate" title={product.name}>{product.name}</h3>
          <span className="text-xs font-normal capitalize">{product.category.name}</span>
          <div className="flex items-center">
            <Store size={14} />
            <span className="text-sm font-normal">{product.profile.name}</span>
          </div>
          <div className="flex justify-between items-center text-primary">
            <span className="font-bold">${product.price}</span>
            {auth.user && (
              <button onClick={() => cart(product)} className="rounded-sm"><ShoppingCart size={20} className="hover:fill-primary" /></button>
            )}
            {/* <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  item={selectItem}
                /> */}
          </div>
        </div>
      </div>
    ))
  )
}

export default ProductCard;