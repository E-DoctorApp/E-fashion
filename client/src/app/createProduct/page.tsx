"use client"
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createProduct,addProduct  } from '../store/CreateProductSlice';
// import Modal from 'react-modal';
import  '../../styles/CreateProduct.css';
import NavBar from '@/componnents/NavBar';
import Footer from '@/componnents/Footer';
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
//   const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [typeProd, setTypeProd] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
//   let navigate = useNavigate()

//   const profileUpload= async (e:any)=>{
//     const formData=new FormData()
//     formData.append("file",e.target.files[0])
//     formData.append("upload_preset","oztadvnr")
//     await axios.post("https://api.cloudinary.com/v1_1/dl4qexes8/upload",formData).then((response)=>{
//     setImage(response.data["secure_url"])

    
//     }).catch((error)=>{
//       throw error
//     })
    
//       }
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const parsedPrice = parseFloat(price);
//     const productType = user.role === 'fashionista' ? 'NFT' : 'product';
//     const formData = { name, price: parsedPrice, image, userId: user.id, category, typeProd: productType };
//     if ((user.role === 'brand' && productType === 'product') || (user.role === 'fashionista' && productType === 'NFT')) {
//       dispatch(addProduct(formData));
//     } else {  
//       alert(`You are not authorized to add products of type ${productType}.`);
//     }
//   };


 

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
    <select id='select' className="form-input" value={category} onChange={(event) => setCategory(event.target.value)}>
             <option value="">Select Product Type</option>
             <option value="men">Product</option>
             <option value="women">NFT</option>
           </select>
           <div>
      <label htmlFor="inputTag">
        Select Image <br/>
        <input id="inputTag" type="file" onChange={(e)=>setImage(e.target.value)} />
        <span id="imageName">{image}</span>
      </label>
    </div>
             <button className="form-button" type="submit">Create Product</button>
    </div>
  );
};

export default CreateProduct;
