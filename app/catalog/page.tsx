"use client";

import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./CatalogPage.module.css";
import VehicleEquipmentList from "@/components/VehicleEquipmentList/VehicleEquipmentList";
import VehicleTypeList from "@/components/VehicleTypeList/VehicleTypeList";
import VehicleList from "@/components/VhehicleList/VehicleList";
import { useEffect, useState } from "react";
import { fetchVehicles } from "@/lib/api/api";
import { useFilterConfigStore } from "@/lib/store/useFilterConfigStore";
import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "@/types/vehicle";
import { NxCirclesLoader } from "@ngeenx/nx-react-svg-loaders";

export default function CatalogPage() {
  const { toogleFilter, toogleTransmission, setForm, clearFilters } =
    useFilterConfigStore();
  const AC = useFilterConfigStore((state) => state.AC);
  const TV = useFilterConfigStore((state) => state.TV);
  const kitchen = useFilterConfigStore((state) => state.kitchen);
  const transmission = useFilterConfigStore((state) => state.transmission);
  const bathroom = useFilterConfigStore((state) => state.bathroom);
  const form = useFilterConfigStore((state) => state.form);

  const [value, setValue] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [page, setPage] = useState(1);
  const limit = 4;

  // --- committedParams: використовуються тільки коли натиснули Search ---
  const [committedParams, setCommittedParams] = useState<{
    search: string;
    form: string | null;
    queryString: string;
    page: number;
  } | null>(null);

  // --- helper: збирає дані в структуру для запиту ---
  function buildRequestPayload(localValue?: string) {
    const equipmentsState = { AC, TV, kitchen, transmission, bathroom };

    const jsonPayload = {
      location: localValue ?? value,
      vehicleType: form,
      equipments: Object.fromEntries(
        Object.entries(equipmentsState).filter(([, val]) => val)
      ),
    };

    const params = new URLSearchParams();
    const v = (localValue ?? value)?.trim();
    if (v) params.set("location", v);
    if (form) params.set("filter", form);

    Object.entries(equipmentsState).forEach(([key, val]) => {
      if (val) params.set(key, String(val));
    });

    return { jsonPayload, queryString: params.toString() };
  }

  const queryKey = committedParams
    ? [
        "vehicles",
        committedParams.search,
        committedParams.form,
        committedParams.queryString,
        committedParams.page,
      ]
    : ["vehicles", "idle"];

  useEffect(() => {
    // commit initial search on first mount so query runs once with current filters
    const { queryString } = buildRequestPayload();
    setCommittedParams({
      search: value.trim(),
      form: form ?? null,
      queryString,
      page: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: () =>
      // якщо committedParams == null, повертаємо пустий результат або не виконуй запит
      committedParams
        ? fetchVehicles(
            {
              page: committedParams.page,
              limit,
              search: committedParams.search,
            },
            { queryString: committedParams.queryString }
          )
        : Promise.resolve({ items: [], total: 0 }),
    enabled: committedParams !== null,
    refetchOnMount: true,
    keepPreviousData: true,
  });

  const total = data?.total ?? 0;
  const totalPage = Math.ceil(total / limit);

  useEffect(() => {
    const items = data?.items ?? [];
    // при Load More ми додаємо, при новому пошуку перезаписуємо (committedParams.page === 1)
    if (committedParams && committedParams.page > 1) {
      setVehicles((prev) => [...prev, ...items]);
    } else {
      setVehicles(items);
    }
  }, [data, committedParams]);

  function handleSearchGet() {
    const { queryString } = buildRequestPayload(value);
    setPage(1);
    setVehicles([]);
    setCommittedParams({
      search: value.trim(),
      form: form ?? null,
      queryString,
      page: 1,
    });
    clearFilters();
    setValue("");
  }

  function handleLoadMore() {
    const next = page + 1;
    setPage(next);

    if (committedParams) {
      setCommittedParams({ ...committedParams, page: next });
    }
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
          {isLoading && (
            <div className={styles["loading-wrapper"]}>
              <NxCirclesLoader
                isLoading={isLoading}
                size={250}
                isCentered={true}
                style={{ color: "orange" }}
              />
            </div>
          )}

          {isError && <p>Something whent wrong</p>}
          <div>
            {!data?.items && (
              <p className={styles["pattern-text"]}>
                Please choose filters and press &quot;Search&quot; button
              </p>
            )}
            {data?.items && <VehicleList vehicles={vehicles} />}
          </div>

          {totalPage > page && (
            <button
              className={styles["btn-load-more"]}
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
