import React from "react";
import axios from "axios";

const baseURL = "https://api.imgflip.com/get_memes";
const Meme = () => {
  const [randImage, setRandImage] = React.useState("./logo192.png");

  const [image, setImage] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setImage(response.data.data.memes); // get the data returned from the API and assign it to image
    });
  }, []);

  function changeImage() {
    let randNum = Math.floor(Math.random() * image.length); //set a random number based on the length of the array returned
    const url = image[randNum].url; // The API returns an object that has the url of the image
    setRandImage(url);
  }
  const [myInput, setMyInput] = React.useState({
    topText: "",
    bottomText: "",
  });

  function handleChange(event) {
    setMyInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="meme">
      <div className="meme-input">
        <input
          className="top-input"
          type="text"
          name="topText"
          value={myInput.topText}
          onChange={handleChange}
          placeholder="Top Text"
        />
        <input
          className="bottom-input"
          type="text"
          name="bottomText"
          value={myInput.bottomText}
          onChange={handleChange}
          placeholder="Bottom Text"
        />
      </div>
      <div className="meme-button">
        <button type="button" onClick={changeImage}>
          New Meme Image
        </button>
      </div>
      <div className="meme-image">
        <p className="top-text">{myInput.topText}</p>
        <img src={randImage} alt="random" />
        <p className="bottom-text">{myInput.bottomText}</p>
      </div>
    </div>
  );
};

export default Meme;
