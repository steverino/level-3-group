import React from "react";
import Meme from "./Meme";

const MemesList = ({ topText, image, bottomText, id }) => {
  const [text, setText] = React.useState({
    topText: topText,
    bottomText: bottomText,
  });

  const onChange = (event) => {
    if (event.target.name === "editTopText") {
      setText({
        topText: event.target.value,
        bottomText: text.bottomText,
      });
    }
    if (event.target.name === "editBottomText") {
      setText({
        topText: text.topText,
        bottomText: event.target.value,
      });
    }
  };

  
  function editText() {}

  return (
    <>
      <div>
        <Meme
          key={id}
          id={id}
          topText={text.topText}
          image={image}
          bottomText={text.bottomText}
        />
      </div>
      <div className="list-inputs">
        <input
          type="text"
          name="editTopText"
          value={text.topText}
          onChange={onChange}
        />
        <input
          type="text"
          name="editBottomText"
          value={text.bottomText}
          onChange={onChange}
        />
        <button type="button" name="editItemBtn" onClick={editText}>
          Edit
        </button>
        
      </div>
    </>
  );
};

export default MemesList;
