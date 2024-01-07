"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconButton, Button, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import theme from '@/app/theme';
import { Kanit } from "next/font/google";
import Paper from '@mui/material/Paper';

//icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const iconStyles = {
  width: "20px",
  height: "20px"
};

const logoContainerStyle = {
  display: "flex",
  marginRight: "10px",
  marginLeft: "30px",
  marginTop: "25px",
  justifyContent: "center",
};

const iconStyle = {
  display: "flex",
  color: "black",
  height: "30px",
  width: "30px",
  marginLeft: "-5px",
  marginTop: "1px",
};

const bottomdivStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "50%",
  marginTop: "20px",
  marginLeft: "5px"
};

const sideBarStyle = {
  position: "fixed",
  top: 10,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "transparent",
  borderTopRightRadius: "40px",
  borderBottomRightRadius: "40px",
  zIndex: 1,
  paddingLeft: "5px",
  marginBottom: "60px",
};

export default function SideBarUser() {
  const [backgroundColor, setBackgroundColor] = React.useState("transparent");
  const [backgroundColor2, setBackgroundColor2] = React.useState("transparent");
  const [contained, setContained] = React.useState("");
  const [border, setBorder] = React.useState("");
  const [elevation, setElevation] = React.useState(0);

  const divStyle = {
    color: "black",
    fontSize: "15px",
    marginLeft: "8px",
    alignSelf: "center",
    marginTop: "5px"
  };

  const buttonStyle = {
    justifyContent: "left",
    backgroundColor: "transparent",
    color: "black",
    borderRadius: "0px",
    textTransform: "none",
    width: "70%",
    border: border,
    marginLeft: "5px",
    marginTop: "-50px",
  };

  const buttonStyle2 = {
    justifyContent: "left",
    backgroundColor: "transparent",
    color: "black",
    borderRadius: "0px",
    textTransform: "none",
    width: "70%",
    border: border,
    marginTop: "10px",
    fontSize: "15px",
    marginLeft: "5px",
    marginTop: "10px",
    marginBottom: "10px"
  };

  const labelStyle = {
    fontSize: "35px",
    marginLeft: "25px",
    color: "#466BB0",
  };

  const cStyle = {
    color: "#21366A",
    marginLeft: "62px",
    marginTop: "-51px",
  };

  return (
    <Paper elevation={elevation} style={sideBarStyle}>
      <ThemeProvider theme={theme}>
        <div>
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
            width: "100%",
            justifySelf: "center",
            marginTop: "5px",
            marginBottom: "45px"
          }}
        ></hr>

        <div style={bottomdivStyle}>
          <Link href="/mainpage">
            <Button style={buttonStyle} variant={contained}>
              <HomeOutlined style={iconStyle} />
              <div style={divStyle}>Inicio</div>
            </Button>
          </Link>

          <Link href="/buscar">
            <Button style={buttonStyle2} variant={contained}>
              <SearchOutlinedIcon style={iconStyle} />
              <div style={divStyle}>Buscar</div>
            </Button>
          </Link>

          <Link href="/mensajes">
            <Button style={buttonStyle2} variant={contained}>
              <MailOutlineIcon style={iconStyle} />
              <div style={divStyle}>Mensajes</div>
            </Button>
          </Link>

          <Link href="/perfil">
            <Button style={buttonStyle2} variant={contained}>
              <PermIdentityOutlinedIcon style={iconStyle} />
              <div style={divStyle}>Perfil</div>
            </Button>
          </Link>

          <Link href="/notificaciones">
            <Button style={buttonStyle2} variant={contained}>
              <NotificationsNoneOutlinedIcon style={iconStyle} />
              <div style={divStyle}>Notificaciones</div>
            </Button>
          </Link>

          <Link href="/publicar">
            <Button style={buttonStyle2} variant={contained}>
              <AddBoxOutlinedIcon style={iconStyle} />
              <div style={divStyle}>Publicar</div>
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
