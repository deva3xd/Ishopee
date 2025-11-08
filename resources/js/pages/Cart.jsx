import { Trash2, Check } from "lucide-react";
import useModal from "../stores/useModal";
import useCount from "../stores/useCount";
import MainLayout from "../layouts/MainLayout";
import Modal from "../components/Modal";

const Cart = ({ items }) => {
  const { modalOpen, openModal } = useModal();
  const { countPerItem, inc, dec, countSelectedItem } = useCount(); 

  return (
    <MainLayout title="Cart">
      <div className="flex gap-2">
        <div className="w-3/5">
          <div className="hidden bg-white p-4 lg:grid grid-cols-[1.5fr_3fr_0.8fr_0.8fr_1fr] gap-2 mb-2">
            <span>Product</span>
            <span>Product</span>
            <span>Price</span>
            <span>Amount</span>
            <span>Action</span>
          </div>

          {/* list product */}
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 grid grid-cols-2 lg:grid-cols-[1.5fr_3fr_0.8fr_0.8fr_1fr] gap-2 border-b">
              <span className="flex justify-center border border-primary p-2">
                <img
                  src={item.product.image}
                  alt="Product"
                  className="h-28 object-contain"
                  loading="lazy"
                />
              </span>
              <span className="font-medium text-sm lg:text-base">{item.product.name}</span>
              <span className="text-primary">${item.product.price * (countPerItem[item.id]?.count ?? 1)}</span>
              <div className="text-black">
                <button onClick={() => dec(item.id)}>-</button>
                <span className="underline mx-4 text-center">{countPerItem[item.id]?.count ?? 1}</span>
                <button onClick={() => inc(item.id)}>+</button>
              </div>
              <div className="">
                {/* <button onClick={() => handleModal(item, state.countPerItem[item.id])} className="btn bg-primary hover:brightness-90 text-white w-1/2">
                  <Check size={20} />
                </button> */}
                <button onClick={() => openModal(item)} className="btn bg-red-600 hover:brightness-90 text-white w-1/2">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* order summary */}
        <div className="w-2/5 hidden lg:flex flex-col">
          <div className="bg-white p-4 mb-2">Order Summary</div>
          <div className="bg-white p-4">
            <div>
              <div className="flex justify-between">
                <span>Total Item</span>
                <span className="font-semibold">{countSelectedItem}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Price</span>
                <span className="font-semibold">Total Item</span>
              </div>
            </div>
            <button type="submit" className="btn bg-primary w-full rounded-md text-white mt-4">Checkout</button>
          </div>
        </div>
      </div>

      {/* modal */}
      {modalOpen && <Modal />}
    </MainLayout>
  )
}

export default Cart;