import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Modal from "../components/Modal";

const Cart = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectItem, setSelectItem] = useState('');
  const [countSelectItem, setCountSelectItem] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  const handleModal = (item, count) => {
    setSelectItem(item);
    setCountSelectItem(count);
    setIsModalOpen(true);
  };

  const [counts, setCounts] = useState(() =>
    items.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const setCount = (id, newCount) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(newCount, 1),
    }));
  };

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
        <div key={item.id} className="w-full bg-white p-4 flex items-center justify-between gap-2">
          <span className="w-1/6 flex justify-center border border-primary p-2">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="h-28 object-contain"
              loading="lazy"
            />
          </span>
          <span className="text-lg font-medium w-2/6">{item.product.name}</span>
          <span className="w-1/6">${item.product.price}</span>
          <div className="flex gap-1 w-1/6 text-black">
            <button onClick={() =>
              setCount(item.id, Math.max((counts[item.id] || 1) - 1, 1))
            }>-</button>
            <span className="underline w-8 text-center">{counts[item.id]}</span>
            <button onClick={() =>
              setCount(item.id, Math.min((counts[item.id] || 1) + 1, 5))
            }>+</button>
          </div>
          <div className="w-1/6">
            <button onClick={() => handleModal(item, counts[item.id])} className="btn bg-primary hover:brightness-90 text-white">Checkout</button>
            <button onClick={() => console.log('clicked')} className="btn bg-red-600 hover:brightness-90 text-white">Delete</button>
          </div>
        </div>
      ))};

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectItem}
        count={countSelectItem}
      />
    </MainLayout>
  )
}

export default Cart;