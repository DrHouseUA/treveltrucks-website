"use client";

import { Vehicle } from "@/types/vehicle";
import VehicleCard from "../VehicleCard/VehicleCard";
import styles from "./VehicleList.module.css";

interface VhehicleProps {
  vehicles: Vehicle[];
}

export default function VehicleList({ vehicles }: VhehicleProps) {
  return (
    <div className={styles["vehicle-list-block"]}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
