import { useState } from "react";
import axios from "axios";
import "../css/AddUnderGoingProjects.css"

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
      {/* <form onSubmit={submitImage}>
        <input type="file" id="img" accept="image/*" onChange={onInputChange} />
        <br />
        <br />
        <button type="submit ">submit</button>
      </form> */}

      


<div className="body2">
        <div className="text">
            <h3>File<br/>Upload</h3>
            <p>You can no longer see or identify yourself solely as a member of a tribe, but as a citizen of the nation of one people working towards a common purpose. Through love, tribes have been intermixing colors to reveal a new rainbow world. And as more time passes, this racial and cultural blending will make it harder for humans to side with one race, nation or religion over another.</p>
            <input type="submit" value="Read More" className="Readbutton"/> 
        </div>
        <div className="image">
            <form onSubmit={submitImage} >

            <div className="display_image"><img src="../../public/images/logo bgremove.png" id="pic1"/></div>
            <h4>Only image.png or image.jpg accepted</h4>
            <label htmlFor="image_input">Choose Pictures</label>
            <input type="file" id="image_input" accept="image/*" onChange={onInputChange}/>
            <script src="script.js"></script>
            <button type="submit" >Submit</button>
            </form>
        </div>
    </div>


    </>
  );
};
export default AddUnderGoingProjects;
