import { useEffect, useState } from "react";
import axios from "axios";
import "../css/undergoingprojects.css";

const UnderGoingProjects = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const res = await axios.get("/api/GetUnderGoingProjects");

    const data = res.data.data;
    setImages(data);
  };

  const path = "http://localhost:3000/UnderGoingProjects/";

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="undergoing-projects-outer-div">
      <div className="undergoing-projects-heading">UnderGoingProjects</div>

      {images.map((ele) => {
        return (
          <img
            key={ele._id}
            src={path + ele.image}
            alt="project image"
            className="undergoing-projects-project-image"

          />
        );
      })}
    </div>
  );
};
export default UnderGoingProjects;
