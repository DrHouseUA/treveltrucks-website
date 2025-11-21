"use client";

import Image from "next/image";
import styles from "./Searchinput.module.css";

interface Props {
  value: string;
  setValue: (newValue: string) => void;
}

export default function SearchInput({ value, setValue }: Props) {
  return (
    <div className={`${styles["input-group"]} ${value ? styles.filled : ""}`}>
      <label htmlFor="location" className={styles.inputlabel}>
        Location
      </label>
      <input
        type="text"
        name="location"
        className={styles["location-input"]}
        value={value}
        placeholder="City"
        onChange={(e) => setValue(e.target.value)}
      />
      <Image
        src={value ? "/map-black.svg" : "/map-grey.svg"}
        alt="MAP icon"
        width={20}
        height={20}
        className={styles["map-icon"]}
      />
    </div>
  );
}
