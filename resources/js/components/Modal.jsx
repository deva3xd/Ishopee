import { router } from "@inertiajs/react";
import useToggleModal from "../stores/useModal";

const Modal = () => {
  const { openModal, closeModal, selectedItem } = useToggleModal();
  if (!openModal) return null;

  const handleDelete = () => {
    router.delete(route("cart.destroy", selectedItem.product.id), {
      onSuccess: () => closeModal(),
    });
  }; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white p-8 w-2/6 rounded-md">
        <h3 className="font-bold text-2xl text-primary border-b">Delete Product</h3>
        <span>Are you sure you want to delete this item?</span>
        <div className="flex justify-end mt-2">
          <button onClick={handleDelete} className="btn bg-red-600 hover:brightness-90 text-white">
            Delete
          </button>
          <button onClick={closeModal} className="btn bg-black hover:brightness-90 text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  )
};

export default Modal;