import React, { useState, useEffect } from "react";
import img from "../../assets/image/project photo/admindashboard.png";
import styles from "./Project.module.css";
import Loading from "../CustomLoading/CustomLoading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                  <td>Admin Dashboard</td>
                </tr>
                <tr>
                  <td>Contributors :</td>
                  <td>
                    <p className={styles.textLink} onClick={() => navigate("/about-me")}>
                      Kaung Myat Hun
                    </p>
                  </td>
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
                <tr>
                  <td>Demo</td>
                  <td>
                    <a href="https://admin-ecommerce.netlify.app/home" target="blank">
                      Admin E-Commerce
                    </a>
                  </td>
                </tr>
              </table>
              <div>
                <h4 className={`text-2xl text-black font-bold ml-32`}>Description</h4>
                <p className={`text-2xl text-black  my-8 ml-32`}>
                  <strong>Kacy Beauty</strong> is an admin dashboard for an e-commerce website that
                  is developed using modern frontend technologies such as React JS, Redux Tool kit,
                  Material UI, and Tailwind CSS with a plugin of Daisy UI. The dashboard is designed
                  for the management of various e-commerce activities, including projects, brands,
                  categories, genders, commissions, merchants, shipping, and payments. <br />
                  The development of <strong>Kacy Beauty</strong> lasted for three months, during
                  which the development team integrated several features to enhance the user
                  experience. The core features of the dashboard are the various CRUD operations,
                  such as project CRUD, brand CRUD, category CRUD, gender CRUD, commission CRUD,
                  merchant CRUD, shipping CRUD, and payment CRUD. <br />
                  With project CRUD, the admin can manage and update projects related to the
                  e-commerce website. The brand CRUD feature enables the admin to add, delete or
                  modify the brands associated with the products available on the website.
                  Similarly, category CRUD allows the admin to manage the categories of the products
                  available on the website, while gender CRUD allows the admin to manage
                  gender-specific products. <br />
                  The commission CRUD feature of <strong>Kacy Beauty</strong> enables the admin to
                  manage the commission of merchants, while merchant CRUD allows the admin to manage
                  the merchants registered on the website. The shipping CRUD feature enables the
                  admin to manage the shipping options available for the products, while payment
                  CRUD enables the admin to manage the payment methods available for customers.{" "}
                  <br />
                  The integration of modern frontend technologies such as React JS, Redux Tool kit,
                  Material UI, and Tailwind CSS with the dashboard makes it responsive,
                  user-friendly, and visually appealing. The use of Daisy UI plugin for Tailwind CSS
                  makes the interface even more intuitive and easy to navigate. <br />
                  In conclusion, <strong>Kacy Beauty</strong> is an admin dashboard for an
                  e-commerce website that contains several features designed to enhance the
                  management of various e-commerce activities. Its integration of modern frontend
                  technologies and CRUD operations makes it a popular choice among e-commerce
                  website owners looking for an efficient and reliable admin dashboard.
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

export default AdminDashboard;
