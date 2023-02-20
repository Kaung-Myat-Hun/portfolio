import React, { useEffect, useState } from "react";
import Loading from "../../CustomLoading/CustomLoading";
import axios from "axios";

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
  return <>{loading ? <Loading /> : <div>AllProjects</div>}</>;
}

export default AllProjects;
