import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignInPage from "./SignUp/SignUpPage";
import LoginPage from "./Login/LoginPage";

function Routing() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/signUp" element={<SignInPage />} />
                <Route exact path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}

export default Routing;