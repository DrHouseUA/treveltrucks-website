"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles["hero-section"]}>
          <div className={styles["hero-title-wrapper"]}>
            <div className={styles["hero-title-content"]}>
              <h1 className={styles.title}>Campers of your dreams</h1>
              <p className={styles.subtitle}>
                You can find everything you want in our catalog
              </p>
            </div>
            <button
              className={styles["btn-view-now"]}
              onClick={() => {
                router.push("/catalogue");
              }}
            >
              View Now
            </button>
            <Link href="/catalogue" className={styles.link}>
              Go to Catalogue Page
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
