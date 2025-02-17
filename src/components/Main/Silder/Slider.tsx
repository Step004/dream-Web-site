import { useState, useEffect } from "react";
import styles from "./slider.module.css";

import confirmIcon from "../../../assets/confirm_icon.svg";
import { useMediaQuery } from "react-responsive";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [seeMore, setSeeMore] = useState(false);

  const videos = [
    {
      url: "https://www.youtube.com/embed/ljJa9J5mFQc?autoplay=1&mute=1&controls=0&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/ljJa9J5mFQc/maxresdefault.jpg",
    },
    {
      url: "https://www.youtube.com/embed/oOdP7w7xf4k?autoplay=1&mute=1&controls=0&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/oOdP7w7xf4k/maxresdefault.jpg",
    },
    {
      url: "https://www.youtube.com/embed/Xamvj5T56Po?autoplay=1&mute=1&controls=0&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/Xamvj5T56Po/hqdefault.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && activeIndex !== null) {
        setActiveIndex(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  const toggleSeeMore = () => {
    setSeeMore((prev) => !prev);
  };

  return (
    <div className={styles.slider_container}>
      <h1 className={styles.title}>FILM IS A STORY</h1>
      <div className={styles.images_container}>
        {videos.map((video, index) => {
          // Умовне відображення для смартфонів
          if (isMobile && !seeMore && index > 0) {
            return null;
          }

          return (
            <div
              className={`${styles.image_container} ${
                activeIndex === index ? styles.active : ""
              }`}
              key={index}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onMouseLeave={() => !isMobile && setActiveIndex(null)}
              onClick={() => handleClick(index)}
            >
              {activeIndex === index ? (
                <iframe
                  src={video.url}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube video"
                  className={styles.video}
                ></iframe>
              ) : (
                <img
                  loading="lazy"
                  className={styles.image}
                  src={video.thumbnail}
                  alt=""
                />
              )}
              <div className={styles.image_description__container}>
                <section>
                  <h2 className={styles.image_header}>
                    {index === 0
                      ? "3D Animations"
                      : index === 1
                      ? "Creative/Cinematic"
                      : "Corporate"}
                  </h2>
                  <p className={styles.image_description}>Description</p>
                </section>
                <a className={styles.view_project_link} href="#">
                  View Project
                  <span>
                    <img
                      loading="lazy"
                      className={styles.confirmIcon}
                      src={confirmIcon}
                      alt=""
                    />
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {isMobile && (
        <div className={styles.butCont}>
          <button onClick={toggleSeeMore} className={styles.see_more_button}>
            {seeMore ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
