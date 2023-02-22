import React from "react";


const Meme = ({topText,image,bottomText,id}) => {
  
  return (
    <div className="meme">
      
      <div className="meme-image" >
        <p className="top-text" name="memeTop">{topText}</p>
        <img src={image} alt="random" />
        <p className="bottom-text" name="memeBottom">{bottomText}</p>
      </div>
    </div>
  );
};

export default Meme;
