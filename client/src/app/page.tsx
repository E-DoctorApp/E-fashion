"use client"
import React from 'react'
import '../styles/Home.css'
import adidas from '../../public/Assests/images/adidas.png'
import puma from '../../public/Assests/images/puma.png'
import lacoste from '../../public/Assests/images/lacoste.png'
import FashionThatSpeaks from '../../public/Assests/images/FashionThatSpeaks.png'
import noGasFees from '../../public/Assests/images/noGasFees.png'
import carbonNeturalNFTs from '../../public/Assests/images/carbonNeturalNFTs.png'
import fastNEasyTrans from '../../public/Assests/images/fastNEasyTrans.png'
import allImgs from '../../public/Assests/images/allImgs.png'
import Image from 'next/image'
import Footer from '@/componnents/Footer'
import Link from 'next/link'
import NavBar from '@/componnents/NavBar'
import FashionistaCard from '@/componnents/UpcomigCreators'
import UpcomingBrands from "@/componnents/UpcomingBrands"
import ProductCardContainer from '@/componnents/NewTrending'

enum Category {
  Men = "men",
  Women = "women",
  Kids = "kids",
  Other = "other"
}
const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div id='homePage'>
          <div className="topSectionBtns">
            <button className='mainColl'>Main Collection</button>
            <button className='creatorsMarket'>Creators Market</button>
          </div>
          <div className='bottomSection'>
            <span className='secondSection' style={{display:"flex" ,justifyContent:"space-around"}}>
              <span className='leftSection' style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                <h1>Clothes are the Spirit of Fation</h1>
                <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='buttons' style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                  <Link href="/explore" >  <button style={{ padding: "1rem 5rem", background: "#6C5DD3", borderRadius: "1rem", border: "none", color: "white" }}>Explore Now</button></Link>
                  <Link href='/createProduct'><button style={{ padding: "1rem 5rem", background: "#6C5DD3", borderRadius: "1rem", border: "none", color: "white" }}>Create</button></Link>
                </div>
                <div id="statistics" style={{display:"flex",gap:"2rem",justifyContent:"center"}}>
                  <span>
                    <h4>
                      100+
                    </h4>
                    <h5 className='lightParag' >
                      Brands
                    </h5>
                  </span>
                  <span>
                    <h4>
                      20k+
                    </h4>
                    <h5 className='lightParag' >
                      Fashion Designer
                    </h5>
                  </span>
                  <span>
                    <h4>
                      60+
                    </h4>
                    <h5 className='lightParag' >
                      Fashion shows
                    </h5>
                  </span>
                </div>
              </span>
              <span className='rightSection'>
                <Image src={allImgs} alt="" />
              </span>
            </span>
            <div className='logos'>
              <span>
                <Image src={adidas} alt="adidas" />
              </span>
              <span>
                <Image src={puma} alt="puma" />
              </span>
              <span>
                <Image src={lacoste} alt="lacoste" />
              </span>
            </div>
            <div className='aboutUs'>
              <h2>
                About Us
              </h2>
              <p className='lightParag' >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='fashionSpeaks'>
              <span className='imgContainer'>
                <span>
                  <Image src={FashionThatSpeaks} alt="" />
                </span>
              </span>
              <span className='description'>
                <h2>
                  Fashion That Speaks
                </h2>
                <p className='lightParag' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.</p>
                <button className='showMore'>Show more</button>
              </span>
            </div>
            <div>
              <span className='allCollections'>
                <h2>
                  All Collections
                </h2>
                <p className='lightParag' >Worlds First Layer 2 Fashions Marketplace</p>
              </span>
              <span className='complexThings'>
                <span>
                  <Image src={noGasFees} alt="" />
                  <p className='lightParag' >No Gas Fees</p>
                </span>
                <span>
                  <Image src={carbonNeturalNFTs} alt="" />
                  <p className='lightParag' >Carbon Netural NFTs</p>
                </span>
                <span>
                  <Image src={fastNEasyTrans} alt="" />
                  <p className='lightParag' >Fast And Easy Transactions</p>
                </span>
              </span>
            </div>
            <div>
              <span className='categories'>
                <h4>All Collections</h4>
                <h4>Verified Brands</h4>
                <h4>Verified Artists</h4>
                <h4>New Drops</h4>
                <h4>Live Shows</h4>
              </span>
              <span>
                <div>
                </div>
              </span>
              <span>
                <h2>
                  New & Trending
                </h2>
                <p className='lightParag' >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </span>
              {/* products */}
              <div className='productSection'>
                <ProductCardContainer />
              </div>
              <span>
                <h2>
                  Upcoming Creators
                </h2>
                <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </span>
              <span>
                <FashionistaCard />
              </span>
              <span>
                <h2>
                  Upcoming Brands
                </h2>
                <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </span>
              <UpcomingBrands />
              <span>

              </span>
            </div>
            <span>
              <h2>
                Freaquently Asked Questions
              </h2>
              <p className='lightParag' >Wanna Ask Something?</p>
            </span>
            <span className='supportQuest'>
              <input type="text" placeholder='Lorem ipsum ipsum ?' />
              <input type="text" placeholder='Lorem ipsum ipsum ?' />
              <input type="text" placeholder='Lorem ipsum ipsum ?' />
              <input type="text" placeholder='Lorem ipsum ipsum ?' />
              <input type="text" placeholder='Lorem ipsum ipsum ?' />
              <input type="text" placeholder='Lorem ipsum ipsum ?' />
            </span>
            <div className='getStarted'>
              <h1>
                Highest Quality Collection
              </h1>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home