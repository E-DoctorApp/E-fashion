import React, { useState, useEffect } from 'react'; // Import useState and useEffect from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard.jsx'
//  http://127.0.0.1:5000/api/products/getAll
//http://127.0.0.1:5000/api/products/getAllByStatus/soon
//http://127.0.0.1:5000/api/products/getAllByPrice/params
//http://127.0.0.1:5000/api/products/getAllByCategories/1
//http://127.0.0.1:5000/api/products/getAllByUser/1

function App() {

  const [rerendrer,setRerender] = useState(false)
  const [by,setBy] = useState("")
  const [value,setValue] =useState(0)
  const [posts, setPosts] = useState([])
  const [products,setProduct] = useState([])
  const [users, setUsers] = useState([]); 

  const fetchFiltredProd = async () => {
    if (by === "Status"){
      const response = await axios.get(`http://127.0.0.1:5000/api/products/getAllByStatus/${value}`, value);
      setProduct(response.data);
    }
    else if (by === "Price"){
    const response = await axios.get(`http://127.0.0.1:5000/api/products/getAllByPrice/${value}`);
      setProduct(response.data);
    }
    else if(by === "cat"){
      const response = await axios.get(`http://127.0.0.1:5000/api/products/getAllByCategories/${value}`);
      setProduct(response.data);

    }
    else if(by === "useId"){
      const response = await axios.get(`http://127.0.0.1:5000/api/products/getAllByUser/${value}`);
      setProduct(response.data);
    }
    else{
      const response = await axios.get(`http://127.0.0.1:5000/api/products/getAll`);
      setProduct(response.data);
    }

    }
  
  const fetchFiltredUsers = async () => {
    if(by === "type"){
      const response = await axios.get(`http://127.0.0.1:5000/api/users/getByType/${value}`);
      setUsers(response.data);
    }
    else{
      const response = await axios.get("http://127.0.0.1:5000/api/users/getAll");
      setUsers(response.data);
    }
  }

  const fetchFiltredPost = async () => {
    if(by === "userId"){
      const response = await axios.get(`http://127.0.0.1:5000/api/posts/getAllByUser/${value}`);
      setPosts(response.data);
    }
    else{
      const response = await axios.get("http://127.0.0.1:5000/api/posts/getAll");
      setPosts(response.data);
    }
  }
  

  

 
  
  useEffect(() => {
    fetchFiltredUsers(by,value);
    fetchFiltredProd(by, value); 
    fetchFiltredPost(by,value)// Correct the syntax here
  }, [rerendrer,by,value]); // Ensure the second argument is an empty dependency array


  const deleteUser = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:5000/api/users/deleteUser/${id}`);
    setUsers(response.data);
  }

  const deletePost = async (id) => {
    
    const response = await axios.delete(`http://127.0.0.1:5000/api/posts/deletePost/${id}`);
  
  }
  const deleteProd = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:5000/api/products/deleteProd${id}`);
    setProduct(response.data);
  }
  const updateUser = async (id,value) => {
    const response = await axios.put(`http://127.0.0.1:5000/api/users/updateUser/${id}`,value);
    setUsers(response.data);
  }
  // const updatePost = async (id,value) => {
  //   const response = await axios.put(`http://127.0.0.1:5000/api/posts/update/${id}`,value);
  //   setPosts(response.data);
  // }
  // const updateProd = async (id,value) => {
  //   const response = await axios.put(`http://127.0.0.1:5000/api/products/update/${id}`,value);
  //   setProduct(response.data);
  // }
  // console.log(users)
  return (
    <div style={{width:"100%" , height:"100vh", backgroundColor:"maroon"}}>
      <UserCard users={users} posts = {posts} products={products} rerendrer ={rerendrer}  deleteUser={deleteUser} deletePost= {deletePost} deleteProd={deleteProd} updateUser={updateUser} setBy = {setBy} setValue = {setValue} setRerender={setRerender}  />
    </div>
  );
}

export default App;
