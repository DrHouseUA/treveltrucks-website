// store/vehicleStore.ts
import { create } from "zustand";
import { Vehicle } from "@/types/vehicle";

interface VehicleState {
  vehicles: Vehicle[];
  total: number;
  loading: boolean;
  error: string | null;

  setVehicles: (vehicles: Vehicle[]) => void;
}

export const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: [],
  total: 0,
  loading: false,
  error: null,

  setVehicles: (vehicles: Vehicle[]) =>
    set((state) => ({ ...state, vehicles: vehicles })),
}));
