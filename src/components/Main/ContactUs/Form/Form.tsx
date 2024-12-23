import confirm_icon from "../../../../assets/confirm_icon.svg";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import styles from "./form.module.css";
import { IFormInput } from "../types";

interface Props {
  errors: FieldErrors<IFormInput>;
  register: UseFormRegister<IFormInput>;
  loading: boolean;
}

const Form: React.FC<Props> = ({ register, errors, loading }) => {
  return (
    <>
      <div className={styles.form_container}>
        <h2 className={styles.form_title}>Your contact info</h2>
        <div className={styles.form}>
          <div className={styles.input_container}>
            <input
              {...register("name", {
                required: { value: true, message: "Name is required!" },
              })}
              className={
                errors.name ? styles.form_input_error : styles.form_input
              }
              type="text"
              placeholder="Your Name"
            />
            <span className={styles.error}>{errors.name?.message}</span>
          </div>
          <div className={styles.form__contact_inputs}>
            <div className={styles.input_container}>
              <input
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email is not valid!",
                  },
                  required: { value: true, message: "Email is required!" },
                })}
                className={
                  errors.email ? styles.form_input_error : styles.form_input
                }
                type="email"
                placeholder="Your Email"
              />
              <span className={styles.error}>{errors.email?.message}</span>
            </div>
            <div className={styles.input_container}>
              <input
                {...register("phoneNumber", {
                  pattern: {
                    value: /^\+\d{3}\d{9}$/,
                    message: "Phone number is not valid",
                  },
                })}
                className={
                  errors.phoneNumber
                    ? styles.form_input_error
                    : styles.form_input
                }
                type="tel"
                placeholder="Your Phone Number (optional)"
              />
              <span className={styles.error}>
                {errors.phoneNumber?.message}
              </span>
            </div>
          </div>
          <input
            {...register("comment")}
            className={styles.form_input}
            type="text"
            placeholder="Your comment (optional)"
          />
          <button className={styles.form_button} type="submit">
            <p className={styles.button_text}>Send</p>
            {loading ? (
              <p>...</p>
            ) : (
              <img loading="lazy" src={confirm_icon} alt="" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
