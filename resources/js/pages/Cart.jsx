import { Trash2 } from "lucide-react";
import useModal from "../stores/useModal";
import useCount from "../stores/useCount";
import MainLayout from "../layouts/MainLayout";
import Modal from "../components/Modal";

const Cart = ({ items }) => {
  const { modalOpen, openModal } = useModal();
  const { count, inc, dec, totalCount } = useCount();

  return (
    <MainLayout title="Cart">
      <div className="flex gap-2">
        <div className="w-full">
          <div className="hidden bg-white p-4 md:grid grid-cols-[1.5fr_3fr_0.8fr_0.8fr_1fr] gap-2 mb-2">
            <span>Product</span>
            <span>Product</span>
            <span>Price</span>
            <span>Amount</span>
            <span>Action</span>
          </div>

          {/* list product */}
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 grid grid-cols-2 md:grid-cols-[1.5fr_3fr_0.8fr_0.8fr_1fr] gap-2 border-b">
              <span className="flex justify-center border border-primary p-2">
                <img
                  src={item.product.image}
                  alt="Product"
                  className="h-28 object-contain"
                  loading="lazy"
                />
              </span>
              <span className="font-medium text-sm md:text-base flex items-center">{item.product.name}</span>
              <span className="text-primary flex items-center">
                ${item.product.price * ((count[item.id]?.count || 0) === 0 ? 1 : (count[item.id]?.count ?? 1))}
              </span>
              <div className="text-black flex items-center">
                <button onClick={() => dec(item.id)}>-</button>
                <span className="underline mx-4 text-center">{count[item.id]?.count ?? 0}</span>
                <button onClick={() => inc(item.id)}>+</button>
              </div>
              <button type="submit" onClick={() => openModal(item)} className="flex justify-center items-center px-1 bg-red-600 hover:brightness-90 text-white h-full w-full">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* order summary */}
        <div className="w-full md:w-2/5 hidden md:flex flex-col">
          <div className="bg-white p-4 mb-2">Order Summary</div>
          <div className="bg-white p-4">
            <div>
              <div className="flex justify-between">
                <span>Total Item</span>
                <span className="font-semibold">{totalCount()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Price</span>
                <span className="font-semibold">$0</span>
              </div>
            </div>
            <button type="submit" className="btn bg-primary w-full md:w-full rounded-md text-white mt-4">Checkout</button>
          </div>
        </div>
      </div>

      {/* modal */}
      {modalOpen && <Modal />}
    </MainLayout>
  )
}

export default Cart;