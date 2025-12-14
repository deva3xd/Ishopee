import { create } from "zustand";

const useCount = create((set, get) => ({
  count: {},
  price: {},

  setPrice: (id, itemPrice) =>
    set((state) => ({
      price: {
        ...state.price,
        [id]: itemPrice,
      },
    })),

  inc: (id) => set((state) => {
    const current = state.count[id]?.count ?? 0;
    return {
      count: {
        ...state.count,
        [id]: { count: current + 1 },
      },
    };
  }),

  dec: (id) => set((state) => {
    const current = state.count[id]?.count ?? 1;
    const newCount = Math.max(current - 1, 0);
    return {
      count: {
        ...state.count,
        [id]: { count: newCount },
      },
    };
  }),

  totalQuantity: () => {
    return Object.values(get().count).reduce((sum, item) => sum + (item.count || 0), 0);
  },

  totalPrice: () => {
    const { count, price } = get();

    return Object.keys(count).reduce((sum, id) => {
      const qty = count[id]?.count ?? 0;
      const itemPrice = price[id] ?? 0;
      return sum + qty * itemPrice;
    }, 0);
  },
}));

export default useCount;