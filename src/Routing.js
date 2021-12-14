import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

function Routing() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                {/*<Route path="/" element={<About />} />*/}
            </Routes>
        </>
    )
}

export default Routing;