import React from "react";

const Meme = () => {
  return (
    <div className="meme">
      <div className="meme-input">
        <input
          className="top-text"
          type="text"
          name="topText"
          value={""}
          placeholder="Top Text"
        />
        <input
          className="bottom-text"
          type="text"
          name="bottomText"
          value={""}
          placeholder="Bottom Text"
        />
      </div>
      <div className="meme-button">
        <button type="button">New Meme Image</button>
      </div>
    </div>
  );
};

export default Meme;
