import React from 'react';
import tanchi2a from "../tanchi2a.js";
import PostCard from "./PostCard";

function createPost(post){
    return(
        <PostCard
            key={post.id}
            img={post.img}
            link={post.link}
            title={post.title}
            text={post.text}
         />
    )
}

function Tanchi2a() {
    return (
        <div>
            <section id="Tanchi2a" className="tanchi2a">
                <h1 className="tanchi2a-title">التنشئة</h1>
                <div className="container tanchi2a-content">
                    <div className="row">
                        {tanchi2a.map(createPost)}
                    </div>
                </div>
                <div className="container">
                    <div className="nachatat-btn">
                        <a href="tanchi2a.html"><button className="btn btn-lg btn-dark">المزيد</button></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tanchi2a;