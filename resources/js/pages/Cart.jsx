import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Modal from "../components/Modal";

const Cart = ({ items }) => {
  const [count, setCount] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectItem, setSelectItem] = useState('');

  // useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [isModalOpen]);

  // const handleModal = (product) => {
  //   setSelectItem(product);
  //   setIsModalOpen(true);
  // };

  return (
    <MainLayout title="Cart">
      <div className="w-full bg-white p-4 flex items-center justify-between gap-2 mb-2">
        <span className="w-1/6">Product</span>
        <span className="w-2/6">Product</span>
        <span className="w-1/6">Price</span>
        <span className="w-1/6">Amount</span>
        <span className="w-1/6">Action</span>
      </div>

      {items.map((item) => (
        <div className="w-full bg-white p-4 flex items-center justify-between gap-2">
          <span className="w-1/6">aa</span>
          <span className="text-lg font-medium w-2/6">{item.product.name}</span>
          <span className="w-1/6">${item.product.price}</span>
          <div className="flex gap-1 w-1/6 text-black">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className="underline w-8 text-center">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <div className="w-1/6">
            <button onClick={() => console.log('clicked')} className="btn bg-primary hover:brightness-90 text-white">Checkout</button>
          </div>
        </div>
      ))};

      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectItem}
      /> */}
    </MainLayout>
  )
}

export default Cart;