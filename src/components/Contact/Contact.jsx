import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={`${styles.main} flex justify-around`}>
      <div className={`w-6/12`}>
        <form action="" className={`flex flex-col justify-center items-center mt-32 w-11/12`}>
          <input
            placeholder=" Name"
            className={`text-2xl m-2 p-3 bg-slate-100 w-8/12`}
            type="text"
          />
          <input
            placeholder=" Mail"
            className={`text-2xl m-2 p-3 bg-slate-100 w-8/12`}
            type="text"
          />
          <input
            placeholder=" Phone"
            className={`text-2xl m-2 p-3 bg-slate-100 w-8/12`}
            type="text"
          />
          <textarea
            className={`text-2xl w-8/12 bg-slate-100 m-2 p-3`}
            name=""
            id=""
            cols="10"
            rows="10"
            placeholder="Discuss Our Project"></textarea>
          <button className={`btn w-5/12 bg-slate-600 mt-10`}>Send</button>
        </form>
      </div>
      <div className={`w-6/12 my-10`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1152.501713243559!2d96.18037019657116!3d16.799416790365235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1676821725103!5m2!1sen!2smm"
          width="450"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <table className={`text-xl text-black mt-10`}>
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
              <td colSpan="2">
                <a
                  href="https://www.facebook.com/profile.php?id=100024004446712"
                  target="blank"
                  className={` hover:text-blue-600 text-2xl`}>
                  facebook
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
