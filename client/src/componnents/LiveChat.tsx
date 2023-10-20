"use client"
import React, { useEffect, useState, useRef } from 'react'
import "../styles/liveChat.css"
import Image from 'next/image'
import img from '../../public/Assests/images/Ellipse 251.png'
import { io } from 'socket.io-client';
import { AppDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '@/store/signinReduser'
import axios from 'axios'
import { useAmp } from 'next/amp'

interface IMsgDataTypes {
    chatRoomId: String | number;
    sender: number;
    content: String;
    // time: String;
}


const LiveChat = () => {
    const socket: any = io("http://localhost:3003")
    const chatRoomId = 3
    const dispatch: AppDispatch = useDispatch()
    const user: any = useSelector((state: RootState) => state.currentUser.user)
    const lastMessage: any = useRef(null)
    const [currentMsg, setCurrentMsg] = useState("");
    const [chat, setChat] = useState<IMsgDataTypes[]>([]);

    useEffect(() => {
        dispatch(getUser())
        getAllMessages()
    }, []);
    const getAllMessages = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/messages/getByRoom/3')
            setChat(res.data)
        } catch (error) {
            console.log(error);

        }
    }

    const sendData = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (currentMsg !== "") {
            
            const msgData: IMsgDataTypes = {
                chatRoomId,
                sender: user.id,
                content: currentMsg,
                //   time:
                //     new Date(Date.now()).getHours() +
                //     ":" +
                //     new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_msg", msgData);
            handlePostMessage(msgData)
            setCurrentMsg("");
        }
    };

    const handlePostMessage = async (body: IMsgDataTypes) => {
        try {
            const res = await axios.post('http://localhost:5000/api/messages/add', body)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        socket.on("receive_msg", (data: IMsgDataTypes) => {
            setChat(previous => [...previous, data]);
        });
    }, [socket]);
    useEffect(() => {
        lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat.length]);
    return (
        <div className='chat-box'>
            <span className='chat-header'>Top Chat</span>
            <div className='mesaage-container'>
                {chat.map((msg:any, i) => {
                    return (
                        <div ref={lastMessage} key={i} className='one-message'>
                            <div className='image-frame'>
                                <img className='circle-image' src={msg.User.profileImage} alt="" />
                            </div>
                            <span className='message-content'>{msg.content}</span>
                        </div>
                    )
                })}
            </div>
            <div className='input-section'>
                <div className='image-frame2'>
                    <img className='circle-image' src={user.profileImage} alt="" />
                </div>
                <input
                    onKeyUp={(e:any) => {
                        if (e.key === "Enter") {
                            sendData(e)
                        }
                    }}
                    className='message-input' type="text" placeholder='Write Your Message' value={currentMsg} onChange={(e) => setCurrentMsg(e.target.value)} />
                <div className='send-button'
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        sendData(e)
                    }} >
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default LiveChat