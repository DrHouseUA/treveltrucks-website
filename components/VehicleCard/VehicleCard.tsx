"use client";

import { Vehicle } from "@/types/vehicle";
import Icon from "../Icon/Icon";
import RatingInfo from "../RatingInfo/RatingInfo";
import styles from "./VehicleCard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface VehicleCardProps {
  vehicle: Vehicle;
}

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

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const router = useRouter();
  return (
    <div className={styles["vehicle-card"]}>
      <Image
        className={styles["vehicle-img"]}
        src={vehicle.gallery[0].thumb}
        width={292}
        height={320}
        alt={vehicle.name}
      ></Image>

      <div className={styles["vehicle-info"]}>
        <div className={styles["vehicle-card-header-wrapper"]}>
          <div className={styles["vehicle-card-header"]}>
            <h3 className={styles["vehicle-title"]}>
              {vehicle.name.length <= 25
                ? vehicle.name
                : vehicle.name.slice(0, 25) + "..."}
            </h3>
            <div className={styles["vehicle-card-header-right"]}>
              <p className={styles["vehicle-price"]}>€{vehicle.price}.00</p>
              <Icon
                src="/heart=Default.svg"
                width={24}
                height={24}
                alt="Favorite Icon"
              />
            </div>
          </div>
          <RatingInfo
            rating={vehicle.rating}
            location={vehicle.location}
            reviews={vehicle.reviews.length}
          />
        </div>

        <p className={styles["vehicle-description"]}>
          {vehicle.description.length <= 50
            ? vehicle.description
            : vehicle.description.slice(0, 60) + "..."}
        </p>

        <div className={styles["vehicle-tags-container"]}>
          <ul className={styles["vehicle-tags-list"]}>
            {Object.entries(featureIcons).map(([key, { src, label }]) =>
              vehicle[key as keyof Vehicle] ? (
                <li key={key} className={styles["vehicle-tags-list-item"]}>
                  <Icon
                    src={src}
                    width={20}
                    height={20}
                    alt={`${label} icon`}
                  />
                  {label}
                </li>
              ) : null
            )}

            {/* <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/fuel-pump.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              Petrol
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/diagram.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              Automatic
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/cup-hot.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              Kitchen
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/wind.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              AC
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/wind.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              AC
            </li> */}
          </ul>
        </div>
        <button
          className={styles["btn-show-more"]}
          onClick={() => router.push(`/catalog/${vehicle.id}`)}
        >
          Show more
        </button>
      </div>
    </div>
  );
}
