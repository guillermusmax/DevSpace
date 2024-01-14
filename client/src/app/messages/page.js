"use client"
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Kanit } from "next/font/google";
import { useEffect, useState } from "react";
import SideBarUser from "@/components/SideBarUser/SideBarUser";
import Nav from "@/components/message/nav/Nav";
import ChatBody from "@/components/message/chatBody/ChatBody";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const wallpaperStyle = {
backgroundColor: "#ffffff",
minHeight: "100vh",
minWidth: "100vw",
display: "flex",
justifyContent: "left",
};


export default function Messages() {



useEffect(() => {
        }, []);
return (
    < div style={wallpaperStyle} >
        <SideBarUser />
        <div style={{marginLeft:"320px", marginTop:"50px", width:"1200px"}}   >
            <div  className="__main">
            <Nav />
      <ChatBody />
            </div>
      
      </div>
    </div>
    
);
}
