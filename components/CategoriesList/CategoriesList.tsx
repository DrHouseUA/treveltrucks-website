import { Vehicle } from "@/types/vehicle";
import React from "react";
import styles from "./CategoriesList.module.css";
import Icon from "../Icon/Icon";

// Мапа відповідностей: ключ = назва булевої властивості
const featureIcons: Partial<
  Record<keyof Vehicle, { src: string; label: string }>
> = {
  engine: { src: "/fuel-pump.svg", label: "Petrol" },
  transmission: { src: "/diagram.svg", label: "Automatic" },
  kitchen: { src: "/cup-hot.svg", label: "Kitchen" },
  AC: { src: "/wind.svg", label: "AC" },
  bathroom: { src: "/ph_shower.svg", label: "Bathroom" },
  TV: { src: "/tv.svg", label: "TV" },
  radio: { src: "/radio.svg", label: "Radio" },
  refrigerator: { src: "/refrigerator.svg", label: "Refrigerator" },
  microwave: { src: "/microwave.svg", label: "Microwave" },
  gas: { src: "/gas-stove.svg", label: "Gas" },
  water: { src: "/water.svg", label: "Water" },
};

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function CategoriesList({ vehicle }: VehicleCardProps) {
  return (
    <ul className={styles["vehicle-tags-list"]}>
      {Object.entries(featureIcons).map(([key, { src, label }]) =>
        vehicle[key as keyof Vehicle] ? (
          <li key={key} className={styles["vehicle-tags-list-item"]}>
            <Icon src={src} width={20} height={20} alt={`${label} icon`} />
            {label}
          </li>
        ) : null
      )}
    </ul>
  );
}
