import { useForm, usePage } from "@inertiajs/react";
import { ShoppingCart, Store } from "lucide-react";
import { useEffect } from "react";

const ProductCard = ({ products, carts, cartAlert }) => {
  const { auth } = usePage().props;
  const { data, setData, post } = useForm({
    product_id: null,
    quantity: 1
  });

  useEffect(() => {
    if (data.product_id !== null) {
      post(route('cart.store'), {
        onSuccess : () => {
          cartAlert(true);
        }
      });
    }
  }, [data.product_id]);

  const handleClick = (productId) => {
    setData('product_id', productId);
  };

  return (
    products.map((product) => (
      <div key={product.id} className="card bg-base-100 shadow-sm flex-shrink-0 border-2 hover:border-primary rounded-sm p-1">
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
            {auth.user &&
              !carts.some(cart => cart.product_id == product.id) && (
                <button onClick={() => handleClick(product.id)} className="rounded-sm"><ShoppingCart size={20} className="hover:fill-primary" /></button>
              )
            }
          </div>
        </div>
      </div>
    ))
  )
}

export default ProductCard;