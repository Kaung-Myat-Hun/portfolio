import React from "react";
import img from "../../assets/image/project photo/onbety.png";
import styles from "./Project.module.css";

function Onbety() {
  return (
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
              <td>Onbety</td>
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
          </table>
          <div>
            <h4 className={`text-2xl text-black font-bold ml-32`}>Description</h4>
            <p className={`text-2xl text-black  my-8 ml-32`}>
              This project is named as <strong>Onbety</strong>. This app is one type of gambling
              website such as{" "}
              <a className={`hover:text-blue-600`} href="http://1xbet.com" target="blank">
                <strong>1xBet</strong>
              </a>
              this site contain with sport , esport and casino with betting. This site contain with
              live streaming feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onbety;
