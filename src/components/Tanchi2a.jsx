import React from 'react';
import tanchi2a from "../tanchi2a.js";
import PostCard from "./PostCard";

function createPost(post){
    return(
        <PostCard
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
            <section id="Tanchi2a" class="tanchi2a">
                <h1 class="tanchi2a-title">التنشئة</h1>
                <div class="container tanchi2a-content">
                    <div class="row">
                        {tanchi2a.map(createPost)}
                    </div>
                </div>
                <div class="container">
                    <div class="nachatat-btn">
                        <a href="tanchi2a.html"><button class="btn btn-lg btn-dark">المزيد</button></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tanchi2a;