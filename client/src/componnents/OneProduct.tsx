"use client"
import Image from 'next/image'
import React from 'react'
import asset from '../../public/Assests/images/Brandpage/unsplash_DbOdCSoefsg.png'
interface props {
    product: any
}


const OneProduct = ({ product }: props) => {
    return (
        <div className="overlap-2" >
            <div className="div-2">
                <div className="overlap-group-5">
                    <div className="text-wrapper-23">{product.User?.firstName}</div>
                    <div className="text-wrapper-24">{product.name}</div>
                    <div className="text-wrapper-25">{product.price}</div>
                    <div className="text-wrapper-26">{product.status}</div>
                    <img className="collection" style={{width:"90%"}} alt="Collection" src={product.image} />
                    <div style={{position:"relative",top:"90%",right:"3%"}} >
                        <div className="frame-3" style={{ position: "relative" }}>
                            <div className="text-wrapper-27">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProduct