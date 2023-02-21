import React from 'react'
import Meme from './Meme'

const MemesList = ({topText,image,bottomText,id}) => {
 
 const [imageList, setImageList] = React.useState([])
    
    function memeList(){
        setImageList([image])
    }
 return (
    
        <Meme key={id} topText={topText} image={image} bottomText={bottomText}/>
   
  )
}

export default MemesList