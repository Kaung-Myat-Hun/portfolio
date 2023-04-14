import React, { useEffect, useState, useRef } from "react";
import styles from "./Contact.module.css";
import axios from "axios";
import Loading from "../CustomLoading/CustomLoading";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm("service_dp091n8", "template_grmwjkp", form.current, "yPwzuRphfUlZVl_IX").then(
      (result) => {
        // show the user a success message
        alert("email sent");
        window.location.reload(true);
      },
      (error) => {
        // show the user an error
        alert(error);
      }
    );
  };

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
        <div className={`${styles.main} flex max-[400px]:flex-col justify-around`}>
          <div className={`w-6/12 max-[400px]:w-full`}>
            <form
              ref={form}
              onSubmit={sendEmail}
              action=""
              className={`flex flex-col justify-center items-center max-[400px]:mt-20 max-[400px]:w-full mt-32 w-11/12`}>
              <input
                placeholder=" Name"
                className={`text-2xl m-2 p-3 bg-slate-100 w-8/12`}
                type="text"
                name="user_name"
              />
              <input
                placeholder=" Mail"
                className={`text-2xl m-2 p-3 bg-slate-100 w-8/12`}
                type="email"
                name="user_email"
              />
              <input
                placeholder=" Phone"
                className={`text-2xl m-2 p-3 bg-slate-100 w-8/12`}
                type="text"
                name="user_phone"
              />
              <textarea
                className={`text-2xl w-8/12 bg-slate-100 m-2 p-3`}
                name="message"
                id=""
                cols="10"
                rows="10"
                placeholder="Discuss Our Project"></textarea>
              <button className={`btn w-5/12 text-white text-xl border-none bg-slate-600 mt-10`}>
                Send
              </button>
            </form>
          </div>
          <div className={`w-6/12 max-[400px]:mx-auto max-[400px]:w-full  my-10`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1152.501713243559!2d96.18037019657116!3d16.799416790365235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1676821725103!5m2!1sen!2smm"
              className={styles.frame}
              width="450"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div>
              <table className={`text-xl text-black mt-10 max-[400px]:w-11/12 max-[400px]:m-10`}>
                <tr>
                  <td>Phone</td>
                  <td>
                    :{" "}
                    <a className={`hover:text-blue-600`} href="viber://chat?number=+959752815691">
                      +959 752 815 691
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>: No.(90), AungMingalar Street, KyaukMyaung Qrt, Yangon</td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ display: "flex" }}>
                    <a
                      href="https://www.facebook.com/profile.php?id=100024004446712"
                      target="blank"
                      className={` hover:fill-blue-600 text-2xl m-3`}>
                      <svg
                        width="20px"
                        height="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </a>
                    <a href="/about-me" className={` hover:fill-blue-600 text-2xl m-3`}>
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 70 70"
                        enable-background="new 0 0 70 70">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M47.248,22.583c1.104,0,1.335-0.284,1.335-1.389v-8.863c0-1.104-0.23-1.748-1.335-1.748H23.936 c-1.104,0-2.353,0.644-2.353,1.748v8.863c0,1.104,0.248,1.389,1.353,1.389H47.248z M23.583,12.583h23v8h-23V12.583z"></path>{" "}
                            <path d="M62.341,12.866l-8.226-8.649c-0.75-0.75-1.803-1.634-2.863-1.634H17.439c-2.209,0-3.856,2.716-3.856,4.925v55.075h-3 V30.417c0-1.104-0.896-2-2-2s-2,0.896-2,2v35c0,1.104,1.229,1.166,2.334,1.166h8.522h6.478h35.522c2.209,0,4.144-0.866,4.144-3.075 V15.694C63.583,14.634,63.091,13.616,62.341,12.866z M58.791,14.583h-7.208V7.86L58.791,14.583z M23.917,62.583h-6.334v-56h32.014 l-0.014,8.834c0,0.553,0.781,1.166,1.334,1.166h8.666v46H23.917z"></path>{" "}
                            <path d="M33.917,26.583h-10c-0.553,0-1,0.447-1,1s0.447,1,1,1h10c0.553,0,1-0.447,1-1S34.47,26.583,33.917,26.583z"></path>{" "}
                            <path d="M50.917,26.583h-13c-0.553,0-1,0.447-1,1s0.447,1,1,1h13c0.553,0,1-0.447,1-1S51.47,26.583,50.917,26.583z"></path>{" "}
                            <path d="M23.917,33.583h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1S23.364,33.583,23.917,33.583z"></path>{" "}
                            <path d="M39.917,32.583c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1s0.447,1,1,1h7C39.47,33.583,39.917,33.136,39.917,32.583z"></path>{" "}
                            <path d="M31.917,36.583h-8c-0.553,0-1,0.447-1,1s0.447,1,1,1h8c0.553,0,1-0.447,1-1S32.47,36.583,31.917,36.583z"></path>{" "}
                            <path d="M50.917,36.583h-15c-0.553,0-1,0.447-1,1s0.447,1,1,1h15c0.553,0,1-0.447,1-1S51.47,36.583,50.917,36.583z"></path>{" "}
                            <path d="M50.917,31.583h-7c-0.553,0-1,0.447-1,1s0.447,1,1,1h7c0.553,0,1-0.447,1-1S51.47,31.583,50.917,31.583z"></path>{" "}
                            <path d="M42.917,56.583h-7c-0.553,0-1,0.447-1,1s0.447,1,1,1h7c0.553,0,1-0.447,1-1S43.47,56.583,42.917,56.583z"></path>{" "}
                            <path d="M50.917,51.583h-8c-0.553,0-1,0.447-1,1s0.447,1,1,1h8c0.553,0,1-0.447,1-1S51.47,51.583,50.917,51.583z"></path>{" "}
                            <path d="M22.917,52.583c0,0.553,0.447,1,1,1h15c0.553,0,1-0.447,1-1s-0.447-1-1-1h-15C23.364,51.583,22.917,52.03,22.917,52.583z"></path>{" "}
                            <path d="M30.917,56.583h-7c-0.553,0-1,0.447-1,1s0.447,1,1,1h7c0.553,0,1-0.447,1-1S31.47,56.583,30.917,56.583z"></path>{" "}
                            <path d="M23.917,43.583h6c0.553,0,1-0.447,1-1s-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1S23.364,43.583,23.917,43.583z"></path>{" "}
                            <path d="M50.917,41.583h-17c-0.553,0-1,0.447-1,1s0.447,1,1,1h17c0.553,0,1-0.447,1-1S51.47,41.583,50.917,41.583z"></path>{" "}
                            <path d="M36.917,46.583h-13c-0.553,0-1,0.447-1,1s0.447,1,1,1h13c0.553,0,1-0.447,1-1S37.47,46.583,36.917,46.583z"></path>{" "}
                            <path d="M50.917,46.583h-10c-0.553,0-1,0.447-1,1s0.447,1,1,1h10c0.553,0,1-0.447,1-1S51.47,46.583,50.917,46.583z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default Contact;
