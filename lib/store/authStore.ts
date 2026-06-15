import { create } from "zustand";
import { User } from "@/types/user";

interface AuthStore {
  user: User | null;
  isAuth: boolean;
  setAuth: (user: User) => void;
  clearAuth: () => void;
}

export const useAuth = create<AuthStore>()((set) => ({
  user: null,
  isAuth: false,
  setAuth: (user: User) => set({ user, isAuth: true }),
  clearAuth: () =>
    set({
      user: null,
      isAuth: false,
    }),
}));
