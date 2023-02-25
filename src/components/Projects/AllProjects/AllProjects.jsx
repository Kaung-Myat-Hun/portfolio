import React, { useEffect, useState } from "react";
import Loading from "../../CustomLoading/CustomLoading";
import axios from "axios";
import { Data } from "./data.js";
import { useNavigate } from "react-router-dom";
import styles from "./Allprojects.module.css";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function AllProjects() {
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState({});

  return (
    <>
      <h3 className={`m-20 text-3xl font-bold text-black`}>All Projects</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.mainContainer} style={{ display: "flex", flexWrap: "wrap" }}>
          {Data.map((item) => (
            <div className={styles.chatMain} key={item.id}>
              <div className={`flex`}>
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className={`${styles.projectImage} max-[400px]:w-9/12 max-[400px]:h-80`}
                    onClick={() => {
                      setOpen(true);
                      setModalData(item);
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.2rem",
                      marginBottom: "30px",
                    }}>
                    {item.title}
                  </p>
                  {/* <div>
                    {item.imgs.map((item, index) => (
                      <Carousel key={index}>
                        <img src={item} alt="" className={styles.showImage} />
                      </Carousel>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style} className={styles.box}>
              <div>
                <Carousel>
                  {modalData?.imgs?.map((item) => (
                    <img src={item} alt="" style={{ width: "600px", height: "300px" }} />
                  ))}
                </Carousel>
                <table className={styles.table}>
                  <tr>
                    <td colSpan="2">
                      <p className={`text-3xl font-bold`}>Project Details</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Project Name :</td>
                    <td>{modalData.title}</td>
                  </tr>

                  <tr>
                    <td>Project Type</td>
                    <td>{modalData.project_type}</td>
                  </tr>

                  <tr>
                    <td>{modalData.project_type === "real world" ? "Link" : "Demo"}</td>
                    <td>
                      <a href={modalData.link} target="blank">
                        {modalData.title}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>{modalData.source_code === "" ? "" : "Source Code"}</td>
                    <td>
                      {modalData.source_code === "" ? (
                        ""
                      ) : (
                        <a href={modalData.source_code} target="blank">
                          Source Code
                        </a>
                      )}
                    </td>
                  </tr>
                </table>
                <div>
                  <h4 className={`text-2xl text-black font-bold ml-32`}>Description</h4>
                  <p className={`text-2xl text-black  my-8 ml-32`}>{modalData.description}</p>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}

export default AllProjects;
