import React from "react";

function Reznema() {
    return (
        <div>
            <figure className="figure">
                <img src="images/reznema.png" className="figure-img img-fluid rounded" alt=""></img>
            </figure>
            <h1 className="fare3-title">روزنامة سنة 2022</h1>
            <div className="container">
                <div className="embed-responsive embed-responsive-1by1 calendar">
                    <iframe className="reznema" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23212529&ctz=Asia%2FBeirut&showTz=0&src=dGFsYWloYmF0cm91bkBnbWFpbC5jb20&color=%23D50000" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Reznema;