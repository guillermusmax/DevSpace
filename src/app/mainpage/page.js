        "use client"
        import React from "react";
        import 'bootstrap/dist/css/bootstrap.css'
        import Paper from "@mui/material/Paper";
        import { useStyles } from "../layout";
        import { Kanit } from "next/font/google";
        import ThemeProvider from "@mui/material/styles/ThemeProvider";
        import theme from "../theme";
        import { useEffect, useState } from "react";
        import SideBarUser from "@/components/SideBarUser/SideBarUser";
        import Timeline from "@/components/timeline/Timeline";


        const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

        const wallpaperStyle = {
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "left",
        };
 

        export default function Mainpage() {



        useEffect(() => {
                }, []);
        return (
            < div style={wallpaperStyle} >
                <SideBarUser />
                <div style={{marginLeft:"380px", marginTop:"20px", width:"500px"}}   >
                    <Timeline />
                </div>
            </div >
            
        );
        }
