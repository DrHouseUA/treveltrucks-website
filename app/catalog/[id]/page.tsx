import RatingInfo from "@/components/RatingInfo/RatingInfo";
import styles from "./DetailPage.module.css";
import Icon from "@/components/Icon/Icon";
import SubmitForm from "@/components/SubmitForm/SubmitForm";

export default function DetailPage() {
  return (
    <main className={styles["main-container"]}>
      <div className={styles["main-content"]}>
        <div className={styles["vehicle-detail-header-wrapper"]}>
          <h2 className={styles["vehicle-card-title"]}>Mavericks</h2>
          <RatingInfo />
          <p className={styles["vehicle-price"]}>$8000</p>
        </div>
        <div>
          <ul className={styles["gallety-list"]}>
            <li>
              <div className={styles["gallety-item"]}></div>
            </li>
            <li>
              <div className={styles["gallety-item"]}></div>
            </li>
            <li>
              <div className={styles["gallety-item"]}></div>
            </li>
            <li>
              <div className={styles["gallety-item"]}></div>
            </li>
          </ul>
        </div>
        <div className={styles["vehicle-description"]}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </div>
      </div>
      <div>
        <div className={styles["tabs-container"]}>
          <div className={styles["active-tab"]}>Features</div>{" "}
          <div> Reviews</div>
        </div>
        <hr className={styles["filter-lines"]} />
      </div>
      <div className={styles["tabs-content"]}>
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
                <Icon
                  src="/wind.svg"
                  width={20}
                  height={20}
                  alt="Fuel-pump icon"
                />
                AC
              </li>
              <li className={styles["details-tags-list-item"]}>
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
        <SubmitForm />
      </div>
    </main>
  );
}
