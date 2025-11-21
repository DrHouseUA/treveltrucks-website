import { Vehicle } from "@/types/vehicle";
import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});

export interface VehicleDataResponse {
  total: 23;
  items: Vehicle[];
}

interface VehicleParams {
  search?: string;
  filter?: string;
  field_name?: string;
  page?: number;
  limit?: number;
}

export const fetchVehicles = async (
  params: VehicleParams,
  options?: { queryString: string }
): Promise<VehicleDataResponse> => {
  console.log(params);
  const response = await apiClient.get<VehicleDataResponse>(
    `/campers?${options?.queryString}`,
    {
      params,
    }
  );
  return response.data;
};

export const fetchVehicleById = async (id: string): Promise<Vehicle> => {
  const response = await apiClient.get<Vehicle>(`/campers/${id}`);
  return response.data;
};

export const fetchReviewsByVehicleId = async (vehicleId: string) => {
  const response = await apiClient.get(`/vehicles/${vehicleId}/reviews`);
  return response.data;
};
