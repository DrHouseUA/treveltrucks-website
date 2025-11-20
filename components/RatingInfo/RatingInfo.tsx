import Icon from "@/components/Icon/Icon";
import styles from "./RatingInfo.module.css";

export default function RatingInfo() {
  return (
    <div className={styles["vehicle-rating"]}>
      <div className={styles["vehicle-rating-left"]}>
        {" "}
        <Icon
          src="/star=Pressed.svg"
          width={16}
          height={16}
          alt="Rating icon"
        />
        4.4(2 Reviews)
      </div>

      <div className={styles["vehicle-rating-right"]}>
        <Icon src="/map.svg" width={16} height={16} alt="Location icon" />
        Kyiv, Ukraine
      </div>
    </div>
  );
}
