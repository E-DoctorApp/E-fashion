"use client"
import React, { useEffect, useState } from 'react'
import "../styles/liveChat.css"
import Image from 'next/image'
import img from '../../public/Assests/images/Ellipse 251.png'
import {io} from 'socket.io-client';

interface IMsgDataTypes {
    roomId: String | number;
    user: String;
    msg: String;
    time: String;
  }

const LiveChat = () => {
    const socket:any = io("http://localhost:3003")
    const roomId = 1
    const username = "jdidi"
    const [currentMsg, setCurrentMsg] = useState("");
    const [chat, setChat] = useState<IMsgDataTypes[]>([]);
  
    const sendData = async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (currentMsg !== "") {
        const msgData: IMsgDataTypes = {
          roomId,
          user: username,
          msg: currentMsg,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };
        await socket.emit("send_msg", msgData);
        setCurrentMsg("");
      }
    };
  
  
    useEffect(() => {
      socket.on("receive_msg", (data: IMsgDataTypes) => {
        console.log("receive_msg",data);
        
        setChat([data,...chat]);
      });
    }, [socket]);
    return (
        <div className='chat-box'>
            <span className='chat-header'>Top Chat</span>
            <div className='mesaage-container'>
                {chat.map((msg,i)=>{
                    return (
                        <div key={i} className='one-message'>
                    <div className='image-frame'>
                        <Image className='circle-image' src={img} alt="" />
                    </div>
                    <span className='message-content'>{msg.msg}</span>
                </div>
                    )
                })}
                
            </div>
            <div className='input-section'>
                <div className='image-frame2'>
                    <Image className='circle-image' src={img} alt="" />
                </div>
                <input className='message-input' type="text" placeholder='Write Your Message' onChange={(e)=>setCurrentMsg(e.target.value)} />
                <div className='send-button' onClick={(e:React.MouseEvent<HTMLElement>)=>{
                    sendData(e)
                }} >
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default LiveChat