"use client"
import LiveChat from '@/componnents/LiveChat';
import NavBar from '@/componnents/NavBar';
// Streamer.tsx
import React, { useEffect, useRef } from 'react';
// import Peer from 'peerjs';


function Streamer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);



  useEffect(() => {
    // const peer = new Peer();

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

        }
        //    peer.call('signal', stream);
        //       console.log('video');



      })
      .catch((error) => {
        console.error('Error accessing media devices: ', error);
      });
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <NavBar />
      <div style={{ display: "flex", gap: "2rem", flexDirection: "row", width: "100vw", padding: "1rem 5rem", alignItems: "center" }}>
        <div>
          <video ref={videoRef} autoPlay muted playsInline ></video>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
    </div>
  );
}

export default Streamer;