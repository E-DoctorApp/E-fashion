"use client"
import React, { FunctionComponent, useCallback, useState, ChangeEvent, FormEvent, useEffect } from "react";
// import axios from 'axios';
import "../../styles/update.css";
import image from "../../../public/Assests/images/Rectangle 23.png"
import { useDispatch, useSelector } from "react-redux";
// import { signupUser } from "../../store/auth";
import { RootState, AppDispatch } from '../../store/index'
import img from "../../images/image boy.png"
import icon from "../../images/Vector.png"
import Image from "next/image";
import { getUser } from "@/store/signinReduser";
import axios from "axios";


// interface FormData {
//   name: string;
//   email: string;
//   password: string;
//   image: string,

// }
interface User {
  name: string,
  newPassword: string;
  confirmPassword: string;
  email: string,
  currentPassword: string
}

const UpdateAccount: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setlastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const user: any = useSelector((state: RootState) => state.currentUser.user)
  console.log(user);

  const modifyProfile = (user: User, e: React.MouseEvent) => {
    e.preventDefault();

    if (user.newPassword.length < 8) {
      alert("Enter a strong password: ");
      return
    }
    if (user.newPassword === user.confirmPassword) {
      axios
        .post(`http://localhost:5000/api/user/modify`, user)
        .then((res) => {

          alert("You successfully updated your account");
          // navigate("/home" )
        })
        .catch((err) =>


          alert("check your password is incorrect")

        );
    }
  };

  return (
    <div className="sign-up">
      <div className="profile-image-frame">
        <Image src={image} alt="" />
      </div>
      <div className="form-container">
        <h2>Edit Your Profile</h2>
        <input className="large-input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <div className="name-container" >
          <input className="small-input" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
          <input className="small-input" type="text" placeholder="Last Name" onChange={(e) => setlastName(e.target.value)} />
        </div>
        <input className="large-input" type="text" placeholder="Old Password" onChange={(e) => setCurrentPassword(e.target.value)} />
        <input className="large-input" type="text" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
        <input className="large-input" type="text" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className="submit-button"><span>Edit</span></div>
      </div>
    </div>
  )









}


export default UpdateAccount