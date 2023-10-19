"use client"
import Image from 'next/image'
import React from 'react'
import asset from '../../public/Assests/images/Brandpage/unsplash_DbOdCSoefsg.png'

const OneProduct = () => {
  return (
    <div className="overlap-2">
    <div className="div-2">
        <div className="overlap-group-5">
            <div className="text-wrapper-23">@Johny</div>
            <div className="text-wrapper-24">Lorem Ipsum</div>
            <div className="text-wrapper-25">0.005 ETH</div>
            <div className="text-wrapper-26">Current Bid</div>
            <Image className="collection" alt="Collection" src={asset} />
        </div>
    </div>
    <div className="group-8">
        <div className="frame-3">
            <div className="text-wrapper-27">Buy Now</div>
        </div>
        <Image className="vector-3" alt="Vector" src={asset} />
    </div>
</div>
  )
}

export default OneProduct