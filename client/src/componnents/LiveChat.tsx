import React from 'react'
import "../styles/liveChat.css"
import Image from 'next/image'
import img from '../../public/Assests/images/Ellipse 251.png'
const LiveChat = () => {
  return (
    <div className='chat-box'>
        <span className='chat-header'>Top Chat</span>
        <div className='mesaage-container'>
        <div className='one-message'>
            <div className='image-frame'>
                <Image className='circle-image' src={img} alt="" />
            </div>
            <span className='message-content'>Hello</span>
        </div>
        <div className='one-message'>
            <div className='image-frame'>
                <Image className='circle-image' src={img} alt="" />
            </div>
            <span className='message-content'>Hello</span>
        </div>
        </div>
        <div className='input-section'>
        <div className='image-frame2'>
                <Image className='circle-image' src={img} alt="" />
            </div>
                <input className='message-input' type="text" placeholder='Write Your Message'/>
                <div className='send-button'>
                    <span>Send</span>
                </div>
        </div>
    </div>
  )
}

export default LiveChat