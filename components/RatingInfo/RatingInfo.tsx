import Icon from "@/components/Icon/Icon";
import styles from "./RatingInfo.module.css";

interface RatingInfoProps {
  rating: number;
  location: string;
  reviews: number;
}

export default function RatingInfo({
  rating,
  location,
  reviews,
}: RatingInfoProps) {
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
        <p className={styles["rating-text"]}>
          {rating}({reviews} Reviews)
        </p>
      </div>

      <div className={styles["vehicle-rating-right"]}>
        <Icon src="/map-black.svg" width={16} height={16} alt="Location icon" />
        {location}
      </div>
    </div>
  );
}
