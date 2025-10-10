import { useForm } from "@inertiajs/react";
import { Store } from "lucide-react";
import { useState } from "react";

const Modal = ({ isOpen, onClose, item }) => {
  const [count, setCount] = useState(0);
  const {data, setData, post} = useForm({

  })
  if (!isOpen) return null;
  console.log(item)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
      <div className="bg-white rounded-sm p-8 w-2/4">
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
              <div className="flex justify-end gap-1 text-black">
                <button onClick={() => setCount(count - 1)}>-</button>
                <span className="underline w-8 text-center text-primary">{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
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