// import { useState } from "react";
// import image1 from "../../../../assets/Frame 63.png";
// import image2 from "../../../../assets/Frame 65.png";
// import image3 from "../../../../assets/Frame 62.png";
// import image4 from "../../../../assets/Frame 66.png";
// import image5 from "../../../../assets/Frame 67.png";

// import video1 from "../../../../assets/videos/30SecondAd.mp4";
// import video2 from "../../../../assets/videos/ProjectLove.mp4";
// import video3 from "../../../../assets/videos/SZN.mp4";
// import video4 from "../../../../assets/videos/Sonda.mp4";
// import video5 from "../../../../assets/videos/Studio11.mp4";

// import styles from "./recentWorks.module.css";

// const RecentWorks = () => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const videos = [
//     {
//       url: "https://www.youtube.com/embed/qF6Xr7DSq0w?autoplay=1&mute=1&controls=0&showinfo=0&vq=hd1080",
//       rotate: "6deg",
//     },
//     {
//       url: "https://www.youtube.com/embed/8rVHvxPzEE8?autoplay=1&mute=1&controls=0&showinfo=0&vq=hd1080",
//       rotate: "-5deg",
//     },
//     {
//       url: "https://www.youtube.com/embed/N4CS0DXh-w8?autoplay=1&mute=1&controls=0&showinfo=0&vq=hd1080",
//       rotate: "4deg",
//     },
//     {
//       url: "https://www.youtube.com/embed/YpLbc78R2vo?autoplay=1&mute=1&controls=0&showinfo=0&vq=hd1080",
//       rotate: "-8deg",
//     },
//     {
//       url: "https://www.youtube.com/embed/jiAtRlTjoPE?autoplay=1&mute=1&controls=0&showinfo=0&vq=hd1080",
//       rotate: "5deg",
//     },
//   ];

//   return (
//     <div>
//       <h1 className={styles.title}>RECENT WORKS</h1>
//       <div className={styles.images}>
//         {[image1, image2, image3, image4, image5].map((image, index) => (
//           <div
//             key={index}
//             className={styles.imageContainer}
//             onMouseEnter={() => setActiveVideo(index)}
//             onMouseLeave={() => setActiveVideo(null)}
//           >
//             <img loading="lazy" src={image} alt={`Project ${index + 1}`} />
//             {activeVideo === index && (
//               <div
//                 className={styles.videoWrapper}
//                 style={{ "--rotate-angle": videos[index].rotate }}
//               >
//                 <iframe
//                   src={videos[index].url}
//                   frameBorder="0"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                   className={styles.video}
//                 ></iframe>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentWorks;

// =-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-=TEST

import { useState } from "react";
import image1 from "../../../../assets/Frame 63.png";
import image2 from "../../../../assets/Frame 65.png";
import image3 from "../../../../assets/Frame 62.png";
import image4 from "../../../../assets/Frame 66.png";
import image5 from "../../../../assets/Frame 67.png";

import video1 from "../../../../assets/videos/ProjectLove.mp4";
import video2 from "../../../../assets/videos/30SecondAd.mp4";
import video3 from "../../../../assets/videos/Sonda.mp4";
import video4 from "../../../../assets/videos/SZN.mp4";
import video5 from "../../../../assets/videos/Souled_out-1.mov";

import styles from "./recentWorks.module.css";

const RecentWorks = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    {
      file: video1,
      rotate: "6deg",
    },
    {
      file: video2,
      rotate: "-5deg",
    },
    {
      file: video3,
      rotate: "4deg",
    },
    {
      file: video4,
      rotate: "-8deg",
    },
    {
      file: video5,
      rotate: "5deg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RECENT WORKS</h1>
      <div className={styles.images}>
        {[image1, image2, image3, image4, image5].map((image, index) => (
          <div
            key={index}
            className={styles.imageContainer}
            onMouseEnter={() => setActiveVideo(index)}
            onMouseLeave={() => setActiveVideo(null)}
          >
            <img loading="lazy" src={image} alt={`Project ${index + 1}`} />
            {activeVideo === index && (
              <div
                className={styles.videoWrapper}
                style={
                  {
                    "--rotate-angle": videos[index].rotate,
                  } as React.CSSProperties
                }
              >
                <video
                  src={videos[index].file}
                  controls={false}
                  autoPlay
                  loop
                  muted
                  className={styles.video}
                ></video>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
