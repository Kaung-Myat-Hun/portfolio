import React, { useEffect, useState } from "react";
import style from "./About.module.css";
import image from "../../assets/image/2022_12_08_15_44_IMG_0006-removebg-preview-modified.png";
import { useNavigate } from "react-router-dom";
import Loading from "../CustomLoading/CustomLoading";
import axios from "axios";

function About() {
  const navigate = useNavigate();
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
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={`${style.mainContainer} bg-white`}>
            <p className={`underline absolute text-xl text-black p-20`}>About</p>
            <div className={`flex max-[400px]:flex-col `}>
              <div>
                <div className={style.profileImageContainer}>
                  <div className={style.mainSquare}></div>
                  <div className={`${style.square} ${style.SOne}`}></div>
                  <div className={`${style.square} ${style.STwo}`}></div>
                  <img src={image} alt="" className={style.profileImage} />
                </div>
              </div>
              <div className={`${style.infoText}  mt-60`}>
                <table className={style.table}>
                  <tr>
                    <td>Name : </td>
                    <td> Kaung Myat Hun</td>
                  </tr>
                  <tr>
                    <td>Age : </td>
                    <td> 26</td>
                  </tr>
                  <tr>
                    <td>Experience : </td>
                    <td> 1 years Experience With React JS </td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td>
                      <p>Zoology Final Year</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone : </td>
                    <td>
                      <a className={`hover:text-blue-600`} href="viber://chat?number=+959752815691">
                        +959 752 815 691
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Mail : </td>
                    <td>
                      <a className={`hover:text-blue-600`} href="mailto:kaungmyathun7@gmail.com">
                        kaungmyathun7@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className={`underline`}>About Myself</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <p>
                        Hello! I am <span className={`font-bold`}>Kaung Myat Hun</span>.
                      </p>
                      <p>
                        I am Junior Frontend Web Developer with 6 Months Experience Working with
                        React JS .
                      </p>
                      <p>
                        I am interesting to challenge to get new experience with Frontend developer.
                      </p>
                      <p>I also know some design flow.</p>
                      <p>
                        I have experience with projects such as e-commence, POS, Blog, Landing,
                        Admin Panel, Chatting App etc.
                      </p>
                      <p>I have some experience with Next js and Typescript too.</p>
                      <p className={`text-end`}>Thanks Regards</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <p className={`text-center text-2xl py-10 text-black select-none`}>
                My Skill sets are below
              </p>
              <div>
                <table
                  className={`flex justify-center flex-col items-center ${style.progressTable}`}>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-warning ${style.progressBar}`}
                        value="80"
                        max="100"></progress>
                    </td>
                    <td>80%</td>
                    <td>HTML5</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-info ${style.progressBar}`}
                        value="95"
                        max="100"></progress>
                    </td>
                    <td>95%</td>
                    <td>CSS3</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-warning ${style.progressBar}`}
                        value="97"
                        max="100"></progress>
                    </td>
                    <td>97%</td>
                    <td>JavaScript</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-primary ${style.progressBar}`}
                        value="63"
                        max="100"></progress>
                    </td>
                    <td>63%</td>
                    <td>Bootstrap</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-accent ${style.progressBar}`}
                        value="97"
                        max="100"></progress>
                    </td>
                    <td>97%</td>
                    <td>React JS</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-info ${style.progressBar}`}
                        value="70"
                        max="100"></progress>
                    </td>
                    <td>70%</td>
                    <td>Tailwind CSS</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-warning ${style.progressBar}`}
                        value="65"
                        max="100"></progress>
                    </td>
                    <td>65%</td>
                    <td>Daisy Ui</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-accent ${style.progressBar}`}
                        value="68"
                        max="100"></progress>
                    </td>
                    <td>68%</td>
                    <td>Material Ui</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-error ${style.progressBar}`}
                        value="55"
                        max="100"></progress>
                    </td>
                    <td>55%</td>
                    <td>Sass</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-error ${style.progressBar}`}
                        value="70"
                        max="100"></progress>
                    </td>
                    <td>70%</td>
                    <td>Figma</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-primary ${style.progressBar}`}
                        value="50"
                        max="100"></progress>
                    </td>
                    <td>50%</td>
                    <td>Next Js</td>
                  </tr>
                  <tr>
                    <td>
                      <progress
                        className={`progress transition-colors hover:cursor-pointer hover:progress-accent ${style.progressBar}`}
                        value="40"
                        max="100"></progress>
                    </td>
                    <td>40%</td>
                    <td>TypeScript</td>
                  </tr>
                </table>
                <div
                  className={`flex justify-between max-[400px]:flex-col max-[400px]:items-center`}>
                  <p
                    onClick={() => navigate("/")}
                    className={`text-black py-20 px-40 flex items-center hover:fill-blue-600 hover:text-blue-600 hover:cursor-pointer select-none underline text-2xl`}>
                    <svg
                      width="20"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                    back
                  </p>
                  <p
                    onClick={() => navigate("/projects")}
                    className={`text-black py-20 px-40 flex items-center hover:fill-blue-600 hover:text-blue-600 hover:cursor-pointer select-none underline text-2xl`}>
                    projects{" "}
                    <svg
                      width="20"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
