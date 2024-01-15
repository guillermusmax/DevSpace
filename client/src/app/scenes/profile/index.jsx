"use client"
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Kanit } from "next/font/google";
import { useEffect, useState } from "react";
import SideBarUser from "@/components/SideBarUser/SideBarUser";
import Timeline from "@/components/timeline/Timeline";


const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const wallpaperStyle = {
backgroundColor: "#ffffff",
minHeight: "100vh",
minWidth: "100vw",
display: "flex",
justifyContent: "left",
};


export default function Profile() {



useEffect(() => {
        }, []);
return (
    < div style={wallpaperStyle} >
        <SideBarUser />
        <div style={{marginLeft:"380px", marginTop:"20px", width:"500px"}}   >
        </div>
    </div >
    
);
}
