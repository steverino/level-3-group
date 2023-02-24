import React from 'react'
import axios from 'axios';
import Header from './components/Header'
import Meme from './components/Meme'
import MemesList from './components/MemesList';

const baseURL = "https://api.imgflip.com/get_memes";

const App = () => {
  
  const [image, setImage] = React.useState(baseURL);
  let randNum = Math.floor(Math.random() * image.length); //set a random number based on the length of the array returned
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setImage(response.data.data.memes); // get the data returned from the API and assign it to image
    });
    
  }, []);
  
  
  const [imageId, setImageId] = React.useState()
  
  const [randImage, setRandImage] = React.useState('logo192.png')
  
  let uid = Date.now() //Math.floor(Math.random() * randNum )
  function changeImage() {
    const url = image[randNum].url; // The API returns an object that has the url of the image
    setRandImage(url);
    
    setImageId(uid)
  
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

  const [list,setList] = React.useState([])
  const [data, setData] = React.useState()

  function sendToList(){
    
    setData((prevData)=>{
      return {
        ...prevData,
        topText: myInput.topText,
        bottomText: myInput.bottomText,
        image: randImage,
      }
    });

    const deleteMeme = (uid) => {
      const newList = list.filter((item) => item.id !== uid)
     setList(newList)
    };
    
    setList((prevList)=> {
      
      return[
      ...prevList,
      <li key={uid}>
        <MemesList id={uid} topText={myInput.topText} image={randImage} bottomText={myInput.bottomText}/>
        <button type="button" name="deleteItemBtn" onClick={deleteMeme } >Delete</button>
      </li>
      ]
    })
  }
  
  return (
    <div className='container'>
      <div className="wrapper">
      <Header/>
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
      <div className='content'>
        <div>
        <Meme topText={myInput.topText} image={randImage} bottomText={myInput.bottomText}/>

        </div>
        <button onClick={sendToList}>Send to List</button>
      </div>
      <section>
        <ul>
           {list }
        </ul>
      </section>
      </div>
    </div>
  )
}

export default App