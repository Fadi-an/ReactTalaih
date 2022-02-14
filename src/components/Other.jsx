import React from 'react';
import { Tweet } from 'react-twitter-widgets';

function Other() {
    return (
        <section class="other">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 other-content">
                        <h1 class="other-title">سلسلة رسالة قداسة</h1>
                        <iframe class="embed-responsive-item ytvideo2" src="https://www.youtube.com/embed/g1jSnBZfM0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="col-lg-6 other-content">
                        <h1 class="other-title">صلوات يوميّة</h1>
                        <div class="embed-responsive embed-responsive-16by9">
                        <a class="twitter-timeline" data-width="450" data-height="350" href="https://twitter.com/Tala2e3Batroun?ref_src=twsrc%5Etfw">Tweets by Tala2e3Batroun</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Other;