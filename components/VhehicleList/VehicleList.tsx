"use client";

import VehicleCard from "../VehicleCard/VehicleCard";
import styles from "./VehicleList.module.css";

export default function VehicleList() {
  return (
    <div className={styles["vehicle-list-block"]}>
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
    </div>
  );
}
