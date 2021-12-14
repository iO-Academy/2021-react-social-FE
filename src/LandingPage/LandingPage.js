import AppTitle from "../AppTitle/AppTitle"
import SignUpButton from "../SignUpButton/SignUpButton"
import LoginButton from "../LoginButton/LoginButton"
import Box from '@mui/material/Box';

function LandingPage() {
    return (
        <Box sx={{
            mx: 'auto',
            bgcolor: 'primary.main',
            color: '#fff',
            width: 200,
            p: 1,
            m: 1,
            borderRadius: 1,
            textAlign: 'center',
        }}>
            <AppTitle />
            <SignUpButton />
            <LoginButton />
        </Box>
    )
}

export default LandingPage;