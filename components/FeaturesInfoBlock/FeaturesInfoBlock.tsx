import React from "react";
import Icon from "../Icon/Icon";
import styles from "./FeaturesInfoBlock.module.css";

export default function FeaturesInfoBlock() {
  return (
    <div className={styles["details-block"]}>
      <div className={styles["details-tags"]}>
        <ul className={styles["details-tags-list"]}>
          <li className={styles["details-tags-list-item"]}>
            <Icon
              src="/fuel-pump.svg"
              width={20}
              height={20}
              alt="Fuel-pump icon"
            />
            Petrol
          </li>
          <li className={styles["details-tags-list-item"]}>
            <Icon
              src="/diagram.svg"
              width={20}
              height={20}
              alt="Fuel-pump icon"
            />
            Automatic
          </li>
          <li className={styles["details-tags-list-item"]}>
            <Icon
              src="/cup-hot.svg"
              width={20}
              height={20}
              alt="Fuel-pump icon"
            />
            Kitchen
          </li>
          <li className={styles["details-tags-list-item"]}>
            <Icon src="/wind.svg" width={20} height={20} alt="Fuel-pump icon" />
            AC
          </li>
          <li className={styles["details-tags-list-item"]}>
            <Icon src="/wind.svg" width={20} height={20} alt="Fuel-pump icon" />
            AC
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles["vehicle-detail-title"]}>Vehicle details </h3>
        <hr className={styles["filter-lines"]} />
        <div className={styles["vehicle-details-content"]}>
          <ul className={styles["vehicle-details-list"]}>
            <li className={styles["vehicle-details-item"]}>
              {" "}
              <div>Form</div> <div>1</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Length</div>
              <div>1</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Width</div>
              <div>1</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Height</div>
              <div>1</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Tank</div>
              <div>1</div>
            </li>
            <li className={styles["vehicle-details-item"]}>
              <div>Consumption</div>
              <div>1</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
