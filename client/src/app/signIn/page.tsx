"use client"
import React, { FunctionComponent, useCallback, useState, ChangeEvent } from "react";
import Image from "next/image";
import img from "../../../public/Assests/images/imageboy.png"
import facebook from "../../../public/Assests/images/facebook.png"
import apple from "../../../public/Assests/images/apple.png"
import google from "../../../public/Assests/images/google.png"
import styles from "../../styles/SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { signinUser } from "../../store/signinReduser"
import { useRouter } from "next/navigation";


interface FormData {
  email: string;
  password: string;
}



const SignIn: FunctionComponent = () => {
  const router=useRouter()
  //   let navigate = useNavigate()

  const onNewUserCreateClick = () => {
    router.push("/signUp")
  }

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const user = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const { email, password } = formData
    // if (!email) {
    //   setError('Please Fill all fields');
    //   return (
    //     alert("Please check your email address  ")
    //   )
    // }
    // if (!password) {
    //   setError('Please Fill all fields');
    //   return (
    //     alert("Please check your password")
    //   )
    // }

    dispatch(signinUser({ ...formData}));
    router.push("/")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };


  return (

    <div className={styles.sign_In}>
      <div className={styles.sign_InChild} />
      <div className={styles.rectangle_Parent}>
        <div className={styles.group_Child} />
        <b className={styles.explore_TheWorld}>
          Explore the world of meta fashion
        </b>
        <div
          className={styles.new_UserCreateContainer}
          onClick={onNewUserCreateClick}
        >
          <span>New user?</span>
          <span className={styles.create_AnAccount}
            onClick={onNewUserCreateClick}   > Create an account</span>
        </div>
        <div className={styles.or}>Or</div>
        <div className={styles.email_AddressParent1}>
          <input className={styles.email_Address1} name="email" type="text" placeholder="Email Address" onChange={handleChange} />
          <div className={styles.group_Item2} />

        </div>
        <div className={styles.email_AddressParent}>
          <input className={styles.email_Address} name="password" type="password" placeholder="Password" onChange={handleChange} />
          <div className={styles.group_Item} /> </div>

        <div className={styles.rectangle_Group}>
          <div className={styles.group_Inner} />
          <div className={styles.group_Parent}>
            <Image
              className={styles.group_Icon}
              alt="" src={google}

            />
            <div className={styles.continue_WithGoogle}>
              Continue With Google
            </div>
          </div>
        </div>
        <div className={styles.rectangle_Container}>
          <div className={styles.rectangle_Div} />
          <Image className={styles.group_Icon1} alt="" src={facebook} />
          <div className={styles.continue_WithFacebook}>
            Continue With Facebook
          </div>
        </div>
        <div className={styles.group_Div}>
          <div className={styles.group_Child1} />
          <Image className={styles.vector_Icon} alt="" src={apple} />
          <div className={styles.continue_WithFacebook}>Continue With Apple</div>
        </div>
      </div>
      <Image className={styles.image_8Icon} alt="" src={img} />
      <div className={styles.sign_In1}>Sign In</div>
      <div className={styles.continue_Wrapper}>
        <div className={styles._continue} onClick={handleSubmit}>Continue</div>
      </div>
    </div>
  );
};

export default SignIn
