import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./page.module.css";

export default function CataloguePage() {
  return (
    <div className={styles.page}>
      <main className={styles["main-container"]}>
        <div className="search-config-block">
          <SearchInput />
          <div className={styles["filters-container"]}>
            <p className={styles["filters-group-title"]}>Filters</p>
            <div>
              <h2 className={styles["filter-title"]}>Vehicle equipment</h2>
              <hr className={styles["filter-lines"]} />
              <div className={styles["equipments-block"]}>
                <ul className={styles["option-list"]}>
                  <li>
                    <div className={styles["option-item"]}>AC</div>
                  </li>
                  <li>
                    <div className={styles["option-item"]}>Automatic</div>
                  </li>
                  <li>
                    <div className={styles["option-item"]}>Kitchen</div>
                  </li>
                  <li>
                    <div className={styles["option-item"]}>TV</div>
                  </li>
                  <li>
                    <div className={styles["option-item"]}>Bathroom</div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className={styles["filter-title"]}>Vehicle type</h2>
              <hr className={styles["filter-lines"]} />
              <div className={styles["vehicle-block"]}>
                <ul className={styles["option-list"]}>
                  <li>
                    <div className={styles["option-item"]}>Van</div>
                  </li>
                  <li>
                    <div className={styles["option-item"]}>
                      Fully Integrated
                    </div>
                  </li>
                  <li>
                    <div className={styles["option-item"]}>Alcove</div>
                  </li>
                </ul>
              </div>
              <button className={styles["btn-search"]}>Search</button>
            </div>
          </div>
        </div>

        <div className={styles["vehicle-list-block"]}></div>
      </main>
    </div>
  );
}
