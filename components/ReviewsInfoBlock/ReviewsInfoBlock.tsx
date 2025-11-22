import { Vehicle } from "@/types/vehicle";
import Icon from "../Icon/Icon";
import styles from "./ReviewsInfoBlock.module.css";

interface Props {
  vehicle: Vehicle;
}

export default function ReviewsInfoBlock({ vehicle }: Props) {
  return (
    <div className={styles["reviews-block"]}>
      <ul className={styles["reviews-list"]}>
        {vehicle &&
          vehicle.reviews.map((review, idx) => (
            <li key={idx} className={styles["review-item"]}>
              <div className={styles["review-header"]}>
                <div className={styles["reviews-avatar"]}>
                  {review.reviewer_name.slice(0, 1).toUpperCase()}
                </div>
                <div className={styles["review-details"]}>
                  <div className={styles["review-author"]}>
                    {review.reviewer_name}
                  </div>
                  <div className={styles["review-rating"]}>
                    <ul className={styles["rating-stars-list"]}>
                      <li>
                        <Icon
                          src={
                            review.reviewer_rating >= 1
                              ? "/star=Pressed.svg"
                              : "/star=Default.svg"
                          }
                          width={16}
                          height={16}
                          alt="Rating Stars"
                        />
                      </li>
                      <li>
                        <Icon
                          src={
                            review.reviewer_rating >= 2
                              ? "/star=Pressed.svg"
                              : "/star=Default.svg"
                          }
                          width={16}
                          height={16}
                          alt="Rating Stars"
                        />
                      </li>
                      <li>
                        <Icon
                          src={
                            review.reviewer_rating >= 3
                              ? "/star=Pressed.svg"
                              : "/star=Default.svg"
                          }
                          width={16}
                          height={16}
                          alt="Rating Stars"
                        />
                      </li>
                      <li>
                        <Icon
                          src={
                            review.reviewer_rating >= 4
                              ? "/star=Pressed.svg"
                              : "/star=Default.svg"
                          }
                          width={16}
                          height={16}
                          alt="Rating Stars"
                        />
                      </li>
                      <li>
                        <Icon
                          src={
                            review.reviewer_rating >= 5
                              ? "/star=Pressed.svg"
                              : "/star=Default.svg"
                          }
                          width={16}
                          height={16}
                          alt="Rating Stars"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles["review-content"]}>{review.comment}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}
