import create from "zustand";

const useStore = create((set, get) => ({
  bears: 0,
  role: "değişmedi",
  userInfo: {},
  userToken: "",
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  changeRole: (payload) => set({ role: payload }),
  changeUserInfo: (payload) => set({ userInfo: payload }),
  changeUserToken: (payload) => set({ userToken: payload }),
}));

export default useStore;
