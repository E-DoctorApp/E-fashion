import React from 'react'
import liba3dha from "../../public/Assests/images/Rectang 33.png"
import Image from 'next/image'


 const StoreCardYas = () => {
    return (
        <div className="group-21">
        <div className="div-2">
            <div className="div-2">
                <div className="overlap-group-2">
                    <div className="text-wrapper-14">@Johny</div>
                    <div className="text-wrapper-15">Lorem Ipsum</div>
                    <div className="text-wrapper-16">0.005 ETH</div>
                    <Image width={100} height={100} className="rectangle" alt="Rectangle" src={liba3dha} />
                    <div className="text-wrapper-17">Current Bid</div>
                </div>
            </div>
            <div className="group-4">
                <div className="frame-2">
                    <div className="text-wrapper-18">Buy Now</div>
                </div>
                <span className="fa" style={{ color: "red", fontSize: "2rem" }}>&#xf004;</span>
            </div>
        </div>
        </div>
    )
}

export default StoreCardYas;