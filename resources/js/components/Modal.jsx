import useToggleModal from "../stores/useModal";

const Modal = ({ confirmDelete }) => {
  const { openModal, closeModal } = useToggleModal();
  if (!openModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white p-8 w-2/6 rounded-md">
        <h3 className="font-bold text-2xl text-primary border-b">Delete Product</h3>
        <span>Are you sure you want to delete this item?</span>
        <div className="flex justify-end mt-2">
          <button onClick={confirmDelete} className="btn bg-red-600 hover:brightness-90 text-white">
            Delete
          </button>
          <button onClick={closeModal} className="btn bg-black hover:brightness-90 text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;