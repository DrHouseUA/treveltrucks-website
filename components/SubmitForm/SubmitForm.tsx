import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SubmitForm.module.css";
import toast from "react-hot-toast";

import { enUS } from "date-fns/locale";
import type { Locale, Day } from "date-fns";

const customLocale: Locale = {
  ...enUS,
  options: { ...enUS.options, weekStartsOn: 1 as Day }, // 1 = Monday
  localize: {
    ...enUS.localize,
    day: (n: number) => ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][n],
  },
};

type CustomInputProps = {
  value?: string;
  onClick?: () => void;
  name?: string;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, name, placeholder, className, ...rest }, ref) => (
    <input
      ref={ref}
      className={className}
      name={name}
      placeholder={placeholder}
      value={value ?? ""}
      onClick={onClick}
      readOnly
      {...rest}
    />
  )
);
CustomInput.displayName = "CustomInput";

export default function SubmitForm() {
  const [startDate, setStartDate] = useState<Date | null>(null); // ✅ початково null

  const handleSubmit = (formData: FormData) => {
    const userName = formData.get("userName");
    const userEmail = formData.get("userEmail");
    const userMessage = formData.get("userMessage");

    toast.success(
      "Your information received successfully! Thank you for choosing us!"
    );
    console.log({ userName, userEmail, startDate, userMessage });
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
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()} // ✅ тільки від сьогодні
            placeholderText="Select a date between today" // ✅ плейсхолдер
            locale={customLocale}
            customInput={
              <CustomInput
                name="userDate"
                placeholder="Select a date between today"
                className={`${styles["input-style"]} ${styles.noCaret}`}
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
