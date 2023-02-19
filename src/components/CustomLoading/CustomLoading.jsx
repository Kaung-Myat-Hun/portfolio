import React from "react";
import styles from "./CustomLoading.module.css";

function CustomLoading() {
  return (
    <div>
      <p className={styles.loading}>
        {/* <div>Please Wait</div> */}
        <span className={styles.l}>L</span>
        <span className={styles.o}>o</span>
        <span className={styles.a}>a</span>
        <span className={styles.d}>d</span>
        <span className={styles.i}>i</span>
        <span className={styles.n}>n</span>
        <span className={styles.g}>g</span>
        <span className={styles.d1}></span>
        <span className={styles.d2}></span>
        <span className={styles.d3}></span>
      </p>
    </div>
  );
}

export default CustomLoading;
