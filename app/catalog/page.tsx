"use client";

import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./CatalogPage.module.css";
import VehicleEquipmentList from "@/components/VehicleEquipmentList/VehicleEquipmentList";
import VehicleTypeList from "@/components/VehicleTypeList/VehicleTypeList";
import VehicleList from "@/components/VhehicleList/VehicleList";
import { useEffect, useState } from "react";
import { fetchVehicles } from "@/lib/api/api";
import { useFilterConfigStore } from "@/lib/store/useFilterConfigStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Vehicle } from "@/types/vehicle";

export default function CatalogPage() {
  const {
    AC,
    TV,
    kitchen,
    transmission,
    bathroom,
    form,
    toogleFilter,
    toogleTransmission,
    setForm,
    clearFilters,
  } = useFilterConfigStore();

  const [value, setValue] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [page, setPage] = useState(1);
  const limit = 4;
  // --- helper: збирає дані в структуру для запиту ---
  function buildRequestPayload() {
    const equipmentsState = { AC, TV, kitchen, transmission, bathroom };

    const jsonPayload = {
      location: value,
      vehicleType: form,
      // сюди кладемо лише ті ключі, що true
      equipments: Object.fromEntries(
        Object.entries(equipmentsState).filter(([, val]) => val)
      ),
    };

    const params = new URLSearchParams();
    if (value && value.trim()) params.set("location", value.trim());
    if (form) params.set("filter", form);

    // додаємо тільки ті ключі, що true, у форматі key=value
    Object.entries(equipmentsState).forEach(([key, val]) => {
      if (val) params.set(key, String(val));
    });

    return { jsonPayload, queryString: params.toString() };
  }

  const { queryString } = buildRequestPayload();
  console.log(queryString);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["vehicles", value, form, queryString, page],
    queryFn: () =>
      fetchVehicles({ page, limit, search: value }, { queryString }),
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });

  const total = data?.total ?? 0;
  const totalPage = Math.ceil(total / limit);
  useEffect(() => {
    const items = data?.items ?? [];
    setVehicles(items);
  }, [data]);

  console.log(totalPage);
  console.log(page);
  // --- обробник кнопки ---
  function handleSearchGet() {
    setPage(1);
    setVehicles([]);
    clearFilters();
  }

  return (
    <div className={styles.page}>
      <main className={styles["main-container"]}>
        <div className={styles["search-config-block"]}>
          <SearchInput value={value} setValue={setValue} />
          <div className={styles["filters-container"]}>
            <p className={styles["filters-group-title"]}>Filters</p>
            <VehicleEquipmentList
              selected={{ AC, TV, bathroom, kitchen }}
              transmission={transmission}
              toggle={toogleFilter}
              toogleTransmission={toogleTransmission}
            />
            <VehicleTypeList selectedType={form} onSelectType={setForm} />
          </div>
          <button className={styles["btn-search"]} onClick={handleSearchGet}>
            Search
          </button>
        </div>
        <div className={styles["list-container"]}>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Something whent wrong</p>}
          <div>{data?.items && <VehicleList vehicles={vehicles} />}</div>

          {totalPage > page && (
            <button
              className={styles["btn-load-more"]}
              onClick={() => setPage(page + 1)}
            >
              Load More
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
