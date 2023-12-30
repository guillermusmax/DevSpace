"use client"
import React from 'react';
import Image from 'next/image';
import { IconButton, Button, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import theme from '@/app/theme';
import { Kanit } from "next/font/google";
import Paper from '@mui/material/Paper';

//icons
import GradeOutlined from '@mui/icons-material/GradeOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const menuButtonStyle = {
    marginTop: "0.5rem",
    color: "black",
    padding: "0.5rem 0.5rem",
    marginLeft: "8px"
};

const iconStyles = {
    width: "2rem",
    height: "2rem"
};

const logoContainerStyle = {
    display: "flex",
    marginRight: "10px",
    marginLeft: "5px",
    marginTop: "30px",
    justifyContent: "center",
};

const iconStyle = {
    display: "flex",
    color: "black",
    height: "35px",
    width: "35px",
    marginLeft: "-5px",
};

const bottomdivStyle = {
    marginTop: "auto",
    alignSelf: "bottom",
    marginBottom: "1rem"
};

export default function SideBarUser() {

    const [collapsed, setCollapsed] = React.useState("95px");
    const [display, setDisplay] = React.useState("none");
    const [backgroundColor, setBackgroundColor] = React.useState("transparent");
    const [backgroundColor2, setBackgroundColor2] = React.useState("transparent");
    const [contained, setContained] = React.useState("");
    const [border, setBorder] = React.useState("");
    const [elevation, setElevation] = React.useState(0);
    const [mbhr, setMbhr] = React.useState("45px");

    const toggleSidebar = () => {
        if (collapsed === "280px") {
            setCollapsed("75px");
            setDisplay("none");
            setBackgroundColor("transparent");
            setBackgroundColor2("transparent");
            setBorder("");
            setContained("");
            setElevation(0);
            setMbhr("45px");
        }
        else {
            setCollapsed("280px");
            setDisplay("flex");
            setBackgroundColor("white");
            setBackgroundColor2("black");
            setContained("contained");
            setBorder("2px solid #506788");
            setElevation(3);
            setMbhr("15px");
        }
    };

    const divStyle = {
        display: display,
        color: "black",
        fontSize: "15px",
        marginLeft: "5px",
        marginTop: "5px"
    };

    const buttonStyle = {
        justifyContent: "left",
        backgroundColor: backgroundColor,
        color: "black",
        borderRadius: "20px",
        textTransform: "none",
        width: "70%",
        border: border
    };

    const buttonStyle2 = {
        justifyContent: "left",
        backgroundColor: backgroundColor,
        color: "black",
        borderRadius: "20px",
        textTransform: "none",
        width: "70%",
        border: border,
        marginTop: "10px",
        fontSize: "1px"
    };

    const labelStyle = {
        display: display,
        fontSize: "30px",
        marginLeft: "65px",
        color: "#466BB0",
    };

    const cStyle = {
        display: display,
        color: "#21366A"
    };

    return (
        <Paper elevation={elevation} style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            height: "100%",
            width: collapsed,
            backgroundColor: backgroundColor,
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            zIndex: 1,
            paddingLeft: "0.7rem"
        }}>
            <ThemeProvider theme={theme}>
                <div>
                    <IconButton onClick={toggleSidebar} style={menuButtonStyle}>
                        <MenuOutlinedIcon style={iconStyles} />
                    </IconButton>
                    <div style={logoContainerStyle}>
                        <Image
                            src={"/assets/assets/LOGOSINFONDO.svg"}
                            width={60}
                            height={60}
                            alt="Logo app"
                        />
                    </div>
                    <div style={labelStyle}>Dev<div style={cStyle}>Space</div></div>
                </div>

                <hr
                    style={{
                        color: backgroundColor2,
                        height: 1.5,
                        width: "90%",
                        justifySelf: "center",
                        marginTop: "5px",
                        marginBottom: mbhr
                    }}
                ></hr>

                <div>
                    <Link href="/mainpage">
                        <Button style={buttonStyle} variant={contained}>
                            <HomeOutlined style={iconStyle} />
                            <div style={divStyle}>Inicio</div>
                        </Button>
                    </Link>

                    <Link href="/buscar">
                        <Button style={buttonStyle2} variant={contained}>
                            <GradeOutlined style={iconStyle} />
                            <div style={divStyle}>Buscar</div>
                        </Button>
                    </Link>

                    <Link href="/mensajes">
                        <Button style={buttonStyle2} variant={contained}>
                            <SignalCellularAltIcon style={iconStyle} />
                            <div style={divStyle}>Mensajes</div>
                        </Button>
                    </Link>

                    <Link href="/perfil">
                        <Button style={buttonStyle2} variant={contained}>
                            <EditOutlined style={iconStyle} />
                            <div style={divStyle}>Perfil</div>
                        </Button>
                    </Link>

                    <Link href="/notificaciones">
                        <Button style={buttonStyle2} variant={contained}>
                            <PeopleAltOutlinedIcon style={iconStyle} />
                            <div style={divStyle}>Notificaciones</div>
                        </Button>
                    </Link>
                </div>

                <div style={bottomdivStyle} >
                    <Link href="/configuracion">
                        <Button style={buttonStyle2} variant={contained}>
                            <SettingsOutlinedIcon style={iconStyle} />
                            <div style={divStyle}>Configuración</div>
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button style={buttonStyle2} variant={contained}>
                            <ExitToAppOutlinedIcon style={iconStyle} />
                            <div style={divStyle}>Salir</div>
                        </Button>
                    </Link>
                </div>
            </ThemeProvider>
        </Paper>
    )
}