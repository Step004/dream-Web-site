import React from 'react'

import styles from './card.module.css'
import { ICards } from './types';

interface Props {
    item: ICards
}

const Card: React.FC<Props> = ({ item }) => {
    return (
        <div key={item.id} className={styles.card}>
            <img className={styles.icon} loading='lazy' src={item.icon} alt="" />
            <p className={styles.description}>{item.text}</p>
        </div>
    )
};

export default Card;