import { create } from "zustand";

const useModal = create((set) => ({
  modalOpen: false,
  selectedItem: null,
  openModal: (item) => set({ modalOpen: true, selectedItem: item }),
  closeModal: () => set({ modalOpen: false, item: null }),
}));

export default useModal;
