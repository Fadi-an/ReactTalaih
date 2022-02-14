import React from "react";
import { Link } from 'react-router-dom';

function NavOther() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to="/">
                    <img src="../images/logo.png" width="30" height="30"></img>
                </Link>
            </nav>
        </div>
    )
}

export default NavOther;