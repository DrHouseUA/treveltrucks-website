"use client";

import React, { useState } from "react";
import FeaturesInfoBlock from "../FeaturesInfoBlock/FeaturesInfoBlock";
import ReviewsInfoBlock from "../ReviewsInfoBlock/ReviewsInfoBlock";
import SubmitForm from "../SubmitForm/SubmitForm";
import styles from "./TabsInDetails.module.css";

export default function TabsInDetails() {
  const [featuresTab, setFeaturesTab] = useState(true);
  const [reviewsTab, setReviewsTab] = useState(false);

  return (
    <>
      {" "}
      <div>
        <div className={styles["tabs-container"]}>
          <div
            className={`${styles["tab"]} ${
              featuresTab ? styles["active-tab"] : ""
            }`}
            onClick={() => {
              setFeaturesTab(true);
              setReviewsTab(false);
            }}
          >
            Features
          </div>
          <div
            className={`${styles["tab"]} ${
              reviewsTab ? styles["active-tab"] : ""
            }`}
            onClick={() => {
              setReviewsTab(true);
              setFeaturesTab(false);
            }}
          >
            Reviews
          </div>
        </div>
        <hr className={styles["filter-lines"]} />
      </div>
      <div className={styles["tabs-content"]}>
        {featuresTab && <FeaturesInfoBlock />}
        {reviewsTab && <ReviewsInfoBlock />}
        <SubmitForm />
      </div>
    </>
  );
}
