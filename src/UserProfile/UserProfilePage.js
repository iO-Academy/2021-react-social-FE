import {ThemeProvider} from "@mui/material";
import theme from "../Themes";
import Container from "@mui/material/Container";
import UserProfileHeader from "./UserProfileHeader";
import UserProfileUsername from "./UserProfileUserName";
import UserProfileWritePost from "./UserProfileWritePost";
import UserPosts from "./UserPosts";


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
                width: '1',
                fontSize:' 3rem',
                m: 1,
                borderRadius: 1,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <UserProfileHeader />
             </Container>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 2,
                mx: 'auto',
                bgcolor: 'lilacy.main',
                color: 'whitey.main',
                // height: '20vh',
                width: '30vw',
                fontSize:' 1rem',
                m: 4,
                borderRadius: 5,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <UserProfileUsername/>
            </Container>
            <UserProfileWritePost />
                <UserPosts />
         </ThemeProvider>
    )
}

export default UserProfilePage;