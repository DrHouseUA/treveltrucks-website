import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FavoriteIdsStore {
  favoritesIds: string[];
  setFavorite: (id: string) => void;
  unSetFavorite: (id: string) => void;
  clearFavorite: () => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesIdsStore = create<FavoriteIdsStore>()(
  persist(
    (set, get) => ({
      favoritesIds: [],

      setFavorite: (id) =>
        set((state) => {
          const exists = state.favoritesIds.some((v) => v === id);
          if (exists) return state;
          return { favoritesIds: [...state.favoritesIds, id] };
        }),

      unSetFavorite: (id) =>
        set((state) => ({
          favoritesIds: state.favoritesIds.filter((v) => v !== id),
        })),

      clearFavorite: () => set(() => ({ favoritesIds: [] })),

      isFavorite: (id) => get().favoritesIds.some((v) => v === id),
    }),
    {
      name: "favorites-storage", // ключ в localStorage
      // опціонально: custom serialize/deserialize або version/migrate
    }
  )
);
