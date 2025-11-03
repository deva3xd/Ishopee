const ProductTable = ({ products }) => {
  console.log(products)
  return (
    <div className="overflow-x-auto rounded-sm border border-base-content/5 bg-base-100 mt-4">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th>Seller</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.profile.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable;