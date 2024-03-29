import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/image/project photo/accesses.png";
import img2 from "../../assets/image/project photo/admindashboard.png";
import img3 from "../../assets/image/project photo/onbety.png";
import styles from "./Project.module.css";
import Loading from "../CustomLoading/CustomLoading";
import axios from "axios";

function Project() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments", {
        accept: "application/json",
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success" || res.statusCode === "200") {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className={`text-center text-4xl text-black font-bold mt-10`}>
            Latest Projects
          </p>
          <div className={`${styles.mainContainer}`}>
            <div
              className={`flex max-[820px]:flex-col flex-row justify-around items-center`}
            >
              <div
                className={`w-4/12 mx-20 max-[400px]:mx-0 max-[400px]:w-7/12 max-[820px]:w-7/12 hover:text-blue-600 text-black`}
                onClick={() => navigate("/project/chat-messenger")}
              >
                <img
                  src={img1}
                  alt=""
                  className={`hover:scale-110 transition-all hover:cursor-pointer `}
                />
                <p
                  className={`text-2xl  text-center mt-20 max-[400px]:my-10 max-[820px]:my-10 hover:cursor-pointer`}
                >
                  Chat Messenger
                </p>
              </div>
              <div
                className={`w-4/12 mx-20 max-[400px]:mx-0 max-[400px]:w-7/12 max-[820px]:w-7/12 hover:text-blue-600 text-black`}
                onClick={() => navigate("/project/admin-dashboard")}
              >
                <img
                  src={img2}
                  alt=""
                  className={`hover:scale-110 transition-all hover:cursor-pointer `}
                />
                <p
                  className={`text-2xl  text-center mt-20 max-[400px]:my-10 max-[820px]:my-10 hover:cursor-pointer`}
                >
                  Admin Dashboard
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex max-[400px]:flex-col max-[400px]:items-center py-24 justify-between`}
          >
            <p
              onClick={() => navigate("/projects/all-projects")}
              className={`text-black py-20 px-40 max-[820px]:py-0 flex items-center hover:fill-blue-600 hover:text-blue-600 hover:cursor-pointer select-none underline text-2xl`}
            >
              All Projects
            </p>
            <p
              onClick={() => navigate("/about-me")}
              className={`text-black text-xl py-20 px-40  flex items-center hover:fill-blue-600 hover:text-blue-600 hover:cursor-pointer select-none underline`}
            >
              about me
            </p>
            <p
              onClick={() => navigate("/contact")}
              className={`text-black py-20 px-40 max-[820px]:py-0 max-[400px]:pb-10 flex items-center hover:fill-blue-600 hover:text-blue-600 hover:cursor-pointer select-none underline text-2xl`}
            >
              Contact Page{" "}
              <svg
                width="20"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Project;
