"use client"
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Input from '@mui/material/Input';
import {
    Button,
    FormControlLabel,
    FormGroup,
    InputAdornment
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Link from "next/link";
import { Kanit } from "next/font/google";
import theme from "../theme";
import { useStyles } from "../layout";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] });

const wallpaperStyle = {
    backgroundImage: "url('/assets//assets/LoginWallpaper.svg')",
    backgroundColor: "white",
    backgroundSize: "cover",  // Cambiado a "cover" para ocupar completamente el fondo
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100vw",  // Cambiado a "100vw" para ocupar completamente el ancho de la pantalla
    display: "flex",
    flexDirection: "column",  // Puedes ajustar esto según tus necesidades
  };

const correoInputStyle = {
    backgroundColor: theme.palette.background.input,
    marginTop: "20px",
    borderRadius: "40px",
    width: "420px",
    height: "50px",
    paddingLeft: "15px",
};

const passwordInputStyle = {
    backgroundColor: theme.palette.background.input,
    marginTop: "30px",
    borderRadius: "40px",
    width: "420px",
    height: "50px",
    paddingLeft: "15px",
};

const checkboxStyle = {
    color: "#466bb0",
};

const checkboxLabelStyle = {
    marginRight: "104px",
    color: theme.palette.secondary.label
};

const linkLabelStyle = {
    alignSelf: "center",
    color: theme.palette.secondary.label,
    marginTop: "-2px",
    marginLeft: "25px",
    textDecoration: "underline",
};

const buttonStyle = {
    marginTop: "40px",
    borderRadius: "10px",
    borderColor: "#466bb0",
    width: "147px",
    alignSelf: "center",
    fontSize: "18px",
    textTransform: "capitalize",
    color: "#97b3d2",
   
};

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => { setShowPassword(!showPassword); };
    const [checked, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [displayEML, setDisplayEML] = useState("none");
    const [displayPWD, setDisplayPWD] = useState("none");
    const regex = /^[a-zA-Z0-9.]*@[a-zA-Z0-9]+\.[a-zA-Z0-9][a-zA-Z0-9]+$/;

    const handleChangeCorreo = (event) => {
        const isValid = regex.test(event.target.value);
        if (!isValid) {
            setDisplayEML("flex");
        } else {
            setDisplayEML("none");
        }
        if (event.target.value === "") {
            setDisplayEML("none");
            setDisplayPWD("none");
        }
        setCorreo(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        // Tu lógica de manejo de formulario aquí
        setIsLoading(false);
    };

    return (
        <div style={wallpaperStyle}>
            <Paper style={useStyles.paperSmall} elevation={3}>
                <Image
                    style={{ marginTop: "54px" }}
                    src={"/assets//assets/Logo.png"}
                    width={70}
                    height={160}
                    alt="Logo app"
                />
                <div style={{ display: "inline-flex", fontSize: "46px", marginTop: "10px" }}>
                    Iniciar<div style={{ color: "#97B3D2", marginLeft: "10px" }}>Sesión</div>
                </div>
                <ThemeProvider theme={theme}>
                    <form onSubmit={handleSubmit}>
                        <FormGroup className={kanit.className}>
                            <Input
                                id="correo"
                                onChange={handleChangeCorreo}
                                className={kanit.className}
                                style={correoInputStyle}
                                placeholder="Correo"
                            />
                            <div
                                style={{
                                    color: "red",
                                    display: displayEML,
                                    marginBottom: "-24px"
                                }}
                                role="alert"
                            >
                                Correo invalido!
                            </div>
                            <Input
                                id="password"
                                className={kanit.className}
                                style={passwordInputStyle}
                                placeholder="Contraseña"
                                type={showPassword ? "text" : "password"}
                                onChange={handleChangePassword}
                                endAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                            onClick={togglePasswordVisibility}
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <div style={{ color: "red", display: displayPWD }}>Credenciales invalidas, intente nuevamente.</div>
                            <div style={{ display: "inline-flex" }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            style={checkboxStyle}
                                            value="check"
                                            checked={checked}
                                            onChange={() => {
                                                setChecked(!checked);
                                            }}
                                        />
                                    }
                                    label={<span className={kanit.className} style={checkboxLabelStyle}>Recuérdame</span>}
                                />
                                <Link href="/recuperar" style={{ display: "flex" }}>
                                    <span style={linkLabelStyle}>Recuperar Contraseña</span>
                                </Link>
                            </div>
                            <Button
                                onClick={handleSubmit}
                                variant="outlined"
                                className={kanit.className}
                                style={buttonStyle}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                            </Button>
                        </FormGroup>
                    </form>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
