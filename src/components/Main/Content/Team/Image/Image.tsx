import styles from './image.module.css'
import { IImage } from './types';

interface Props {
    image: IImage,
}

const Image: React.FC<Props> = ({ image }) => {
    const { url } = image;

    return (
        <div
            className={styles.team_photo}
        >
            <img loading='lazy' className={styles.team_img} src={url} alt="" />
            <div className={styles.team_description}>
                <section className={styles.creditials}>
                    <p>{image.fullName}</p>
                    <p>{image.profession}</p>
                </section>
                <a role='button' href='#contacts' className={styles.book_button}>Book now</a>
            </div>
        </div>
    );
};

export default Image;
