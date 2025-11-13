import { create } from "zustand";

const useCount = create((set, get) => ({
  count: {},
  inc: (id) =>
    set((state) => {
      const current = state.count[id]?.count ?? 0;
      return {
        count: {
          ...state.count,
          [id]: { count: current + 1 },
        },
      };
    }),

  dec: (id) =>
    set((state) => {
      const current = state.count[id]?.count ?? 1;
      const newCount = Math.max(current - 1, 0);
      return {
        count: {
          ...state.count,
          [id]: { count: newCount },
        },
      };
    }),

  totalCount: () => {
    return Object.values(get().count).reduce((sum, item) => sum + (item.count || 0), 0);
  },
}));

export default useCount;