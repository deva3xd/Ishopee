import { router } from "@inertiajs/react";

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    router.delete(route("cart.destroy", item.product.id), {
      onSuccess: () => onClose(),
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white p-8 w-2/6 rounded-md">
        <h3 className="font-bold text-2xl text-primary border-b">Delete Product</h3>
        <span>Are you sure you want to delete this item?</span>
        <div className="flex justify-end mt-2">
          <button onClick={handleDelete} className="btn bg-red-600 hover:brightness-90 text-white">
            Delete
          </button>
          <button onClick={onClose} className="btn bg-gray-300 hover:brightness-90 text-gray-800">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;