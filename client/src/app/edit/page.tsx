"use client"
import img1 from "../../../public/Assests/images//Ellipse 251.png"
import img2 from "../../../public/Assests/images/Cover Image.png"
import img3 from "../../../public/Assests/images/Rectangle 1901 (1).png"
import asset from "../../../public/Assests/images/editProfile/Vector.png"
import asset1 from "../../../public/Assests/images/editProfile/ph.svg"
import im1 from '../../../public/Assests/images/editProfile/Rectangle 1906.png'
import im2 from '../../../public/Assests/images/editProfile/Rectangle 1907.png'
import im3 from '../../../public/Assests/images/editProfile/Rectangle 1908.png'
import im4 from '../../../public/Assests/images/editProfile/Rectangle 1909.png'
import im5 from '../../../public/Assests/images/editProfile/Rectangle 1910.png'
import im6 from '../../../public/Assests/images/editProfile/Rectangle 1911.png'
import im7 from '../../../public/Assests/images/editProfile/Rectangle 1912.png'
import im8 from '../../../public/Assests/images/editProfile/Rectangle 1913.png'
import im9 from '../../../public/Assests/images/editProfile/Rectangle 1901.png'
import like from '../../../public/Assests/images/editProfile/Vector (15).png'
import comm from '../../../public/Assests/images/editProfile/Vector (16).png'
import share from '../../../public/Assests/images/editProfile/Vector (17).png'
import sss from '../../../public/Assests/images/editProfile/Vector (18).png'


// import axios from "axios"

import img4 from "../../images/Rectangle 1889.png"

import React, { useState, FunctionComponent, ChangeEvent, useEffect, use } from "react";
import "../../styles/editProfile1.css"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store"
import { getUser } from "@/store/signinReduser"
import NavBar from "@/componnents/NavBar"
import Footer from "@/componnents/Footer"
import Link from "next/link"
import axios from "axios"
import OnePost from "@/componnents/OnePost"
import { fetchposts } from "@/store/AllPostsSlice"
// import NavBar from "../NavBar"
// import Footer from "../Footer"
// import UpdateAccount from "./update"
// import { Link } from "react-router-dom"




interface User {
    id: number,
    email: string;
    name: string;
    password: string;
    image: string,
    dateOfBirth: string,
}

