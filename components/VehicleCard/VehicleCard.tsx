import Icon from "../Icon/Icon";
import RatingInfo from "../RatingInfo/RatingInfo";
import styles from "./VehicleCard.module.css";

export default function VehicleCard() {
  return (
    <div className={styles["vehicle-card"]}>
      <div className={styles["vehicle-img"]}></div>
      <div className={styles["vehicle-info"]}>
        <div className={styles["vehicle-card-header-wrapper"]}>
          <div className={styles["vehicle-card-header"]}>
            <h3 className={styles["vehicle-title"]}>Vehicle Title</h3>
            <div className={styles["vehicle-card-header-right"]}>
              <p className={styles["vehicle-price"]}>$8000.00</p>
              <Icon
                src="/heart=Default.svg"
                width={24}
                height={24}
                alt="Favorite Icon"
              />
            </div>
          </div>
          <RatingInfo />
        </div>

        <p className={styles["vehicle-description"]}>
          This is a brief description of the vehicle.
        </p>

        <div className={styles["vehicle-tags-container"]}>
          <ul className={styles["vehicle-tags-list"]}>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/fuel-pump.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              Petrol
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/diagram.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              Automatic
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/cup-hot.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              Kitchen
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/wind.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              AC
            </li>
            <li className={styles["vehicle-tags-list-item"]}>
              <Icon
                src="/wind.svg"
                width={20}
                height={20}
                alt="Fuel-pump icon"
              />
              AC
            </li>
          </ul>
        </div>
        <button className={styles["btn-show-more"]}>Show more</button>
      </div>
    </div>
  );
}
