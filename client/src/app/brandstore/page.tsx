'use client'
import React, { useEffect, useState } from "react";
import asset from "../../../public/Assests/images/BrandStorepage/+.png"
import cardImg from "../../../public/Assests/images/cardImg.png"
import liba3dha from "../../../public/Assests/images/Rectang 33.png"
import ellipse from "../../../public/Assests/images/Ellipse 286.png"
// import vector from "../../../public/Assests/images/Vector.svg"
import taswira from "../../../public/Assests/images/Ellipse 251.png"
import vector1 from "../../../public/Assests/images/BrandStorepage/Vector.svg"
import asset1 from "../../../public/Assests/images/BrandStorepage/Vector.svg"
import asset2 from '../../../public/Assests/images/BrandStorepage/image 13.png'
import asset3 from '../../../public/Assests/images/BrandStorepage/image 15.png'
import asset4 from "../../../public/Assests/images/BrandStorepage/Vector (1).svg"
import "../../styles/BrandStorePage.css";
import NavBar from "../../componnents/NavBar";
import Footer from "../../componnents/Footer";
// import { Link, useLocation } from "react-router-dom";
import { number } from "prop-types";
import Image from "next/image";
import ProductCardContainer from "../../componnents/NewTrending"


interface Product {

    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    UserId: number;


}
interface propsState {
    prod: Product
}


