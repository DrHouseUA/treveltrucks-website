import { NxCirclesLoader } from "@ngeenx/nx-react-svg-loaders";

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles["loading-wrapper"]}>
      <NxCirclesLoader
        isLoading={true}
        size={250}
        isCentered={true}
        style={{ color: "orange" }}
      />
    </div>
  );
}
