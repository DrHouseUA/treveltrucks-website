import { VehicleTypeKey } from "@/components/VehicleTypeList/VehicleTypeList";
import { create } from "zustand";

export interface FilterConfigStore {
  AC: boolean;
  TV: boolean;
  kitchen: boolean;
  transmission: "automatic" | "";
  bathroom: boolean;
  form: VehicleTypeKey;
  toogleTransmission: (key: "automatic" | "") => void;
  toogleFilter: (key: keyof FilterConfigStore) => void;
  setForm: (value: VehicleTypeKey) => void;
  clearFilters: () => void;
}

export const useFilterConfigStore = create<FilterConfigStore>((set) => ({
  AC: false,
  TV: false,
  kitchen: false,
  transmission: "",
  bathroom: false,
  form: null,
  toogleTransmission: (key: "automatic" | "") =>
    set((state) => ({ ...state, transmission: key })),
  toogleFilter: (key: keyof FilterConfigStore) =>
    set((state) => ({ ...state, [key]: !state[key] })),
  setForm: (value: VehicleTypeKey) =>
    set((state) => ({ ...state, form: value })),
  clearFilters: () =>
    set({
      AC: false,
      TV: false,
      kitchen: false,
      transmission: "",
      bathroom: false,
      form: null,
    }),
}));
