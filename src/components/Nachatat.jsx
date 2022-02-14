import React from 'react';

function Nachatat() {
    return (
        <div>
            <section id="Nachatat" className="nachatat">
                <h1 className="nachatat-title">نشاطاتنا</h1>
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-md-4">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">معك بتكمل الجلسة</h3>
                                    <div className="mb-1 text-muted">27-26-25 شباط</div>
                                    <p className="card-text mb-auto">خلوة روحيّة تدريبيّة لعمدات الفروع في دير راهبات العيلة - كفيفان</p>
                                    <a href="" className="stretched-link">المزيد</a>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img className="bd-placeholder-img" width="200" height="250" src="ReactTalaih/images/Ma3akBtekmalJalse.jpeg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">مهرجان الطّلائع</h3>
                                    <div className="mb-1 text-muted">1 آب</div>
                                    <p className="card-text mb-auto">بهدف دعم الصّندوق وجمع الطّلائع بعد غياب طويل، نظّمت</p>
                                    <a href="#" className="stretched-link">المزيد</a>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img className="bd-placeholder-img" width="200" height="250" src="ReactTalaih/images/TalaihFestival.jpeg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">شعار 2021</h3>
                                    <div className="mb-1 text-muted">6 شباط</div>
                                    <p className="card-text mb-auto">اطلاق سنة 2021 عبر تطبيق Teams</p>
                                    <a href="#" className="stretched-link">المزيد</a>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img className="bd-placeholder-img" width="200" height="250" src="ReactTalaih/images/Chi3ar2021.jpeg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="nachatat-btn">
                        <a href="nachatat.html"><button className="btn btn-lg moreButton">جميع النّشاطات</button></a>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Nachatat;