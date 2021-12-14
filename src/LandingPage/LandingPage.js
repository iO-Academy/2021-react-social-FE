import AppTitle from "../AppTitle/AppTitle"
import SignUpButton from "../SignUpButton/SignUpButton"
import LoginButton from "../LoginButton/LoginButton"
import Container from '@mui/material/Container';

function LandingPage() {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 2,
            mx: 'auto',
            bgcolor: 'greeny.main',
            color: 'lilacy.main',
            height: '100vh',
            width: '100vw',
            fontSize:' 3rem',
            m: 1,
            borderRadius: 1,
            textAlign: 'center',
            justifyContent: 'center',

        }}>
            <AppTitle />
            <div>
                <SignUpButton />
                <LoginButton />
            </div>

        </Container>
    )
}

export default LandingPage;