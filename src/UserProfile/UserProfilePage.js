import {ThemeProvider} from "@mui/material";
import theme from "../Themes";
import Container from "@mui/material/Container";
import UserProfileHeader from "./UserProfileHeader";


function UserProfilePage() {
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

             </Container>
         </ThemeProvider>
    )
}

export default UserProfilePage;