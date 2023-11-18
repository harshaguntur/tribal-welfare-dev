import { useState } from "react";
import axios from "axios";

const AddUnderGoingProjects = () => {
  const [image, setImage] = useState();

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    await axios.post("/api/AddUnderGoingProjects", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]); 
  };


  
  return (
    <>
      <form onSubmit={submitImage}>
        <input type="file" id="img" accept="image/*" onChange={onInputChange} />
        <br />
        <br />
        <button type="submit ">submit</button>
      </form>
    </>
  );
};
export default AddUnderGoingProjects;
