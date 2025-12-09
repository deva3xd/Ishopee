import { useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { ShoppingCart, Store } from "lucide-react";

const ProductCard = ({ products, carts, cartAlert }) => {
  const { auth } = usePage().props;
  const { data, setData, post } = useForm({
    product_id: null,
    quantity: 1
  });

  useEffect(() => {
    if (data.product_id !== null) {
      post(route('cart.store'), {
        onSuccess: () => {
          cartAlert(true);
        }
      });
    }
  }, [data.product_id]);

  const handleClick = (productId) => {
    setData('product_id', productId);
  };

  return (
    products.map((p) => (
      <div key={p.id} className="card bg-base-100 shadow-sm flex-shrink-0 border-2 hover:border-primary rounded-sm p-1">
        <figure className="rounded-sm py-2">
          <img
            src={p.image}
            alt="Product"
            className="h-52 object-contain"
            loading="lazy"
          />
        </figure>
        <div className="card-body px-0 py-1">
          <h3 className="card-title truncate" title={p.name}>{p.name}</h3>
          <span className="text-xs font-normal capitalize">{p.category.name}</span>
          <div className="flex items-center">
            <Store size={14} />
            <span className="text-sm font-normal">{p.profile.name}</span>
          </div>
          <div className="flex justify-between items-center text-primary">
            <span className="font-bold">${p.price}</span>
            {auth.user &&
              !carts.some(cart => cart.product_id === p.id) && (
                <button onClick={() => handleClick(p.id)} className="rounded-sm"><ShoppingCart size={20} className="hover:fill-primary" /></button>
              )
            }
          </div>
        </div>
      </div>
    ))
  )
}

export default ProductCard;