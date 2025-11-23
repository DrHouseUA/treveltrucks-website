// store/vehicleStore.ts
import { create } from "zustand";
import { Vehicle } from "@/types/vehicle";
import { fetchVehicles, VehicleParams } from "../api/api";

interface VehicleState {
  vehicles: Vehicle[];
  total: number;
  loading: boolean;
  error: string | null;

  loadVehicles: (
    params?: VehicleParams,
    options?: { queryString: string }
  ) => Promise<void>;
}

export const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: [],
  total: 0,
  loading: false,
  error: null,

  loadVehicles: async (params, options) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchVehicles(params ?? {}, options);
      set({ vehicles: data.items, total: data.total, loading: false });
    } catch (err) {
      // тут без any: використовуємо стандартний тип Error
      const message = err instanceof Error ? err.message : "Unknown error";
      set({ error: message, loading: false });
    }
  },
}));
