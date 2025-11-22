"use client";

import { Vehicle } from "@/types/vehicle";
import Icon from "../Icon/Icon";
import RatingInfo from "../RatingInfo/RatingInfo";
import styles from "./VehicleCard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useState } from "react";
import { useFavoritesIdsStore } from "@/lib/store/useFavoriteIdsStore";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const favoritesIds = useFavoritesIdsStore((state) => state.favoritesIds);
  const { setFavorite, unSetFavorite } = useFavoritesIdsStore();
  const [isFavorite, setIsFavorite] = useState(() =>
    favoritesIds.includes(vehicle.id)
  );

  const handleFavorite = () => {
    if (favoritesIds.includes(vehicle.id)) {
      setIsFavorite(false);
      unSetFavorite(vehicle.id);
    } else {
      setIsFavorite(true);
      setFavorite(vehicle.id);
    }
  };

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
              <div
                className={styles["vehicle-favorite-icon-wrapper"]}
                onClick={handleFavorite}
              >
                <Icon
                  src={isFavorite ? "/heart=Pressed.svg" : "/heart=Default.svg"}
                  width={24}
                  height={24}
                  alt="Favorite Icon"
                />
              </div>
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
          <CategoriesList vehicle={vehicle} />
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
