import Image from "./Image/Image";
import { imagesData } from "./constants";
import styles from "./team.module.css";

const Team = () => {
  return (
    <div id="team" className={styles.container}>
      <h1 className={styles.title}>TEAM</h1>
      <div className={styles.team_photo_container}>
        {imagesData.map((item) => (
          <Image key={item.id} image={item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
