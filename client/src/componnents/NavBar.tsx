import React, { useState } from 'react'
import '../styles/navBar.css'

import group from '../../public/Assests/images/Group 48095728.svg'
import Link from 'next/link'
import Image from 'next/image'
interface User {
    id: number,
    email: string;
    name: string;
    password: string;
    image: string,
    dateOfBirth: string,
}
const NavBar = () => {

    return (
        <div className='fofo' >
            <div >
                <div style={{ display: "flex", height: "8rem", width: "100%", justifyContent: "space-around", alignItems: "center" }}>
                    <div className="text-wrapper" >Logo</div>
                    <div className="div">
                        <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </div>

                    <Link href='/AllNFT'>
                        <div className="text-wrapper-2">NFTs</div>
                    </Link>
                    <div className="search-bar">
                        <div className="inputBox_container">
                            <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                </path>
                            </svg>
                            <input className="inputBox" id="inputBox" type="text" placeholder="Search Items, Fashion, Collection and Users" />
                        </div>
                    </div>
                    <div className="group">
                        <Link href='/explore' style={{ color: "white", textDecoration: "none" }}>
                            Explore
                        </Link>

                    </div>
                    <Link href='/Messages'>
                        <Image className="group-2" alt="Group" src={group} />
                    </Link>
                    <Link href='/drops'>
                        <div className="text-wrapper-4">Drops</div>
                    </Link>
                    <div className="group-3">

                        <div>
                            <details className="text-wrapper-3">
                                <ul>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} href='/Stats'>
                                        <li>Stats</li>
                                    </Link>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} href='/About'>
                                        <li>About Us</li>
                                    </Link>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} href='/studio'>
                                        <li>Creator Studio</li>
                                    </Link>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} href='/edit'>
                                        <li>Edit Profile</li>
                                    </Link>
                                </ul>
                            </details>
                        </div>
                    </div>
                    {
                        localStorage.getItem('token') ? <div className="text-wrapper-5">Logout</div> :
                            <div className="frame" style={{ display: "flex", gap: "1rem" }}>
                                <div className="text-wrapper-5">SignUp</div>
                                <div className="text-wrapper-5">SignIn</div>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default NavBar