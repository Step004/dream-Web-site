import { useForm, SubmitHandler } from "react-hook-form";
import confirm_icon from "../../../assets/confirm_icon2.svg";

import styles from "./signUp.module.css";
import axios from "axios";
import { API_URL } from "../../../config/config";

interface IFormSignUp {
  email: string;
}

const SignUp = () => {
  const { register, handleSubmit, formState, reset } = useForm<IFormSignUp>({
    defaultValues: {
      email: "",
    },
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
    try {
      await axios.post(`${API_URL}/mail/save_user_mail`, {
        ...data,
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.sign__up_container}>
      <h2 className={styles.title}>Sign up for email updates and promotions</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.email__form}>
        <div
          className={
            errors.email
              ? styles.email__form_input_error
              : styles.email__form_input
          }
        >
          <input
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email is not valid!",
              },
              required: { value: true, message: "Email is required!" },
            })}
            className={errors.email ? styles.input_error : styles.input}
            placeholder="Email"
            type="email"
          />
          <button className={styles.button} type="submit">
            <img loading="lazy" src={confirm_icon} alt="" />
          </button>
        </div>
        <span className={styles.error}>{errors.email?.message}</span>
      </form>
      <section className={styles.sign__up_text}>
        By signing up, you want to receive RUNGE emails. Please see out{" "}
        <span>
          <a className={styles.links} href="">
            Term & Conditions
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a className={styles.links} href="">
            Privacy Policy
          </a>
        </span>{" "}
        for more details.
      </section>
    </div>
  );
};

export default SignUp;
