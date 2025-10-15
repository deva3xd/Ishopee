const Modal = ({ isOpen, onClose, item, count }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-sm p-8 w-2/4">
        <h3 className="font-bold text-2xl text-primary">Product Detail</h3>
        <div className="flex py-2 gap-2">
          <div className="w-1/4">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="h-52 object-contain border border-primary p-2"
              loading="lazy"
            />
          </div>
          <div className="w-3/4">
            <div className="text-black text-xl font-bold">{item.product.name}</div>
            <div className="grid grid-cols-2 text-base border-b border-black mt-2">
              <span className="text-black font-normal">Price</span>
              <span className="text-right font-medium">${item.product.price}</span>
              <span className="text-black font-normal">Amount</span>
              <div className="flex justify-end gap-1 text-black">{count}</div>
            </div>
            <div className="flex justify-between">
              <span className="text-black font-normal">Total</span>
              <p>${item.product.price * count}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button className="btn bg-primary hover:brightness-90 text-white" onClick={onClose}>
            Checkout
          </button>
          <button className="btn bg-red-600 hover:brightness-90 text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;