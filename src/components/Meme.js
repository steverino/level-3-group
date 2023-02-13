import React from 'react'

const Meme = () => {
  return (
    <div className='meme'>
      <input className='top-text' type="text" name='topText' value={''} />
      <input className='bottom-text' type="text" name='bottomText' value={''} />
    </div>
  )
}

export default Meme