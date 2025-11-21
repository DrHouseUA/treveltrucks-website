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
  const { data, isLoading, isError } = useQuery({
    queryKey: ["vehicle"],
    queryFn: () => fetchVehicleById(id),
    refetchOnMount: false,
  });
  useEffect(() => {
    setVehicle(data as Vehicle);
  }, [data]);

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
        <ul className={styles["gallety-list"]}>
          {vehicle && vehicle.gallery.map(
            (picture) => {return <><li className={styles["gallety-item"]}>
    {/* //     <Image
    //     className={styles["vehicle-img"]}
    //     src={vehicle.gallery[0].thumb}
    //     width={292}
    //     height={320}
    //     alt={vehicle.name}
    //   ></Image> */}
          </li>          </>
          }
          <li>
            <div className={styles["gallety-item"]}></div>
          </li>
          <li>
            <div className={styles["gallety-item"]}></div>
          </li>
          <li>
            <div className={styles["gallety-item"]}></div>
          </li>
          <li>
            <div className={styles["gallety-item"]}></div>
          </li>
        </ul>
      </div>
      <div className={styles["vehicle-description"]}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </div>
    </div>
  );
}
