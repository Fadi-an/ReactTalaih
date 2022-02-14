import React from "react";

function PostCard(props) {
    return (
        <div className="col-lg-4">
            <a href={props.link} target="_blank"><img className="bd-placeholder-img rounded-circle" src={props.img} width="140" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img></a>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default PostCard;