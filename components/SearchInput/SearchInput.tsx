"use client";

import Image from "next/image";
import styles from "./Searchinput.module.css";

import React, { useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState("");
  return (
    <div className={`${styles["input-group"]} ${value ? styles.filled : ""}`}>
      <label htmlFor="location" className={styles.inputlabel}>
        Location
      </label>
      <input
        type="text"
        name="location"
        className={styles["location-input"]}
        placeholder="City"
        onChange={(e) => setValue(e.target.value)}
      />
      <Image
        src="/map.svg"
        alt="Travel Trucks Logo"
        width={20}
        height={20}
        className={`${styles["map-icon"]} ${value ? styles.active : ""}`}
      />
    </div>
  );
}
