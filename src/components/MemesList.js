import React from "react";
import Meme from "./Meme";

const MemesList = ({ topText, image, bottomText, id }) => {
  const [imageList, setImageList] = React.useState([]);

    function editText(){
        console.log('test');
    }

  return (
   <>
    <div>
    <Meme key={id} topText={topText} image={image} bottomText={bottomText} />
    </div>
    <div>
        <input type="text" name="editTopText" />
        <input type="text" name="botomText" />
        <button type="button" name="editItem" onClick={editText}>Edit</button>
        <button type="button" name="saveItem">Save Changes</button>
    </div>
    </>
  );
};

export default MemesList;
