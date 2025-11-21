import React from "react";
import Icon from "../Icon/Icon";
import styles from "./VehicleEquipmentList.module.css";

export type EquipmentKey = "AC" | "kitchen" | "TV" | "bathroom";

export type SelectedEquipmentMap = Record<EquipmentKey, boolean>;

interface VehicleEquipmentListProps {
  selected: SelectedEquipmentMap;
  transmission: "automatic" | "";
  toggle: (k: EquipmentKey) => void;
  toogleTransmission: (key: "automatic" | "") => void;
}

export default function VehicleEquipmentList({
  selected,
  toggle,
  toogleTransmission,
  transmission,
}: VehicleEquipmentListProps) {
  return (
    <div>
      <h2 className={styles["filter-title"]}>Vehicle type</h2>
      <hr className={styles["filter-lines"]} />
      <div className={styles["equipments-block"]}>
        <ul className={styles["option-list"]}>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggle("AC")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggle("AC");
              }}
              className={`${styles["option-item"]} ${
                selected.AC ? styles.selected : ""
              }`}
              aria-pressed={selected.AC}
            >
              <Icon src="/wind.svg" width={32} height={32} />
              AC
            </div>
          </li>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                if (transmission !== "") {
                  toogleTransmission("");
                } else {
                  toogleTransmission("automatic");
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  toogleTransmission("automatic");
              }}
              className={`${styles["option-item"]} ${
                transmission === "automatic" ? styles.selected : ""
              }`}
              aria-pressed={transmission === "automatic" ? true : false}
            >
              <Icon src="/diagram.svg" width={32} height={32} />
              Automatic
            </div>
          </li>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggle("kitchen")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggle("kitchen");
              }}
              className={`${styles["option-item"]} ${
                selected.kitchen ? styles.selected : ""
              }`}
              aria-pressed={selected.kitchen}
            >
              <Icon src="/cup-hot.svg" width={32} height={32} />
              Kitchen
            </div>
          </li>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggle("TV")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggle("TV");
              }}
              className={`${styles["option-item"]} ${
                selected.TV ? styles.selected : ""
              }`}
              aria-pressed={selected.TV}
            >
              <Icon src="/tv.svg" width={32} height={32} />
              TV
            </div>
          </li>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggle("bathroom")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggle("bathroom");
              }}
              className={`${styles["option-item"]} ${
                selected.bathroom ? styles.selected : ""
              }`}
              aria-pressed={selected.bathroom}
            >
              <Icon src="/ph_shower.svg" width={32} height={32} />
              Bathroom
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
