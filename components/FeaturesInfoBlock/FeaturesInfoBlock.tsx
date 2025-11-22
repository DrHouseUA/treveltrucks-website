"use client";

import React from "react";
import styles from "./FeaturesInfoBlock.module.css";
import CategoriesList from "../CategoriesList/CategoriesList";
import { Vehicle } from "@/types/vehicle";

interface Props {
  vehicle: Vehicle;
}

export default function FeaturesInfoBlock({ vehicle }: Props) {
  return (
    <div className={styles["details-block"]}>
      <div className={styles["details-tags"]}>
        <CategoriesList vehicle={vehicle} />
      </div>
      <div>
        <h3 className={styles["vehicle-detail-title"]}>Vehicle details </h3>
        <hr className={styles["filter-lines"]} />
        <div className={styles["vehicle-details-content"]}>
          <ul className={styles["vehicle-details-list"]}>
            <li className={styles["vehicle-details-item"]}>
              {" "}
              <div>Form</div> <div>{vehicle.form}</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Length</div>
              <div>{vehicle.length}</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Width</div>
              <div>{vehicle.width}</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Height</div>
              <div>{vehicle.height}</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Tank</div>
              <div>{vehicle.tank}</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Consumption</div>
              <div>{vehicle.consumption}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
