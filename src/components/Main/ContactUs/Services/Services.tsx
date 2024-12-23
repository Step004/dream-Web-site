import React, { useEffect, useState } from "react";
import { services } from "../constants";
import Service from "./Service/Service";
import styles from "./services.module.css";
import { IServices } from "./Service/types";

interface Props {
  handleSetService: (serviceData: IServices) => void;
}

const Services: React.FC<Props> = ({ handleSetService }) => {
  const [isSelected, setIsSelected] = useState<IServices | null>(
    services.find((service) => service.name === "Photography") || null
  );

  const selectService = (service: IServices) => setIsSelected(service);

  useEffect(() => {
    if (isSelected) {
      handleSetService(isSelected);
    }
  }, [handleSetService, isSelected]);

  return (
    <>
      <div className={styles.service_container}>
        <h2 className={styles.service_title}>Select Service</h2>
        <div className={styles.services}>
          {services.map((item) => (
            <div key={item.id}>
              <Service
                service={item}
                isSelected={isSelected?.id === item.id}
                selectService={selectService}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
