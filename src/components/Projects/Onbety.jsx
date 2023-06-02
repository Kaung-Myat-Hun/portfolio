import React, { useEffect, useState } from "react";
import img from "../../assets/image/project photo/onbety.png";
import styles from "./Project.module.css";
import Loading from "../CustomLoading/CustomLoading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Onbety() {
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
        <div className={styles.chatMain}>
          <div className={`flex max-[400px]:flex-col`}>
            <img
              src={img}
              alt=""
              className={`${styles.projectImage} max-[400px]:w-9/12 max-[400px]:h-80`}
            />

            <div>
              <table className={styles.table}>
                <tr>
                  <td colSpan="2">
                    <p className={`text-3xl font-bold`}>Project Details</p>
                  </td>
                </tr>
                <tr>
                  <td>Project Name :</td>
                  <td>Onbety</td>
                </tr>
                <tr>
                  <td>Contributors :</td>
                  <td>
                    <p
                      className={styles.textLink}
                      onClick={() => navigate("/about-me")}
                    >
                      Kaung Myat Hun
                    </p>
                    <p>,Hein Htet</p>
                  </td>
                </tr>
                <tr>
                  <td>Project Category:</td>
                  <td>Gambling</td>
                </tr>
                <tr>
                  <td>Project Type</td>
                  <td>Real World </td>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>
                    <p>Betting</p>
                    <p>Live Streaming</p>
                    <p>Live Bet data</p>
                    <p>Transaction with Crypto and Local Banking</p>
                    <p>Can Bet on Esport</p>
                    <p>Slot games +</p>
                  </td>
                </tr>
                <tr>
                  <td>Demo</td>
                  <td>
                    <a href="https://onbety-react.netlify.app" target="blank">
                      Onbety Site
                    </a>
                  </td>
                </tr>
              </table>
              <div>
                <h4 className={`text-2xl text-black font-bold ml-32`}>
                  Description
                </h4>
                <p className={`text-2xl text-black  my-8 ml-32`}>
                  <strong>Onbety</strong> is a web-based gambling platform that
                  was developed using several frontend technologies, including
                  React JS, Redux Tool kit, and Material UI. The platform falls
                  under the category of online gambling, and it is likely
                  similar to other gambling platforms such as 1xbet. <br />
                  <br /> The development of <strong>Onbety</strong> lasted for a
                  year, during which the development team integrated several
                  features to enhance the user experience. These features
                  include a role-based access control system that allows users
                  to access the platform according to their assigned roles. The
                  roles available on the platform are admin, hr, account,
                  transaction, and user. <br />
                  <br /> Another critical feature of <strong>Onbety</strong> is
                  the ability to facilitate cryptocurrency transactions. This
                  feature enables users to deposit and withdraw funds using
                  cryptocurrencies such as Bitcoin and Ethereum. Additionally,{" "}
                  <strong>Onbety</strong> allows users to make local bank
                  transactions, making it easier for users who prefer using
                  their local banks to transact. <br />
                  <br />
                  <strong>Onbety</strong> also supports international bank
                  transactions, particularly from banks in Thailand and
                  Singapore. This feature allows users to transact from
                  different regions and using different currencies. The
                  integration of this feature is an excellent way of ensuring
                  the platform is accessible to a global audience. In
                  conclusion, <strong>Onbety</strong> is a gambling platform
                  built using modern frontend technologies, and it contains
                  several features designed to enhance the user experience. Its
                  integration of cryptocurrency transactions, local bank
                  transactions, and international bank transactions, among other
                  features, makes it a popular choice among online gambling
                  enthusiasts.
                </p>
              </div>
              <p
                className={`text-blue-600 underline text-2xl cursor-pointer text-end p-4`}
                onClick={() => navigate(-1)}
              >
                Back
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Onbety;
