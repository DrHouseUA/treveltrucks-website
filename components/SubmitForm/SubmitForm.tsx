import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SubmitForm.module.css";
import toast from "react-hot-toast";

const CustomInput = forwardRef<HTMLInputElement, any>(
  ({ value, onClick, name, placeholder, className }, ref) => (
    <input
      ref={ref}
      className={className}
      name={name}
      placeholder={placeholder}
      value={value ?? ""}
      onClick={onClick}
      readOnly
    />
  )
);
CustomInput.displayName = "CustomInput";

CustomInput.displayName = "CustomInput";

export default function SubmitForm() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleSubmit = (formData: FormData) => {
    const userName = formData.get("userName");
    const userEmail = formData.get("userEmail");
    const userDate = formData.get("userDate");
    const userMessage = formData.get("userMessage");

    toast.success(
      "Your information received successfully! Thank you for choosing us!"
    );
    console.log({ userName, userEmail, userDate, userMessage });
  };

  return (
    <div className={styles["form-block"]}>
      <form className={styles.form} action={handleSubmit}>
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

          <DatePicker
            placeholderText="Booking date"
            onChange={(d) => setStartDate(d)}
            dateFormat="yyyy-MM-dd"
            customInput={
              <CustomInput
                name="userDate"
                placeholder="Booking date*"
                className={styles["input-style"]}
              />
            }
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
