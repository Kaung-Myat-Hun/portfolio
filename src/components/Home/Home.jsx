import React from "react";
import style from "./Home.module.css";
import image from "../../assets/image/2022_12_08_15_44_IMG_0006-removebg-preview-modified.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={style.mainContainer}>
      <div className={`flex max-[400px]:flex-col`}>
        <div>
          <div className={style.profileImageContainer}>
            <div className={style.mainSquare}></div>
            <div className={`${style.square} ${style.SOne}`}></div>
            <div className={`${style.square} ${style.STwo}`}></div>
            <img src={image} alt="" className={style.profileImage} />
            <button
              onClick={() => navigate("/about-me")}
              className={`btn bg-white text-black text-lg ${style.moreAboutBtn} hover:text-white`}>
              more About me{" "}
              <svg
                width="12px"
                height="12px"
                fill="#7f7f7f"
                style={{ marginLeft: "10px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className={`${style.infoText} flex flex-col ml-96 justify-center items-center`}>
          <div>
            <p className={` text-black font-semibold mb-5 text-5xl ${style.name}`}>
              I am Kaung Myat Hun
            </p>
            <p className={` text-black font-bold mb-5 ${style.heroText}`}>Frontend Developer</p>
            <p className={` text-black font-bold mb-28 ${style.subtitle}`}>
              Experience with REACT JS
            </p>
          </div>
          <div className={`text-black ${style.iconContainer}`}>
            <a
              className={` max-[400px]:mb-20 hover:fill-blue-600 justify-end`}
              target="blank"
              href="https://github.com/KaungMyatHun-15691">
              <svg
                className={style.iconGithub}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 512">
                <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
