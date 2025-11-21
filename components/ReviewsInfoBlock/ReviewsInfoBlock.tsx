import Icon from "../Icon/Icon";
import styles from "./ReviewsInfoBlock.module.css";

export default function ReviewsInfoBlock() {
  return (
    <div className={styles["reviews-block"]}>
      <ul className={styles["reviews-list"]}>
        <li className={styles["review-item"]}>
          <div className={styles["review-header"]}>
            <div className={styles["reviews-avatar"]}>
              <Icon
                src="/favicon.svg"
                width={20}
                height={32}
                alt="User Avatar"
              ></Icon>
            </div>
            <div className={styles["review-details"]}>
              <div className={styles["review-author"]}>John Doe</div>
              <div className={styles["review-rating"]}>
                <ul className={styles["rating-stars-list"]}>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["review-content"]}>
            The Mavericks panel truck was a perfect choice for my solo road
            trip. Compact, easy to drive, and had all the essentials. The
            kitchen facilities were sufficient, and the overall experience was
            fantastic.
          </div>
        </li>
        <li className={styles["review-item"]}>
          <div className={styles["review-header"]}>
            <div className={styles["reviews-avatar"]}>
              <Icon
                src="/favicon.svg"
                width={20}
                height={32}
                alt="User Avatar"
              ></Icon>
            </div>
            <div className={styles["review-details"]}>
              <div className={styles["review-author"]}>John Doe</div>
              <div className={styles["review-rating"]}>
                <ul className={styles["rating-stars-list"]}>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["review-content"]}>
            The Mavericks panel truck was a perfect choice for my solo road
            trip. Compact, easy to drive, and had all the essentials. The
            kitchen facilities were sufficient, and the overall experience was
            fantastic.
          </div>
        </li>
        <li className={styles["review-item"]}>
          <div className={styles["review-header"]}>
            <div className={styles["reviews-avatar"]}>
              <Icon
                src="/favicon.svg"
                width={20}
                height={32}
                alt="User Avatar"
              ></Icon>
            </div>
            <div className={styles["review-details"]}>
              <div className={styles["review-author"]}>John Doe</div>
              <div className={styles["review-rating"]}>
                <ul className={styles["rating-stars-list"]}>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                  <li>
                    <Icon
                      src="/star=Pressed.svg"
                      width={16}
                      height={16}
                      alt="Rating Stars"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["review-content"]}>
            The Mavericks panel truck was a perfect choice for my solo road
            trip. Compact, easy to drive, and had all the essentials. The
            kitchen facilities were sufficient, and the overall experience was
            fantastic.
          </div>
        </li>
      </ul>
    </div>
  );
}
