"use client"
import React, { FunctionComponent, useCallback, useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import axios from 'axios';
import "../../styles/SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../store/auth";
import { RootState, AppDispatch } from '../../store/index'
import img from "../../../public/Assests/images/imageboy.png"
import icon from "../../../public/Assests/images/Vector.png"
// import { Link, useNavigate } from "react-router-dom";



interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  type: "brand" | "regular" | "fashionista"
}


const SignUp: FunctionComponent = () => {
  const router =useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const [error, setError] = useState<string>('');
  // const [type, setType] = useState<FormData["type"]>("regular")
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [day, setDay] = useState<string>("")
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: "",
    email: '',
    password: '',
    dateOfBirth: "",
    type: "regular",
  });
  // console.log("from Data ");
  // console.log(formData);
  // // console.log(year);
  // console.log(month);
  // // console.log(day);
  // console.log(type);





  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const startYear = 1940;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);
  const renderOptions = (options: string[]): JSX.Element[] => {
    return options.map((option, index) => (
      <option key={index} value={option.toLowerCase()}>{option}</option>
    ));
  };
  const onAlreadyAMemberClick = useCallback(() => {
    // Please sync "Sign In" to the project
  }, []);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.MouseEvent) => {
    const { firstName, lastName, password, type, email } = formData
    e.preventDefault();
    // if (!formData.name || !formData.email || !formData.dateOfBirth || !formData.role) {
    //   return (
    //     alert("hello please enter your data")
    //   )
    // }

    // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;;
    // if (!emailRegex.test(formData.email)) {
    //   setError('Please enter a valid email address.')
    //   return (
    //     alert("Please enter a valid email address.")
    //   )
    // }
    // const strongPasswordRegex = /^"(?=.*[a-z])(?=.*[A-Z]).{8,}"/;
    // if (formData.password.length < 8) {
    //   setError('Please use a stronger password.');
    //   return (
    //     alert(" Please use a stronger password")
    //   )
    // }
    if (!day || !month || !year) {
      setError('Invalid date of birth.');
      return (
        alert(" Invalid date of birth.")
      )
    }
    const paddedDay = day.padStart(2, '0');
    const paddedMonth = month.padStart(2, '0');
    const paddedYear = year.padStart(4, '0');
    const formattedDateOfBirth = `${paddedYear}-${paddedMonth}-${paddedDay}`;
    // Dispatch signupUser action with the updated formData

    dispatch(signupUser({ firstName, lastName, password, type, email, dateOfBirth: formattedDateOfBirth }));
    router.push("/signIn")      
  };


  return (
    <div className="sign--Up">
      <div className="sign--Up--Child" />
      <div className="rectangle--Parent">
        <div className="group--Child" />
        <b className="begin--Your--Meta1">Begin your meta fashion journey here</b>
        <div className="already--AMember--Container" onClick={onAlreadyAMemberClick}>
          <span>
            <span>Already a Member?</span>
            <span className="--span">{` `}</span>
          </span>
          <span className="--span">
            <span className="sign--In1" >Sign In</span>
          </span>
        </div>
        <div className="email--Address--Parent">
          <input className="email--Address" type="text" name="email" placeholder="Email Address" onChange={handleChange} />
          <div className="group--Item" />
        </div>
        <div className="vector--Parent">
          <Image className="vector--Icon2" alt="" src={icon} />
          <input className="email--Address" type="password" name="password" placeholder="Password" onChange={handleChange} />
          <div className="group--Item" />
        </div>
        <div className="group--Parent">
          <div className="full--Name--Parent">
            <input className="email--Address" type="text" name="firstName" placeholder="Full Name" onChange={handleChange} />
            <div className="line--Div" />
          </div>
          <div className="last--Name--Parent">
            <input className="email--Address" type="text" name="lastName" placeholder="lastName" onChange={handleChange} />
            <div className="group--Child1" />
          </div>
        </div>
        <div className="date--OfBirth--Parent">
          <div className="dateOf--Birth1">Date Of Birth</div>
          <div className="group--Child2" />
          <div className="group--Child3" />
          <div className="group--Child4" />
          <div className="group--Child5" />
          <div className="date--Inputs">
            {/* All select Options  */}
            <select className="--month" name="month" onChange={(e: ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)}  >
              <option >Month</option>
              {renderOptions(months)}
            </select>
            <select className="--day" name="day" onChange={(e: ChangeEvent<HTMLSelectElement>) => setDay(e.target.value)}>
              <option >Day</option>
              {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
                <option key={day} value={String(day)}>{day}</option>
              ))}
            </select>
            <select className="--year" name="year" onChange={(e: ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)}  >
              <option >Year</option>
              {renderOptions(years.map(String))}
            </select>
            <select className="--role" name="type" value={formData.type} onChange={handleChange} >
              <option >Role</option>
              {renderOptions(Object.values(["regular", "brand", "fashionista"]))}
            </select>
          </div>

        </div>
        <div className="create--Account--Wrapper">
          <div className="create--Account" onClick={handleSubmit}>Create Account</div>
        </div>
      </div>
      <Image className="image--8Icon" alt="" src={img} />
      <div className="sign--Up1">Sign Up</div>
    </div >
  );

};

export default SignUp;
