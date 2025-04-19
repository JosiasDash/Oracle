import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import URLs from "../URLS";

function RouterApp() {

    return (
        <Router>
            <Routes>
            {
                URLs.map(function(url, index) {
                    return (
                        <Route path={url.path} key={index} element={url.component} />
                    )
                })
            }
            </Routes>
        </Router>
    )
}

export default RouterApp;
