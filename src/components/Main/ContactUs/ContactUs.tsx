import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./contactUs.module.css";
import Form from "./Form/Form";

import Services from "./Services/Services";
import { IFormInput } from "./types";
import { useState } from "react";
import { IServices } from "./Services/Service/types";
import axios, { AxiosError } from "axios";
import { API_URL } from "../../../config/config";

const ContactUs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState, reset } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      comment: "",
      service: "",
    },
  });

  const [serviceData, setServiceData] = useState<IServices | null>(null);

  const handleSetService = (serviceData: IServices) =>
    setServiceData(serviceData);

  const { errors } = formState;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const contactData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        service: serviceData?.name,
        comment: data.comment,
      };

      setLoading(true);

      await axios.post(`${API_URL}/mail/send_mail`, { ...contactData });

      setLoading(false);

      reset();
    } catch (e) {
      const axiosError = e as AxiosError;
      console.log(axiosError.message);
    }
  };

  return (
    <div id="contacts"className={styles.containerAround}>
      <h1 className={styles.title}>CONTACT US</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.contact_container}>
            <Services handleSetService={handleSetService} />
            <Form loading={loading} register={register} errors={errors} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
