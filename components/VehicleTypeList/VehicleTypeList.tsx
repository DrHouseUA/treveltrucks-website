import React from "react";
import Icon from "../Icon/Icon";
import styles from "./VehicleTypeList.module.css";

export type VehicleTypeKey = "panelTruck" | "fullyIntegrated" | "alcove" | null;

interface Props {
  selectedType: VehicleTypeKey | null;
  onSelectType: (t: VehicleTypeKey) => void;
}

export default function VehicleTypeList({ selectedType, onSelectType }: Props) {
  return (
    <div>
      <h2 className={styles["filter-title"]}>Vehicle type</h2>
      <hr className={styles["filter-lines"]} />
      <div className={styles["vehicle-block"]}>
        <ul className={styles["option-list"]}>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => onSelectType("panelTruck")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  onSelectType("panelTruck");
              }}
              className={`${styles["option-item"]} ${
                selectedType === "panelTruck" ? styles.selected : ""
              }`}
              aria-pressed={selectedType === "panelTruck"}
            >
              <Icon src="/bi_grid-1x2.svg" width={32} height={32} />
              Van
            </div>
          </li>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => onSelectType("fullyIntegrated")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  onSelectType("fullyIntegrated");
              }}
              className={`${styles["option-item"]} ${
                selectedType === "fullyIntegrated" ? styles.selected : ""
              }`}
              style={{ padding: "4px" }}
              aria-pressed={selectedType === "fullyIntegrated"}
            >
              <Icon src="/bi_grid.svg" width={32} height={32} />
              Fully Integrated
            </div>
          </li>
          <li>
            <div
              role="button"
              tabIndex={0}
              onClick={() => onSelectType("alcove")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelectType("alcove");
              }}
              className={`${styles["option-item"]} ${
                selectedType === "alcove" ? styles.selected : ""
              }`}
              aria-pressed={selectedType === "alcove"}
            >
              <Icon src="/bi_grid-3x3-gap.svg" width={32} height={32} />
              Alcove
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
