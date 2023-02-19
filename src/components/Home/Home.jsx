import React from "react";
import style from "./Home.module.css";
import image from "../../assets/image/2022_12_08_15_44_IMG_0006-removebg-preview-modified.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={style.mainContainer}>
      <div className={`flex `}>
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
          <div className={`text-black`}>
            <a
              className={`flex items-center justify-center`}
              target="blank"
              href="https://github.com/KaungMyatHun-15691">
              Github page
              <svg
                width="20px"
                height="10px"
                fill="#7f7f7f"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
