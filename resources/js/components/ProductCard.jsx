import { Link } from "@inertiajs/react";

const ProductCard = ({ products }) => {
  return (
    products.map((p) => (
      <Link href={route('detail', p.id)} key={p.id} className="card bg-base-100 shadow-sm flex-shrink-0 border-2 hover:border-primary rounded-sm p-2">
        <figure className="rounded-sm py-2">
          <img
            src={p.image}
            alt="Product"
            className="h-44 object-contain"
            loading="lazy"
          />
        </figure>
        <div className="card-body px-0 py-0">
          <h3 className="text-base font-bold truncate" title={p.name}>{p.name}</h3>
          <div className="flex justify-between items-center">
            <span className="font-bold text-primary">${p.price}</span>
            <span className="text-xs capitalize">{p.category.name}</span>
          </div>
        </div>
      </Link>
    ))
  )
}

export default ProductCard;