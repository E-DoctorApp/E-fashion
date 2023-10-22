"use client"
import React, { useState, useEffect } from "react";
import asset from '../../../public/Assests/images/Brandpage/unsplash_DbOdCSoefsg.png'
// import asset1 from '../../../public/Assests/images/Brandpage/albert-dera-ILip77SbmOE-unsplash 1.png'
// import tick from '../../../public/Assests/images/Brandpage/tick.svg'
// import vec from '../../../public/Assests/images/Brandpage/Vector.svg'
// import vec1 from '../../../public/Assests/images/Brandpage/Vector (1).svg'
// import grp from '../../../public/Assests/images/Brandpage/Group.svg'
// import img2 from '../../../public/Assests/images/Brandpage/albert-dera-ILip77SbmOE-unsplash 1.png'
import "../../styles/BrandPage.css";
import Image from "next/image";
import { ImageResponse } from "next/server";
import axios from "axios";
import OneProduct from "../../componnents/OneProduct";
import NavBar from "../../componnents/NavBar";
import Footer from "../../componnents/Footer";




function page() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    const fetchProductsByCategory = (category: String) => {
        axios.get(`http://localhost:5000/api/products/getAllByCategories/${category}`)
            .then((response) => {
                console.log(response.data);

                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <NavBar />
            <div className="brand-page">
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="overlap-group">
                            <div className="group">
                                <div className="overlap-group-2">
                                    <div className="overlap-group-2">
                                        <Image className="unsplash-dbodcsoefsg" alt="Unsplash dbodcsoefsg" src={asset} />
                                        <Image className="photo" alt="Photo" src={asset} />
                                    </div>
                                    <div className="text-wrapper-8">Zara</div>
                                    <div className="text-wrapper-9">@zara</div>
                                    <div className="frame">
                                        <div className="text-wrapper-10">Follow</div>
                                    </div>
                                </div>
                                <p className="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo adipiscing viverra et etiam vestibulum
                                    bibendum nec neque. Enim quis imperdiet sit urna. Commodo adipiscing viverra et etiam vestibulum
                                    bibendum nec neque. Enim quis imperdiet sit urna
                                </p>
                                <p className="element-following">
                                    <span className="span">11</span>
                                    <span className="text-wrapper-11">&nbsp;&nbsp;</span>
                                    <span className="text-wrapper-12">Following</span>
                                </p>
                                <p className="element-followers">
                                    <span className="span">3M</span>
                                    <span className="text-wrapper-11">&nbsp;&nbsp;</span>
                                    <span className="text-wrapper-12">Followers</span>
                                </p>
                                <p className="created-by-farhan">
                                    <span className="text-wrapper-13">Created By&nbsp;&nbsp;</span>
                                    <span className="text-wrapper-14">Farhan</span>
                                </p>
                            </div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-3">
                                    <div className="ellipse" />
                                    <Image className="vector" alt="Vector" src={asset} />
                                </div>
                            </div>

                        </div>
                        <div className="frame-2">
                            <div className="div-wrapper">
                                <div className="overlap-group-4">
                                    <div className="text-wrapper-15">Items</div>
                                    <div className="text-wrapper-16">1k</div>
                                </div>
                            </div>
                            <div className="div-wrapper">
                                <div className="overlap-group-4">
                                    <div className="text-wrapper-17">Owners</div>
                                    <div className="text-wrapper-18">100</div>
                                </div>
                            </div>
                            <div className="group-2">
                                <div className="overlap-group-4">
                                    <div className="text-wrapper-19">Floor Price</div>
                                    <div className="group-3">
                                        <div className="text-wrapper-20">19.6</div>
                                        <Image className="vector-2" alt="Vector" src={asset} />
                                    </div>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="overlap-group-4">
                                    <div className="text-wrapper-21">Volume Traded</div>
                                    <div className="group-5">
                                        <div className="text-wrapper-20">240K</div>
                                        <Image className="vector-2" alt="Vector" src={asset} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group-6" style={{display:"flex"}}>
                            {products?.map((product,i) => <OneProduct key={i} product={product} />)}

                        </div>
                        <div className="group-wrapper">
                            <div className="group-9">
                            </div>
                        </div>

                        <div className="group-15">
                            <div className="frame-5">
                                <Image className="vector-4" alt="Vector" src={asset} />
                                <div className="text-wrapper-35">Back To Collection</div>
                            </div>
                            <div className="group-16">
                                <div className="overlap-8">
                                    <div className="group-17">
                                        <div className="overlap-group-3">
                                            <div className="ellipse" />
                                            <Image className="vector" alt="Vector" src={asset} />
                                        </div>
                                    </div>
                                    <div className="group-18">
                                        <div className="overlap-group-3">
                                            <div className="ellipse" />
                                            <Image className="vector" alt="Vector" src={asset} />
                                        </div>
                                    </div>
                                    <div className="group-19">
                                        <div className="overlap-group-3">
                                            <div className="ellipse" />
                                            <Image className="vector" alt="Vector" src={asset} />
                                        </div>
                                    </div>
                                    <div className="group-20">
                                        <div className="seller">
                                            <div className="overlap-group-6">
                                                <p className="text-wrapper-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <div className="frame-6">
                                                    <div className="text-wrapper-37">+ Follow</div>
                                                </div>
                                                <div className="overlap-group-7">
                                                    <Image className="creator" alt="Creator" src={asset} />
                                                    <Image className="photo-2" alt="Photo" src={asset} />
                                                </div>
                                                <div className="text-wrapper-38">Adidas</div>
                                            </div>
                                        </div>
                                        <div className="seller-2">
                                            <div className="overlap-9">
                                                <p className="text-wrapper-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <div className="frame-7">
                                                    <div className="text-wrapper-39">+ Followed</div>
                                                </div>
                                                <div className="overlap-group-7">
                                                    <Image className="creator" alt="Creator" src={asset} />
                                                    <Image className="photo-2" alt="Photo" src={asset} />
                                                </div>
                                                <div className="text-wrapper-40">Nike</div>
                                            </div>
                                        </div>
                                        <div className="seller-3">
                                            <div className="overlap-group-6">
                                                <p className="text-wrapper-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <div className="frame-6">
                                                    <div className="text-wrapper-37">+ Follow</div>
                                                </div>
                                                <div className="overlap-group-7">
                                                    <Image className="creator" alt="Creator" src={asset} />
                                                    <Image className="photo-2" alt="Photo" src={asset} />
                                                </div>
                                                <div className="text-wrapper-41">Lacoste</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="line-6" />
                            <div className="line-7" />
                            <div className="line-8" />
                            <div className="line-9" />
                            <div className="line-10" />
                            <div className="group-21">
                                <div className="group-22">
                                    <div className="text-wrapper-42">Status</div>
                                </div>
                                <Image className="vector-5" alt="Vector" src={asset} />
                            </div>
                            <div className="group-23">
                                <div className="group-24">
                                    <div className="text-wrapper-42">Price</div>
                                </div>
                                <Image className="vector-6" alt="Vector" src={asset} />
                            </div>
                            <div className="group-25">
                                <div className="group-26">
                                    <div className="text-wrapper-42">Collections</div>
                                </div>
                                <Image className="vector-6" alt="Vector" src={asset} />
                            </div>
                            <div className="group-27">
                                <div className="group-28">
                                    <div className="text-wrapper-42">Chains</div>
                                </div>
                                <Image className="vector-6" alt="Vector" src={asset} />
                            </div>
                            <div className="group-29">
                                <div className="text-wrapper-42">
                                    <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="0">Select Category</option>
                                        <option value="1">men</option>
                                        <option value="2">women</option>
                                        <option value="3">child</option>
                                    </select>
                                </div>
                                <Image className="vector-6" alt="Vector" src={asset} />
                            </div>
                            <div className="group-30">
                                <div className="text-wrapper-42">On Sale In</div>
                                <Image className="vector-6" alt="Vector" src={asset} />
                            </div>
                            <div className="group-31">
                                <div className="text-wrapper-43" onClick={() => fetchProductsByCategory(category)} >Filter</div>
                                <Image className="group-32" alt="Group" src={asset} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
