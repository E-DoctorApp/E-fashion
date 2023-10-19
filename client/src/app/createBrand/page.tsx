"use client"
import React from "react";
import NavBar from "@/componnents/NavBar";
import '../../styles/CreateBrand.css';
import Footer from "@/componnents/Footer";

export default function CreateBrand() {
    return (
        <div>
            <div className="nav">  <NavBar /></div>
            <h1 className="title">Add Brand</h1>
            <div className="brand-name">
                <p >Name of the Brand:</p>
                <br></br>
                <input type="text" />
            </div>
            <div className="brand-Image">
                <p>Insert your image:</p>
                <br></br>
                <input type="file" />
                <br></br>
                <button className="Add-btn">Add brand</button></div>
            <Footer />
        </div>)
}