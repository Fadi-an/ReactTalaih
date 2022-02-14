import React from 'react';
import { Tweet } from 'react-twitter-widgets';

function Other() {
    return (
        <section className="other">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 other-content">
                        <h1 className="other-title">سلسلة رسالة قداسة</h1>
                        <iframe className="embed-responsive-item ytvideo2" src="https://www.youtube.com/embed/ty5zcg9XY3U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-lg-6 other-content">
                        <h1 className="other-title">صلوات يوميّة</h1>
                        <div className="embed-responsive embed-responsive-16by9">
                        <a className="twitter-timeline" data-width="450" data-height="350" href="https://twitter.com/Tala2e3Batroun?ref_src=twsrc%5Etfw">Tweets by Tala2e3Batroun</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Other;