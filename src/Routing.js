import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignInPage from "./SignUp/SignUpPage";
import LoginPage from "./Login/LoginPage";
import LoggedIn from "./Utilities/LoggedIn";

function Routing() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/signUp" element={<SignInPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/secret" element={
                    <LoggedIn>
                        <LoginPage />
                    </LoggedIn>
                } />
            </Routes>
        </>
    )
}

export default Routing;