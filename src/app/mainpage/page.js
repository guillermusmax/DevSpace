        "use client"
        import React from "react";
        import 'bootstrap/dist/css/bootstrap.css'
        import Paper from "@mui/material/Paper";
        import Image from "next/image";
        import { useStyles } from "../layout";
        import { Kanit } from "next/font/google";
        import ThemeProvider from "@mui/material/styles/ThemeProvider";
        import theme from "../theme";
        import { useEffect, useState } from "react";
        import SideBarUser from "@/components/SideBarUser/SideBarUser";

        // const checkTokenValidity = require("@/utils/jwtValidation").checkTokenValidity;


        const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

        const wallpaperStyle = {
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "left",
        };

        const labelStyle = {
        fontWeight: "bold",
        fontSize: "48px",
        display: "flex",
        marginLeft: "40px",
        marginTop: "10px",
        justifyContent: "space-between"
        };

        const paperStyle = {
        width: "202px",
        marginTop: "30px",
        marginLeft: "60px",
        display: "flex",
        };

        const containerUserStyle = {
        display: "flex",
        flexDirection: "row",
        };

       
        const paperFontStyle = {
        fontSize: "20px",
        fontWeight: "100",
        fontStyle: "italic"
        };

        export default function Mainpage() {



        useEffect(() => {
                }, []);
        return (
            < div style={wallpaperStyle} >
                <SideBarUser />
                <Paper elevation={3} style={useStyles.paperBig}>
                    <div className={kanit.className} style={labelStyle}>
                        Welcome, User!
                    </div>
                    <ThemeProvider theme={theme}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Paper elevation={0} style={paperStyle}>
                                <div style={containerUserStyle}>
                                <Image
                                    src="/assets/assets/userVacio.png"
                                    alt="Profile picture"
                                    height={150}
                                    width={150}
                                    />
                                </div>
                            </Paper>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignContent: "space-between", flexDirection: "column", height: "45%", marginTop: "-55px" }}>
                        </div>
                        <div>
                        </div>
                    </ThemeProvider>
                </Paper>
            </div >
        );
        }
