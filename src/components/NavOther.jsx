import React from "react";
import { Link } from 'react-router-dom';

function NavOther() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="ReactTalaih">
                    <img src="images/logo.png" width="30" height="30"></img>
                </Link>
            </nav>
        </div>
    )
}

export default NavOther;