import React from 'react';

import { IServices } from './types';

import styles from './service.module.css'

interface Props {
    service: IServices
    isSelected: boolean
    selectService: (service: IServices) => void
}

const Service: React.FC<Props> = ({ service, isSelected, selectService }) => {

    return (
        <div
            className={isSelected ? styles.service_selected : styles.service}
            onClick={() => selectService(service)}
        >
            {service.name}
        </div>
    );
};

export default Service;