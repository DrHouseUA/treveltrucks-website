import Icon from "../Icon/Icon";
import styles from "./VehicleTypeList.module.css";

export default function VehicleTypeList() {
  return (
    <div>
      <h2 className={styles["filter-title"]}>Vehicle type</h2>
      <hr className={styles["filter-lines"]} />
      <div className={styles["vehicle-block"]}>
        <ul className={styles["option-list"]}>
          <li>
            <div className={styles["option-item"]}>
              <Icon src="/bi_grid-1x2.svg" width={32} height={32} />
              Van
            </div>
          </li>
          <li>
            <div className={styles["option-item"]} style={{ padding: "4px" }}>
              <Icon src="/bi_grid.svg" width={32} height={32} />
              Fully Integrated
            </div>
          </li>
          <li>
            <div className={styles["option-item"]}>
              <Icon src="/bi_grid-3x3-gap.svg" width={32} height={32} />
              Alcove
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
