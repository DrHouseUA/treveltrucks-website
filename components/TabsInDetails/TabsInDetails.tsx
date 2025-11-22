"use client";

import React, { useEffect, useState } from "react";
import FeaturesInfoBlock from "../FeaturesInfoBlock/FeaturesInfoBlock";
import ReviewsInfoBlock from "../ReviewsInfoBlock/ReviewsInfoBlock";
import SubmitForm from "../SubmitForm/SubmitForm";
import styles from "./TabsInDetails.module.css";
import { Vehicle } from "@/types/vehicle";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicleById } from "@/lib/api/api";

interface Props {
  id: string;
}

export default function TabsInDetails({ id }: Props) {
  const [featuresTab, setFeaturesTab] = useState(true);
  const [reviewsTab, setReviewsTab] = useState(false);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["vehicle"],
    queryFn: () => fetchVehicleById(id),
    refetchOnMount: false,
  });
  useEffect(() => {
    refetch();
    setVehicle(data as Vehicle);
  }, [data, refetch]);

  console.log(data);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Someting whent wrong...</p>}
      <div>
        <div className={styles["tabs-container"]}>
          <div
            className={`${styles["tab"]} ${
              featuresTab ? styles["active-tab"] : ""
            }`}
            onClick={() => {
              setFeaturesTab(true);
              setReviewsTab(false);
            }}
          >
            Features
          </div>
          <div
            className={`${styles["tab"]} ${
              reviewsTab ? styles["active-tab"] : ""
            }`}
            onClick={() => {
              setReviewsTab(true);
              setFeaturesTab(false);
            }}
          >
            Reviews
          </div>
        </div>
        <hr className={styles["filter-lines"]} />
      </div>
      <div className={styles["tabs-content"]}>
        {!isLoading && featuresTab && vehicle && (
          <FeaturesInfoBlock vehicle={vehicle} />
        )}
        {!isLoading && reviewsTab && vehicle && (
          <ReviewsInfoBlock vehicle={vehicle} />
        )}
        <SubmitForm />
      </div>
    </>
  );
}
