import {ThemeProvider} from "@mui/material";
import theme from "../Themes";
import Container from "@mui/material/Container";
import UserProfileHeader from "./UserProfileHeader";
import MainProfile from "./MainProfile";
import {useAuth} from "../Hooks/useAuth";
import {useEffect} from "react";


function UserProfilePage() {
    const auth = useAuth()

    useEffect(()=>{
        console.log(auth.user)
    })
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 2,
                mx: 'auto',
                bgcolor: 'greeny.main',
                color: 'blacky.main',
                // height: '20vh',
                width: '100vw',
                fontSize:' 3rem',
                m: 1,
                borderRadius: 1,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <UserProfileHeader />
                <MainProfile />

             </Container>
         </ThemeProvider>
    )
}

export default UserProfilePage;