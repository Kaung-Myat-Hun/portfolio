import React, { useState, useEffect } from "react";
import img from "../../assets/image/project photo/admindashboard.png";
import styles from "./Project.module.css";
import Loading from "../CustomLoading/CustomLoading";
import axios from "axios";

function AdminDashboard() {
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
                  <td>Admin Dashboard</td>
                </tr>
                <tr>
                  <td>Project Category:</td>
                  <td>Admin Panel</td>
                </tr>
                <tr>
                  <td>Project Type</td>
                  <td>Real World Sample</td>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>
                    <p>Project CRUD</p>
                    <p>Brand CRUD</p>
                    <p>Category CRUD</p>
                    <p>Gender CRUD</p>
                    <p>Commission CRUD</p>
                    <p>Merchant CRUD</p>
                    <p>Shipping CRUD</p>
                    <p>Payment CRUD</p>
                  </td>
                </tr>
              </table>
              <div>
                <h4 className={`text-2xl text-black font-bold ml-32`}>Description</h4>
                <p className={`text-2xl text-black  my-8 ml-32`}>
                  This project is named as <strong>Admin Dashboard</strong>. This app is one type of
                  admin panel and this is for e-commerce website. This project has many crud state.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminDashboard;
