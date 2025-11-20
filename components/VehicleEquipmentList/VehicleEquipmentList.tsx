import Icon from "../Icon/Icon";
import styles from "./VehicleEquipmentList.module.css";

export default function VehicleEquipmentList() {
  return (
    <div>
      <h2 className={styles["filter-title"]}>Vehicle type</h2>
      <hr className={styles["filter-lines"]} />
      <div className={styles["equipments-block"]}>
        <ul className={styles["option-list"]}>
          <li>
            <div className={styles["option-item"]}>
              <Icon src="/wind.svg" width={32} height={32} />
              AC
            </div>
          </li>
          <li>
            <div className={styles["option-item"]}>
              <Icon src="/diagram.svg" width={32} height={32} />
              Automatic
            </div>
          </li>
          <li>
            <div className={styles["option-item"]}>
              <Icon src="/cup-hot.svg" width={32} height={32} />
              Kitchen
            </div>
          </li>
          <li>
            <div className={styles["option-item"]}>
              <Icon src="/tv.svg" width={32} height={32} />
              TV
            </div>
          </li>
          <li>
            <div className={styles["option-item"]}>
              <Icon src="/ph_shower.svg" width={32} height={32} />
              Bathroom
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
