import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignInPage from "./SignUp/SignUpPage";

function Routing() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/signUp" element={<SignInPage />} />
            </Routes>
        </>
    )
}

export default Routing;