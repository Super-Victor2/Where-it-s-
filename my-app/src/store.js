import { create } from 'zustand';

const useStore = create((set) => ({
    selectedNumber: 0,
    totalPrice: 0,
    eventsData: [], // Ensure eventsData is initialized as an empty array
    setSelectedNumber: (selectedNumber) => set({ selectedNumber }),
    setTotalPrice: (totalPrice) => set({ totalPrice }),
    setEventsData: (eventsData) => set({ eventsData }),
    setTotalOrderValue: (totalOrderValue) => set({ totalOrderValue }),
    addToCart: (orderData) => {
        set((state) => ({
            eventsData: [...state.eventsData, orderData],
        }));
        console.log('Adding to cart:', orderData);
    },
}));

export default useStore;