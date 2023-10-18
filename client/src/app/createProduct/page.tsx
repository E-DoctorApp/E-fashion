"use client"
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createProduct,addProduct  } from '../store/CreateProductSlice';
// import Modal from 'react-modal';
import  '../../styles/CreateProduct.css';
import NavBar from '@/componnents/NavBar';
import Footer from '@/componnents/Footer';
import axios from 'axios';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/store/signinReduser';
// import { AppDispatch } from '../store';


// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import home from '../pages/Home';

// import { Link } from 'react-router-dom';



interface User {
  id: number;
  role: string;
  name: string;
}

const CreateProduct = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [typeProd, setTypeProd] = useState('');

//   let navigate = useNavigate()
useEffect(() => {
  dispatch(getUser())
},[])

const user:any = useSelector((state:RootState)=>state.currentUser.user)
console.log(user);

  const profileUpload= async (e:any)=>{
    const formData=new FormData()
    formData.append("file",e.target.files[0])
    formData.append("upload_preset","oztadvnr")
    await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload",formData).then((response)=>{
      console.log(response.data["secure_url"]);
    setImage(response.data["secure_url"])

    
    }).catch((error)=>{
      throw error
    })
    
      }

      const handleAddProduct = async (body:any)=>{
        try {
          const res =  await axios.post("http://localhost:5000/api/products/add",body)
          console.log(res.data);
          
        } catch (error) {
          console.log(error);
        }
      }
 

  return (
   
     <div className='create-product-container'>
      <input className="form-input" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
        <select id='select' className="form-input" value={category} onChange={(event) => setCategory(event.target.value)}>
             <option value="">Select a category</option>
             <option value="men">Men</option>
             <option value="women">Women</option>
             <option value="kids">Kids</option>
             <option value="other">Other</option>
           </select>
           <input className="form-input" placeholder='Price' type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
           <input className="form-input" placeholder='Quantity' type="text" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
    <select id='select' className="form-input" value={typeProd} onChange={(event) => setTypeProd(event.target.value)}>
             <option  >Select Product Type</option>
             <option value="Normal">Product</option>
             <option value="NFT">NFT</option>
           </select>
           <div>
      <label htmlFor="inputTag">
        Select Image <br/>
        <input id="inputTag" type="file" onChange={(e)=>profileUpload(e)} />
        <span id="imageName">{image}</span>
      </label>
    </div>
             <button className="form-button" type="submit" 
             onClick={(e)=>{
              e.preventDefault()
              handleAddProduct({
                name: name,
                price: +price,
                image: image,
                quantity: +quantity,
                // categoryId: 1,
                type: typeProd,
                userId: user.id,
                status: "OnStock"
              })
             }} 
             >Create Product</button>
    </div>
  );
};

export default CreateProduct;
