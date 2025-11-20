import styles from "./SubmitForm.module.css";

export default function SubmitForm() {
  return (
    <div className={styles["form-block"]}>
      <form className={styles.form}>
        <div className={styles["form-header"]}>
          <h2 className={styles.title}>Book your campervan now</h2>
          <p className={styles.subtitle}>
            Stay connected! We are always ready to help you.
          </p>
        </div>

        <div className={styles["input-group"]}>
          <input
            className={styles["input-style"]}
            type="text"
            name="userName"
            placeholder="Name*"
          />
          <input
            className={styles["input-style"]}
            type="email"
            name="userEmail"
            placeholder="Email*"
          />
          <input
            className={styles["input-style"]}
            type="date"
            name="userdate"
            placeholder="Booking date*"
          />
          <textarea
            className={styles["textarea-style"]}
            name="userMessage"
            placeholder="Comment"
            rows={4}
          />
        </div>
        <button type="submit" className={styles["submit-button"]}>
          Send
        </button>
      </form>
    </div>
  );
}
