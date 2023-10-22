import Image from 'next/image'
import React from 'react'

import asset1 from "../../../public/Assests/images/editProfile/ph.svg"
import like from '../../public/Assests/images/editProfile/Vector (15).png'
import comm from '../../public/Assests/images/editProfile/Vector (16).png'
import share from '../../public/Assests/images/editProfile/Vector (17).png'
import sss from '../../public/Assests/images/editProfile/Vector (18).png'


const OnePost = ({ post }: any) => {
    return (
        <div className="feed-sec">
            <div className="comment-sec">
                <div className="overlap-group-4">
                    <input alt='input'  placeholder='Write Your Comment' style={{display:"flex",alignItems:"center", color:"wheat",fontSize:"0.8rem",paddingLeft:"3rem",width: "90%",height:"90%",borderRadius:"150px",outline:"none",border:"none", background: "#464b67" }} />
                    <img className="ellipse-3" alt="Ellipse" style={{ borderRadius: "50%" }} src={post.User.profileImage} />
                    <Image className="vector-3" alt="Vector" src={sss} />
                </div>
            </div>
            <img className="ellipse-4" alt="Ellipse" style={{ borderRadius: "50%" }} src={post.User.profileImage} />
            <div className="text-wrapper-21">{post.User.firstName}</div>
            <div className="text-wrapper-22">{post.User.email}</div>
            <div className="text-wrapper-23">4m</div>
            <p className="text-wrapper-24" style={{ marginLeft: "2rem" }}>{post.content} </p>
            <img className="rectangle-9" style={{ marginTop: "1rem", objectFit: "cover", borderRadius: "1rem" }} alt="Rectangle" src={post.image} />
            <div className="frame-2">
                <div className="group-4">
                    <div className="group-5">
                        <Image className="vector-4" alt="Vector" src={like} />
                        <div className="text-wrapper-25">Liked</div>
                    </div>
                    <div className="text-wrapper-26">You and 12k others.</div>
                </div>
                <div className="group-6" style={{ display: "flex", alignItems: "center" }} >
                    <div className="group-7" >
                        <div className="text-wrapper-27">Comment</div>
                        <Image className="vector-5" alt="Vector" src={comm} />
                    </div>
                    <div className="text-wrapper-28">12 Comments</div>
                </div>
                <div className="group-8">
                    <div className="group-9">
                        <div className="text-wrapper-29">Share</div>
                        <Image className="vector-6" alt="Vector" src={share} />
                    </div>
                    <div className="text-wrapper-26">3 Shares</div>
                </div>
            </div>
        </div>
    )
}

export default OnePost