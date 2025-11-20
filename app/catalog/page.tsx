import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./CatalogPage.module.css";
import VehicleEquipmentList from "@/components/VehicleEquipmentList/VehicleEquipmentList";
import VehicleTypeList from "@/components/VehicleTypeList/VehicleTypeList";
import VehicleList from "@/components/VhehicleList/VehicleList";

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <main className={styles["main-container"]}>
        <div className={styles["search-config-block"]}>
          <SearchInput />
          <div className={styles["filters-container"]}>
            <p className={styles["filters-group-title"]}>Filters</p>
            <VehicleEquipmentList />
            <VehicleTypeList />
          </div>
          <button className={styles["btn-search"]}>Search</button>
        </div>
        <div className={styles["list-container"]}>
          <VehicleList />
          <button className={styles["btn-load-more"]}>Load More</button>
        </div>
      </main>
    </div>
  );
}
