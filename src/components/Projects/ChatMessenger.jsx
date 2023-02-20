import React, { useEffect, useState } from "react";
import img from "../../assets/image/project photo/accesses.png";
import styles from "./Project.module.css";
import Loading from "../CustomLoading/CustomLoading";
import axios from "axios";

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
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.chatMain}>
          <div className={`flex`}>
            <img src={img} alt="" className={`${styles.projectImage}`} />
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
              </table>
              <div>
                <h4 className={`text-2xl text-black font-bold ml-32`}>Description</h4>
                <p className={`text-2xl text-black  my-8 ml-32`}>
                  This project is named as <strong>Accesses</strong>. This app is one type of Social
                  type application . But this project has one main feature. That feature is a main
                  business key of{" "}
                  <a className={`hover:text-blue-600`} href="/project/onbety">
                    <strong>Onbety</strong>
                  </a>{" "}
                  because onbety's transaction record will notify to this accesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatMessenger;
