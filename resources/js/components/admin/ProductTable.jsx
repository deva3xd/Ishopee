import { Link } from "@inertiajs/react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <div className="overflow-x-auto rounded-sm border border-base-content/5 bg-base-100 mt-4 mb-2">
        <div className="p-4 font-medium text-lg">PRODUCT TABLE</div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Seller</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {products.data.map((product) => (
              <tr key={product.id}>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.profile.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-2">
        <div>Showing {products.from} to {products.to} of {products.total} entries</div>
        <div className="join">
          {products.links.map((product) => (
            <Link
              key={product?.label ?? "#"}
              href={product?.url ?? "#"}
              className={`join-item btn ${product.active == true && "btn-active"}`}
              dangerouslySetInnerHTML={{ __html: product.label }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductTable;