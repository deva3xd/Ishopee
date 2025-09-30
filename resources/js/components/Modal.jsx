import { Store } from "lucide-react";

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
      <div className="bg-white rounded-sm p-4 w-2/4">
        <h3 className="font-bold text-2xl text-primary">Add to Cart</h3>
        <div className="flex py-2 gap-2">
          <div className="w-1/4">
            <img
              src={item.image}
              alt={item.name}
              className="h-52 object-contain border border-primary p-2"
              loading="lazy"
            />
          </div>
          <div className="w-3/4">
          <div className="text-black text-2xl font-bold">{item.name}</div>
            <div className="text-black text-sm font-normal flex justify-between items-center gap-1 border-b border-black"><Store size={16} />{item.profile.name}</div>
            <div className="grid grid-cols-2 text-base">
              <span className="text-black">Unit Price</span>
              <span className="text-right font-medium">${item.price}</span>
              <span className="text-black">Amount</span>
              <span className="text-right font-medium">1</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn mt-2 bg-red-600 hover:bg-red-700 text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;