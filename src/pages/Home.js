import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from "../images/nft11.png" 
import { useState } from 'react'
const Home = () => { 
    const[mobiletextstate,setmobiletextstate]=useState("text-4xl md:hidden w-[100vw] h-[30vh]  items-center text-center flex")
    return (
        <>
            <div className="container">
                <div className="md:w-[90vw] mx-auto">
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Home