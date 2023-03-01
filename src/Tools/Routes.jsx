
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Legal from "../Pages/Legal/Legal";
import NotFound from "../Pages/NotFound/NotFound";


function RoutesList()
    {
        return(
            <Routes>
                <Route path="/MentionsLegales" element={<Legal/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<NotFound/>} />        
            </Routes>
        )
    }

export default RoutesList