const BrandStorePage = (props: any) => {
    // const location = useLocation();
    // const data  = location.state;
    const [count, setCount] = useState(1);
    useEffect(() => {

    }, [count])

    return (
        <div>
            {/* <NavBar/> */}
            <div className="brand-store-page">
                <div className="overlap-wrapper">
                    <div className="overlap">

                        <div className="overlap-2">
                            <div className="overlap-2">
                                {/* <div className="item">
                                    <div className="overlap-group-2">
                                        <div className="text-wrapper-14">{data.name}</div>
                                        <div className="text-wrapper-15">Lorem Ipsum</div>
                                        <div className="text-wrapper-16">{data.price}</div>
                                        <Image width={500} height={500} className="rectangle" alt="Rectangle" src={cardImg} />
                                        <div className="text-wrapper-17">Current Bid</div>
                                        <div className="group-4">
                                            <div className="frame-2">
                                                <Link to='/error'><div className="text-wrapper-18">Buy Now</div></Link>
                                            </div>
                                            <span className="fa" style={{ color: "red", fontSize: "2rem" }}>&#xf004;</span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="overlap-3">
                                    <div className="group-5">
                                        <div className="group-wrapper">
                                            <div className="group-6">
                                                <Image width={100} height={100} className="vector-2" alt="Vector" src={asset1} />
                                                <div className="text-wrapper-19" onClick={() => {
                                                    console.log('Work');
                                                }}>Digital</div>
                                            </div>
                                        </div>
                                        <div className="frame-3">
                                            <Image width={100} height={100} className="mask-group" alt="Mask group" src={asset2} />
                                            <div className="group-7">
                                                <div className="text-wrapper-20">Physical</div>
                                            </div>
                                        </div>
                                        <div className="frame-4">
                                            <Image width={100} height={100} className="mask-group" alt="Mask group" src={asset3} />
                                            <div className="group-8">
                                                <div className="text-wrapper-20">Exclusive</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <div className="text-wrapper-21">{data.name}</div> */}
                            </div>
                            <div className="QTY-sec">
                                <div className="text-wrapper-22">QTY</div>
                                <div className="group-9">
                                    <div className="overlap-group-3">
                                        <div className="text-wrapper-23">{count}</div>

                                    </div>
                                    <Image width={100} height={100} className="frame-5" alt="Frame" src={asset} onClick={() => {
                                        setCount(count + 1);
                                        console.log(count)
                                    }} />
                                </div>
                                <div className="rectangle-wrapper" onClick={() => { setCount(count - 1) }}>
                                    <div className="rectangle-3" />
                                </div>
                            </div>
                            <div className="people">
                                <div className="text-wrapper-24">Created By</div>
                                <div className="text-wrapper-25">Owned By</div>
                                <div className="group-10">
                                    <div className="text-wrapper-26">@farhan</div>
                                    <Image width={100} height={100} className="ellipse" alt="Ellipse" src={taswira} />
                                </div>
                                <div className="group-11">
                                    <Image width={100} height={100} className="ellipse" alt="Ellipse" src={liba3dha} />
                                    <div className="text-wrapper-26">@farhan</div>
                                </div>
                            </div>
                            <p className="text-wrapper-27">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat, sem commodo diam aliquet purus
                                nunc metus velit. Ac turpis orci cursus posuere. Proin phasellus viverra nulla aliquam amet, sapien id.
                                Malesuada gravida nullam sem sollicitudin vestibulum. Molestie rhoncus, at non pharetra tristique iaculis
                                faucibus. Ligula tincidunt ultrices vel tempus eget. Fringilla eget lectus tempor dolor volutpat sed
                                platea sit.
                            </p>
                        </div>
                        <div className="overlap-4">
                            <div className="line-6" />
                            <div className="line-7" />
                            <div className="line-8" />
                            <div className="line-9" />
                            <div className="group-12">
                                <div className="group-13">
                                    <div className="text-wrapper-28">Description</div>
                                    {/* <Image width={100} height = {100} className="vector-3" alt="Vector" src={asset4} /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                        <path d="M9.09989 10.5357C9.19728 10.5358 9.30272 10.5811 9.39098 10.6832C9.48038 10.7865 9.54055 10.9364 9.54862 11.1046C9.55668 11.2727 9.51134 11.4328 9.42992 11.5519C9.3511 11.6672 9.24992 11.7291 9.15369 11.7454L9.09108 11.75H0.699641C0.602252 11.7499 0.496816 11.7046 0.408555 11.6026C0.319159 11.4992 0.258982 11.3493 0.250917 11.1811C0.242857 11.013 0.2882 10.8529 0.369613 10.7338C0.448441 10.6185 0.549616 10.5567 0.645852 10.5403L0.708442 10.5357H9.09989ZM13.3004 7.10714C13.3977 7.10728 13.5032 7.15256 13.5914 7.25458C13.6808 7.35791 13.741 7.50784 13.7491 7.67603C13.7571 7.84413 13.7118 8.00425 13.6304 8.12334C13.5516 8.23865 13.4504 8.30048 13.3542 8.31684L13.2915 8.32143H0.699641C0.602252 8.3213 0.496816 8.27601 0.408555 8.17399C0.319159 8.07066 0.258982 7.92073 0.250917 7.75255C0.242857 7.58444 0.2882 7.42432 0.369613 7.30523C0.448439 7.18992 0.549613 7.12809 0.645849 7.11173L0.708446 7.10714H13.3004ZM13.3005 3.67857C13.3979 3.67875 13.5032 3.72404 13.5914 3.82601C13.6808 3.92934 13.741 4.07927 13.7491 4.24745C13.7571 4.41556 13.7118 4.57568 13.6304 4.69477C13.5516 4.81008 13.4504 4.87191 13.3542 4.88827L13.2916 4.89286H0.699641C0.602252 4.89272 0.496816 4.84744 0.408555 4.74542C0.319159 4.64209 0.258982 4.49216 0.250917 4.32397C0.242857 4.15587 0.2882 3.99575 0.369613 3.87666C0.448439 3.76135 0.549611 3.69951 0.645847 3.68316L0.708446 3.67857L13.3004 3.67857C13.3004 3.67857 13.3005 3.67857 13.3005 3.67857ZM13.3005 0.25C13.3979 0.250176 13.5032 0.295469 13.5914 0.397438C13.6808 0.500769 13.741 0.650694 13.7491 0.818883C13.7571 0.986989 13.7118 1.14711 13.6304 1.2662C13.5516 1.38151 13.4504 1.44334 13.3542 1.4597L13.2916 1.46429H0.699492C0.602145 1.46411 0.496771 1.41881 0.408555 1.31685C0.319159 1.21352 0.258982 1.06359 0.250917 0.895403C0.242857 0.727297 0.2882 0.56718 0.369613 0.448087C0.448439 0.332778 0.549611 0.270943 0.645847 0.254585L0.708446 0.25H13.3005Z" stroke="white" stroke-width="0.5" />
                                    </svg>
                                </div>
                                <Image width={100} height={100} className="vector-4" alt="Vector" src="vector-2.svg" />
                            </div>
                            <div className="text-wrapper-29">Digital</div>
                            <Image width={100} height={100} className="vector-5" alt="Vector" src={asset1} />
                            <Image width={100} height={100} className="vector-6" alt="Vector" src="vector-5.svg" />
                            <Image width={100} height={100} className="group-14" alt="Group" src="/group-48095658.png" />
                            <Image width={100} height={100} className="group-15" alt="Group" src="/group-48095659.png" />
                            <div className="group-16">
                                <div className="group-17">
                                    <div className="text-wrapper-28">Details</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                        <path d="M14.0625 11H7.5C7.30026 11 7.1424 10.9344 7.01027 10.8022C6.87814 10.6701 6.8125 10.5122 6.8125 10.3125C6.8125 10.1128 6.87814 9.9549 7.01027 9.82277C7.1424 9.69064 7.30026 9.625 7.5 9.625H14.0625C14.2622 9.625 14.4201 9.69064 14.5522 9.82277C14.6844 9.9549 14.75 10.1128 14.75 10.3125C14.75 10.5122 14.6844 10.6701 14.5522 10.8022C14.4201 10.9344 14.2622 11 14.0625 11ZM14.0625 5.375H7.5C7.30241 5.375 7.14526 5.30851 7.01261 5.17228C6.87736 5.03337 6.8125 4.87376 6.8125 4.68018C6.8125 4.48673 6.87717 4.33088 7.01027 4.19777C7.1424 4.06564 7.30026 4 7.5 4H14.0625C14.2622 4 14.4201 4.06564 14.5522 4.19777C14.6853 4.33088 14.75 4.48673 14.75 4.68018C14.75 4.87376 14.6851 5.03337 14.5499 5.17228C14.4172 5.30851 14.2601 5.375 14.0625 5.375ZM14.0625 1.625H7.5C7.30241 1.625 7.14526 1.55851 7.01261 1.42228C6.87736 1.28337 6.8125 1.12376 6.8125 0.930176C6.8125 0.736731 6.87717 0.580879 7.01027 0.447773C7.1424 0.315643 7.30026 0.25 7.5 0.25H14.0625C14.2622 0.25 14.4201 0.315644 14.5522 0.447773C14.6853 0.580879 14.75 0.736731 14.75 0.930176C14.75 1.12376 14.6851 1.28337 14.5499 1.42228C14.4172 1.55851 14.2601 1.625 14.0625 1.625ZM4.6875 14.75H0.9375C0.737761 14.75 0.579902 14.6844 0.447773 14.5522C0.315644 14.4201 0.25 14.2622 0.25 14.0625V10.3125C0.25 10.1128 0.315644 9.9549 0.447773 9.82277C0.579902 9.69064 0.737761 9.625 0.9375 9.625H4.6875C4.87482 9.625 5.03237 9.68889 5.17228 9.82511C5.30851 9.95776 5.375 10.1149 5.375 10.3125V14.0625C5.375 14.2601 5.30851 14.4172 5.17228 14.5499C5.03237 14.6861 4.87482 14.75 4.6875 14.75ZM4.6875 5.375H0.9375C0.739909 5.375 0.582763 5.30851 0.450114 5.17228C0.313887 5.03237 0.25 4.87482 0.25 4.6875V0.9375C0.25 0.737761 0.315644 0.579902 0.447773 0.447773C0.579902 0.315644 0.737761 0.25 0.9375 0.25H4.6875C4.87482 0.25 5.03237 0.313887 5.17228 0.450114C5.30851 0.582763 5.375 0.739909 5.375 0.9375V4.6875C5.375 4.87266 5.31032 5.02949 5.1699 5.1699C5.02949 5.31032 4.87266 5.375 4.6875 5.375ZM7.5 13.375H14.0625C14.2622 13.375 14.4201 13.4406 14.5522 13.5728C14.6844 13.7049 14.75 13.8628 14.75 14.0625C14.75 14.2601 14.6835 14.4172 14.5473 14.5499C14.4074 14.6861 14.2498 14.75 14.0625 14.75H7.5C7.30026 14.75 7.1424 14.6844 7.01027 14.5522C6.87814 14.4201 6.8125 14.2622 6.8125 14.0625C6.8125 13.8628 6.87814 13.7049 7.01027 13.5728C7.1424 13.4406 7.30026 13.375 7.5 13.375Z" stroke="white" stroke-width="0.5" />
                                    </svg>
                                </div>
                                <Image width={100} height={100} className="vector-8" alt="Vector" src="vector-7.svg" />
                            </div>
                            <div className="group-18">
                                <div className="text-wrapper-28">Physical</div>
                                {/* <Image width={100} height={100} className="mask-group-2" alt="Mask group" src={asset2} /> */}
                                <i className="fa-brands fa-react" style={{ color: "#f5f9ff" }}></i>
                            </div>
                            <div className="group-19">
                                <div className="text-wrapper-28">Exclusive</div>
                                {/* <Image width={100} height={100} className="mask-group-2" alt="Mask group" src="/mask-group-3.png" /> */}
                                <i className="fa-solid fa-crown" style={{ color: "#fbfcfe" }}></i>
                            </div>
                        </div>
                        <div className="group-20">
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
                                <div className="overlap-5">
                                    <div className="div-2">
                                        <div className="overlap-group-2">
                                            <div className="text-wrapper-14">@Johny</div>
                                            <div className="text-wrapper-15">Lorem Ipsum</div>
                                            <div className="text-wrapper-16">0.005 ETH</div>
                                            <div className="text-wrapper-17">Current Bid</div>
                                            {/* <Image width={100} height={100} className="collection" alt="Collection" src="/collection-2.png" /> */}
                                        </div>
                                    </div>
                                    <div className="group-4">
                                        <div className="frame-2">
                                            <div className="text-wrapper-18">Buy Now</div>
                                        </div>
                                        <span className="fa" style={{ color: "red", fontSize: "2rem" }}>&#xf004;</span>
                                    </div>
                                </div>
                                <div className="overlap-6">
                                    <div className="div-2">
                                        <div className="overlap-group-2">
                                            <div className="text-wrapper-14">@Johny</div>
                                            <div className="text-wrapper-15">Lorem Ipsum</div>
                                            <div className="text-wrapper-16">0.005 ETH</div>
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
                            <div className="text-wrapper-30">More Collections</div>
                        </div>
                        <div className="frame-6">
                            <div className="text-wrapper-31">View All Collection</div>
                        </div>
                        <div className="group-22">
                            <p className="text-wrapper-32">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat, sem commodo diam aliquet purus
                                nunc metus velit. Ac turpis orci cursus posuere. Proin phasellus viverra nulla aliquam amet, sapien id.
                                Malesuada gravida nullam sem sollicitudin vestibulum. Molestie rhoncus, at non pharetra tristique iaculis
                                faucibus. Ligula tincidunt ultrices vel tempus eget. Fringilla eget lectus tempor dolor volutpat sed
                                platea sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat, sem commodo diam
                                aliquet purus nunc metus velit. Ac turpis orci cursus posuere. Proin phasellus viverra nulla aliquam amet,
                                sapien id. Malesuada gravida nullam sem sollicitudin vestibulum. Molestie rhoncus, at non pharetra
                                tristique iaculis faucibus. Ligula tincidunt ultrices vel tempus eget. Fringilla eget lectus tempor dolor
                                volutpat sed platea
                            </p>
                            <div className="text-wrapper-33">The Story</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
};


export default BrandStorePage
