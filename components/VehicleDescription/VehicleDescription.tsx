"use client";

import React, { useEffect, useState } from "react";
import RatingInfo from "../RatingInfo/RatingInfo";
import styles from "./VehicleDescription.module.css";
import { fetchVehicleById } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "@/types/vehicle";
import Image from "next/image";

interface Props {
  id: string;
}

export default function VehicleDescription({ id }: Props) {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["vehicle"],
    queryFn: async () => await fetchVehicleById(id),
    refetchOnMount: false,
  });
  useEffect(() => {
    refetch();
    setVehicle(data as Vehicle);
  }, [data, refetch]);

  return (
    <div className={styles["main-content"]}>
      <div className={styles["vehicle-detail-header-wrapper"]}>
        <h2 className={styles["vehicle-card-title"]}>{vehicle?.name}</h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Someting whent wrong...</p>}
        {vehicle && (
          <RatingInfo
            rating={vehicle.rating}
            location={vehicle.location}
            reviews={vehicle.reviews.length}
          />
        )}
        <p className={styles["vehicle-price"]}>€{vehicle?.price}.00</p>
      </div>
      <div>
        <ul className={styles["gallery-list"]}>
          {vehicle &&
            vehicle.gallery.map((picture, idx) => (
              <li key={idx} className={styles["gallery-item"]}>
                <Image
                  className={styles["vehicle-img"]}
                  src={picture.thumb}
                  width={292}
                  height={320}
                  alt={vehicle.name}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className={styles["vehicle-description"]}>
        {vehicle?.description}
      </div>
    </div>
  );
}
