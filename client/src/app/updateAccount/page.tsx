"use client"
import React, { FunctionComponent, useCallback, useState, ChangeEvent, FormEvent } from "react";
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';
import "../../styles/update.css";
import image from "../../../public/Assests/images/Rectangle 23.png"
// import { useDispatch, useSelector } from "react-redux";
// import { signupUser } from "../../store/auth";
// import { RootState, AppDispatch } from '../../store/index'
import img from "../../images/image boy.png"
import icon from "../../images/Vector.png"
import Image from "next/image";


interface FormData {
  name: string;
  email: string;
  password: string;
  image: string,

}
interface User {
  name: string,
  newPassword: string;
  confirmPassword: string;
  email: string,
  currentPassword: string
}

const UpdateAccount: FunctionComponent = () => {
  //   let navigate = useNavigate()
  const userJSON: string | null = localStorage.getItem("user");
  const userParse: FormData = userJSON ? JSON.parse(userJSON) : null;
  const [userUp, setUserUp] = useState<FormData>(userParse);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // const modifyProfile = (user:User,e: React.MouseEvent) => {
  //     e.preventDefault();

  //   if(user.newPassword.length <8){
  //     alert("Enter a strong password: " );
  //     return 
  //   }
  //     if (user.newPassword === user.confirmPassword) {
  //       axios
  //         .post(`http://localhost:5000/api/user/modify`, user)
  //         .then((res) => {

  //           alert("You successfully updated your account");
  //           navigate("/home" )
  //           })
  //         .catch((err) =>


  //           alert("check your password is incorrect")

  //         );
  //     }
  //   };

  return (
    // <div className="sign-Up"> 
    // <div className="sign-Up-Child" />
    // <div className="rectangle-Parent">
    // <div className="group-Child" />
    // <b className="begin-Your-Meta1">Edit You profile here</b>

    // <div className="email-Address-Parent">
    // <input className="email-Address" type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>

    // </div>
    // <div className="vector-Parent">

    // <input className="email-Address" type="password" name="password" placeholder="Password"    onChange={(e) => setCurrentPassword(e.target.value)}/>

    // <input className="email-Address1" type="password" name="password" placeholder="NewPassword"     onChange={(e) => setNewPassword(e.target.value)}/>

    // <input className="email-Address2" type="password" name="password" placeholder="confirmPassword"   onChange={(e) => setConfirmPassword(e.target.value)}/>

    // </div>
    // <div className="group-Parent">
    // <div className="full-Name-Parent">
    // <input className="email-Address" type="text"    onChange={(e) => setEmail(e.target.value)}  name="name"  />

    // </div>
    // <div className="last-Name-Parent">
    // <input className="email-Address"type="text"   onChange={(e) => setName(e.target.value)}  />

    // </div>
    // </div>

    // <div className="create-Account-Wrapper">
    // <div className="create-Account"   onClick={e  => {
    //         // if (
    //         //   newPassword !== confirmPassword
    //         // ) {
    //         //   alert("your new password and confirm password do not match please check ")
    //         //   return
    //         // } else {
    //         //   modifyProfile(
    //         //     {
    //         //       name: name ,
    //         //       email:userUp.email,
    //         //       currentPassword: currentPassword,
    //         //       newPassword: newPassword,
    //         //       confirmPassword: confirmPassword,
    //         //     },
    //         //     e
    //         //   )


    //         // }
    //       }}>Update Account</div>
    // </div>
    // </div>
    // <Image className="image8Icon1" alt="" src="" />
    // <div className="sign-Up1">Edit Profile</div>
    // </div>

    <div className="sign-up">
      <div className="profile-image-frame">
        <Image src={image} alt="" />
      </div>
      <div className="form-container">
        <h2>Edit Your Profile</h2>
        <input className="large-input" type="email" placeholder="Email" />
        <div className="name-container" >
          <input className="small-input" type="text" placeholder="First Name" />
          <input className="small-input" type="text" placeholder="Last Name" />
        </div>
        <input className="large-input" type="text" placeholder="Old Password" />
        <input className="large-input" type="text" placeholder="New Password" />
        <input className="large-input" type="text" placeholder="Confirm Password" />
        <div className="submit-button"><span>Edit</span></div>
      </div>
    </div>
  )









}


export default UpdateAccount