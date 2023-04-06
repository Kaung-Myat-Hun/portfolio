import React, { useEffect, useState } from "react";
import img from "../../assets/image/project photo/accesses.png";
import styles from "./Project.module.css";
import Loading from "../CustomLoading/CustomLoading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import sample1 from "../../assets/image/project photo/chat/Screenshot 2023-02-23 222351.png";
import sample2 from "../../assets/image/project photo/chat/Screenshot 2023-02-23 222550.png";
import sample3 from "../../assets/image/project photo/chat/Screenshot 2023-02-23 222615.png";
import sample4 from "../../assets/image/project photo/chat/Screenshot 2023-02-23 222741.png";

function ChatMessenger() {
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
  const arr = [img, sample1, sample2, sample3, sample4];
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
                  <td>Chat Messenger</td>
                </tr>
                <tr>
                  <td>Contributors :</td>
                  <td>
                    <span className={styles.textLink} onClick={() => navigate("/about-me")}>
                      Kaung Myat Hun
                    </span>
                    <span>,Thazin Phyo Kyaw</span>
                  </td>
                </tr>
                <tr>
                  <td>Project Category:</td>
                  <td>Social</td>
                </tr>
                <tr>
                  <td>Project Type</td>
                  <td>Real World Sample</td>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>
                    <p>Send Message</p>
                    <p>Realtime Notification & Message</p>
                    <p>File/image Send</p>
                    <p>Reply</p>
                    <p>Emoji</p>
                    <p>Authentication</p>
                    <p>Channels</p>
                  </td>
                </tr>
                <tr>
                  <td>Demo</td>
                  <td>
                    <a href="https://accesses-chat-messenger-frontend.netlify.app/" target="blank">
                      Chat Messenger (!note that is real world sample so you cann't login into this
                      Site)
                    </a>
                  </td>
                </tr>
              </table>
              <div>
                <h4 className={`text-2xl text-black font-bold ml-32`}>Description</h4>
                <p className={`text-2xl text-black  my-8 ml-32`}>
                  <strong>Accesses Chat</strong> Messenger is a web-based messaging platform
                  developed using modern frontend technologies such as React JS, Redux Tool kit,
                  Material UI, and Tailwind CSS. The platform falls under the category of messaging,
                  and it is likely similar to other messaging platforms such as Facebook Messenger.{" "}
                  <br />
                  <br />
                  The development of <strong>Accesses Chat</strong> Messenger lasted for six months,
                  during which the development team integrated several features to enhance the user
                  experience. The core feature of the platform is the ability to send and receive
                  messages in real-time. Users can also receive notifications in real-time when a
                  new message is received. This feature makes communication seamless and efficient.{" "}
                  <br />
                  <br />
                  One of the reasons why real-time notification is an essential feature for{" "}
                  <strong>Accesses Chat</strong> Messenger is its relationship to Onbety. Onbety is
                  a gambling platform that supports various transactions such as local bank
                  transactions, international bank transactions, and cryptocurrency transactions.
                  The real-time notification feature on <strong>Accesses Chat</strong> Messenger is
                  crucial to Onbety since it ensures that users receive immediate updates on their
                  transaction in and transaction out activities. <br />
                  <br />
                  In addition to the real-time notification feature, <strong>
                    Accesses Chat
                  </strong>{" "}
                  Messenger also supports several other features, such as file sharing,
                  authentication, and channels. These features make communication more efficient and
                  enhance the overall user experience. <br />
                  <br />
                  The integration of modern frontend technologies such as React JS, Redux Tool kit,
                  Material UI, and Tailwind CSS with <strong>Accesses Chat</strong> Messenger is
                  also an essential factor in enhancing the user experience. These technologies
                  enable the development team to create a responsive and user-friendly interface,
                  making it easier for users to navigate the platform and communicate with other
                  users. <br />
                  <br />
                  In conclusion, <strong>Accesses Chat</strong> Messenger is a messaging platform
                  developed using modern frontend technologies, and it contains several features
                  designed to enhance the user experience. Its integration of real-time messaging,
                  file sharing, authentication, and channels makes it a popular choice among users
                  looking for an efficient and reliable messaging platform. Its relationship with
                  Onbety also highlights the importance of real-time notification features in
                  enhancing transaction activities on the platform.
                </p>
              </div>
              <p
                className={`text-blue-600 underline text-2xl cursor-pointer text-end p-4`}
                onClick={() => navigate(-1)}>
                Back
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatMessenger;
