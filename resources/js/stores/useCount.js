import { create } from "zustand";

const useCount = create((set) => ({
  countPerItem: {},
  inc: (id) =>
    set((state) => {
      const item = state.countPerItem[id];
      return {
        countPerItem: {
          ...state.countPerItem,
          [id]: item
            ? { ...item, count: item.count + 1 }
            : { ...id, count: 2 },
        },
      }
    }),

  dec: (id) =>
    set((state) => {
      const item = state.countPerItem[id];
      if (!item) return state;
      const newCount = Math.max(item.count - 1, 1);
      return {
        countPerItem: {
          ...state.countPerItem,
          [id]: { ...item, count: newCount },
        },
      }
    }),

  countSelectedItem: 0
}));

export default useCount;