const EditProfile: FunctionComponent = () => {
    const dispatch: AppDispatch = useDispatch()
    const user: any = useSelector((state: RootState) => state.currentUser.user)
    const posts: any = useSelector((state: RootState) => state.posts.posts)
    const [update, setUpdate] = useState(true)

    const [allimage, setAllImage] = useState<string[]>([])
    const [image, setImage] = useState<string>('')
    const [userImage, setImageUser] = useState<string>('');
    useEffect(() => {
        dispatch(getUser())
        dispatch(fetchposts(user.id))
    }, [user.id,update])

    // useEffect(() => {
    //     dispatch(getUser())
    // }, [update])



    ////////////////////////////update//////////////////
    // const UpdateUser = (id: number, image1: string) => {
    //     axios.put(`http://localhost:5000/api/user/${id}`, { id: user.id, name: user.name, email: user.email, image: image1, password: user.password, dateOfBirth: user.dateOfBirth })
    //         .then((response) => {
    //             // setUser({ id: user.id, name: user.name, email: user.email, image: image1, password: user.password, dateOfBirth: user.dateOfBirth })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    const updateProfilePhoto = async (body: object) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/users/${user.id}`, body)
            console.log(res);
            setUpdate(!update)
        } catch (error) {
            console.log(error);
        }
    }
    //////////////////////////////////cloud///////////////////
    // const profileUpload = async (e: any) => {
    //     const formData = new FormData()
    //     formData.append("file", e.target.files[0])
    //     formData.append("upload_preset", "oztadvnr")
    //     await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload", formData).then((response) => {
    //         setImage(response.data["secure_url"])
    //         allimage.push(response.data["secure_url"])
    //         setAllImage(allimage)
    //     }).catch((error) => {
    //         throw error
    //     })

    // }

    const profileUpload1 = async (e: any) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "oztadvnr")

        await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload", formData).then((response) => {
            updateProfilePhoto({ profileImage: response.data["secure_url"] })


            // setImageUser(response.data["secure_url"])

            // setUser({ id: user.id, name: user.name, email: user.email, image: response.data["secure_url"], password: user.password, dateOfBirth: user.dateOfBirth })

            // UpdateUser(user.id, response.data["secure_url"])


        }).catch((error) => {
            throw error
        })

    }
    //   localStorage.setItem('user', JSON.stringify(user));
    return (
        <div>
            <NavBar />
            <div className="edit-profile-page">
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="overlap-2">
                            <div className="banner">
                                <div className="overlap-3">
                                    <div className="overlap-4">
                                        <img className="cover-image" alt="Cover image" src={user.coverImage} />
                                        <Image className="edit-cover-image" alt="Edit cover image" style={{ width: "1.1rem", height: "1.2rem" }} src={asset} />
                                        <div className="profile-pic">
                                            <div className="overlap-group-2">
                                                <img alt="image" className="ellipse" src={user.profileImage} />
                                                <div className="ellipse-2" />
                                                <input type="file" className="vector" alt="Vector" src={asset1} onChange={(e) => { profileUpload1(e) }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="edit-profile">
                                        <Image className="vector-2" alt="Vector" src={asset} />
                                        <Link href="/update">  <div className="text-wrapper-14" >   Edit Profile</div></Link>
                                    </div>
                                </div>
                                <div className="text">
                                    <div className="text-wrapper-15">{user.firstName}</div>
                                    <div className="text-wrapper-16">{user.email}</div>
                                    <p className="text-wrapper-17">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="photos-sec">
                            <div className="overlap-5" style={{
                                display: "grid",
                                gap: "0.2rem",
                                gridTemplateColumns: "repeat(3,1fr)"
                            }}>
                                {posts.length > 0 ? posts?.map((element: any) => {
                                    return (
                                        <img style={{ borderRadius: "0.3rem" }} key={element.id} className="rectangle" alt="Rectangle" src={element.image} />
                                    )
                                }) : <h1 style={{ textAlign: "center" }}>Loading ...</h1>}
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                            {posts.length > 0 ? posts?.map((post: any) => <OnePost key={post.id} post={post} />) : <h1 style={{ textAlign: "center" }}>Loading ...</h1>}
                        </div>
                        <div className="my-group-sec">
                            <div className="overlap-7">
                                <div className="group-wrapper">
                                    <div className="group-11">
                                        <div className="overlap-group-6">
                                            <div className="text-wrapper-30">My Groups</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-12">
                                    <div className="frame-4">
                                        <div className="text-wrapper-31">View</div>
                                    </div>
                                    <img className="photo" alt="Photo" src="photo-1.png" />
                                    <div className="text-wrapper-32">Zalando</div>
                                    <div className="text-wrapper-33">24k M</div>
                                </div>
                                <div className="group-13">
                                    <div className="frame-5">
                                        <div className="text-wrapper-31">View</div>
                                    </div>
                                    <div className="text-wrapper-34">Zara</div>
                                    <div className="text-wrapper-35">24k M</div>
                                </div>
                                <div className="group-14">
                                    <div className="frame-5">
                                        <div className="text-wrapper-31">View</div>
                                    </div>
                                    <div className="text-wrapper-34">Cartier</div>
                                    <div className="text-wrapper-35">24k M</div>
                                </div>
                                <div className="text-wrapper-36">See All Groups</div>
                                <img className="photo-2" alt="Photo" src="photo-2.png" />
                                <img className="photo-3" alt="Photo" src="photo-3.png" />
                                <div className="frame-6">
                                    <div className="text-wrapper-37">Exclusive Groups</div>
                                    <img className="vector-9" alt="Vector" src="vector-10.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )




};

export default EditProfile
