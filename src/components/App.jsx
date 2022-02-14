import React from 'react';
import Nav from "./Nav.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InitialPhoto from './InitialPhoto.jsx';
import AboutUs from './AboutUs.jsx';
import Lejne from './Lejne.jsx';
import Fourou3 from './Fourou3.jsx';
import Nachatat from './Nachatat.jsx';
import Tanchi2a from './Tanchi2a.jsx';
import Idariyet from './Idariyet.jsx';
import Other from './Other.jsx';
import Footer from './Footer.jsx';
import NavOther from "./NavOther.jsx";
import Reznema from "./Reznema.jsx";

function App() {
    return (
        <Router>
            <main>
                <Switch>
                    <Route path="/reznema">
                        <NavOther />
                        <Reznema />
                    </Route>
                    <Route path="/">
                        <Nav />
                        <InitialPhoto />
                        <AboutUs />
                        <Lejne />
                        <Fourou3 />
                        <Nachatat />
                        <Tanchi2a />
                        <Idariyet />
                        <Other />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;