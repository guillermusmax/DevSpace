        "use client"
        import React from "react";
        import { IconButton } from "@mui/material";
        import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
        import 'bootstrap/dist/css/bootstrap.css'
        import Paper from "@mui/material/Paper";
        import Image from "next/image";
        import { useStyles } from "../layout";
        import { Kanit } from "next/font/google";
        import ThemeProvider from "@mui/material/styles/ThemeProvider";
        import theme from "../theme";
        import CircularProgress from "@mui/material/CircularProgress";
        import { useEffect, useState } from "react";
        import Container from "@mui/material/Container";
        import Badge from '@mui/material/Badge';
        import SideBarUser from "@/components/SideBarUser/SideBarUser";

        // const checkTokenValidity = require("@/utils/jwtValidation").checkTokenValidity;


        const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

        const wallpaperStyle = {
        backgroundColor: "#97B3D2",
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
        width: "472px",
        marginTop: "30px",
        marginLeft: "60px",
        display: "flex",
        };

        const containerUserStyle = {
        display: "flex",
        flexDirection: "row",
        };

        const userInfoStyle = {
        fontSize: "18px",
        color: "grey",
        marginLeft: "40px",
        width: "75%",
        };


        const divIndiceGraphStyle = {
        alignSelf: "center",
        width: "180px",
        height: "180px"
        };

        const divIndiceStyle = {
        display: "flex",
        position: "absolute",
        marginTop: "65px",
        marginLeft: "68px",
        fontSize: "36px"
        };

        const divIndiceTextStyle = {
        fontSize: "24px",
        width: "155px",
        marginLeft: "15px",
        alignSelf: "center",
        marginTop: "20px"
        };

        const paperPeriodosStyle = {
        float: "right",
        borderRadius: "60px",
        border: "2px solid",
        borderColor: theme.palette.primary.main,
        fontSize: "26px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebdfe6",
        marginTop: "-210px",
        marginRight: "85px",
        display: "flex",
        flexDirection: "column",
        height: "100px",
        width: "250px",
        fontWeight: "600"
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
