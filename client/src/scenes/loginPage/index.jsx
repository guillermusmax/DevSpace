import { Box, Typography, useTheme, useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "./Form.jsx";



const LoginPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const primaryLight = theme.palette.primary.light;
    
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return <Box>
        <Box width="100%" 
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          DevSpace
        </Typography>
        </Box>
        <Box width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        border="1.5rem"
        backgroundColor={theme.palette.background.alt}>
            <Typography fontWeight="500" variant="h5" sx={ {mb: "1.5rem"}}>
                Welcome to DevSpace, the programmers Social Media.
            </Typography>
           
            <Form/>
        </Box>
        
        </Box>;
        
    
}

export default LoginPage;