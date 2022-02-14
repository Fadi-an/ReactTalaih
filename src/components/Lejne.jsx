import React from 'react';
import $ from "jquery";


function Lejne() {
//https://bootsnipp.com/snippets/zDQkr

$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    //e=0 is lftLst e=1 is rightLst, el is parent id (multicarousel), s is data-slide=2
    //itemsDiv is multicarouselinner
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval =parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});
    return (
        <div>
            <section id="lejne" className="lejne">

                <h2 className="lejne-title">اللجنة الإقليمية</h2>
                <div className="container">
                    <div className="row">
                        <div className="MultiCarousel" data-items="1,1,4,4" data-slide="1" id="MultiCarousel" data-interval="1000">
                            <div className="MultiCarousel-inner">
                                <div className="item">
                                    <div className="card">
                                        <h3>المرشد</h3>
                                        <p className="card-text eyye">"أعلّمُكَ وأرشدكَ الطّريق الّتي تسلَكُها. أنصحُكَ. عَينيّ عَليك" (مز 8:32)</p>
                                        <img src="ReactTalaih/images/Edgard.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">إدغار حرب، مواليد 6-10-1987، متخصّص في إدارة الأعمال في جامعة الAUL Kaslik وفي اللّاهوت من جامعة الرّوح القدس – كسليك، خادم في رعيّة سيدة الإنتقال – تنّورين الفوقا.</p>
                                                <p className="card-text">صفات تميّزه: الرّوحانيّة، الهدوء والإصغاء، النّهفة.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>الرّئيس</h3>
                                        <p className="card-text eyye">"وهو الّذي سيأتي بهم ويجمعهم من أطراف الأرض" (إرميا 31: 7-9)</p>
                                        <img src="ReactTalaih/images/Fadi.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">فادي أبي نادر، مواليد 27-11-1998، خرّيج الجامعة اللّبنانيّة، متخصّص بهندسة الميكانيك، من فرع السّيدة – مراح الزيّات.</p>
                                                <p className="card-text">صفات تميّزه: الحكمة، كلمتو كلمة، chauffeur اللّجنة.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>نائب الرّئيس</h3>
                                        <p className="card-text eyye">"إذا سقط لا ينطرح، لأنّ الربّ مسندُ يده" (مز 24:37)</p>
                                        <img src="ReactTalaih/images/Georges.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">جورج ضرغام، مواليد 23-06-2001، طالب في الجامعة اللّبنانيّة، يتخصّص في هندسة الإلكترونيك من فرع السّيدة غوما.</p>
                                                <p className="card-text">صفات تميّزه: كاريزما، طيبة القلب، الصّوت العريض والحلو.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>أمينة السّر</h3>
                                        <p className="card-text eyye">"كن أميناً إلى الموت فسأعطيك إكليل الحياة" (سفر رؤيا بوحنا 10:2)</p>
                                        <img src="ReactTalaih/images/Elissa.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">إيليسا الياس، مواليد 26-07-2000، طالبة ماستر في جامعة العائلة المقدّسة، متخصّصة في التّربية الحضانيّة والتّعليم الأساسي، من فرع مار سمعان العامودي – بقسميّا.</p>
                                                <p className="card-text">صفات تميّزها: الدقّة، نظاميّة، تتميّز بعبارة "حاكيين شي مهمّ اليوم؟"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>أمين الصّندوق</h3>
                                        <p className="card-text eyye">"كنت أميناً في القليل فأقيمك على الكثير. أدخل إلى فرح سيّدك" (متى 25: 21-23)</p>
                                        <img src="ReactTalaih/images/Roukoz.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">روكس سلامة، مواليد 06-09-2000، طالب في الجامعة اللّبنانيّة، يتخصّص في الفلسفة، من فرع مار يوحنّا مارون – سلعاتا.</p>
                                                <p className="card-text">صفات تميّزه: الأفكار الخلّاقة، شبّ الplan B، يتميّز بعبارة “how you doing?”</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>وكيلة الرّسالة</h3>
                                        <p className="card-text eyye">"قتَرَك داوُد الأمتعة الّتي معهُ بيد حافظ الأمتعة، وركض إلى الصّفّ وأتى وسألَ عن سلامَة إخوته" (1صم 22:17)</p>
                                        <img src="ReactTalaih/images/Lynn.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">لين كليم، مواليد 10-03-2001، طالبة في الجامعة اللّبنانيّة، تتخصّص في العلوم الريّاضيّة، من فرع مار إدناوس – شبطين.</p>
                                                <p className="card-text">صفات تميّزها: الإبداع في الكتابة، الذّكاء، معروفة بعبارة " لنشوف إذا فيك تربحني بال chess".</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>وكيلة التّنشئة</h3>
                                        <p className="card-text eyye">"لكي يحصلوا هم أيضاً على الخلاص الّذي في المسيح يسوع، مع مجد أبديّ" (2طيم 10:2)</p>
                                        <img src="ReactTalaih/images/Mary.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">ماري زهرا، مواليد 6-10-1999، خرّيجة جامعة الرّوح القدس – كاسليك، متخصّصة في علم النّفس، من فرع ما عبدا – كفيفان.</p>
                                                <p className="card-text">صفات تميّزها: الثّقافة الواسعة، عدد الكتب الموجودة لديها أكثر من عدد شعر رأسها، score قياسي بزيارة الفروع.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>وكيلة الإعلام</h3>
                                        <p className="card-text eyye">"فليضئ نوركم هكذا قدام الناس لكي يروا أعمالكم الصّالحة ويمجّدوا أباكم الّذي في السّماوات" (متى 5: 16)</p>
                                        <img src="ReactTalaih/images/Myriam.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">ميريام لحود، مواليد 20-06-1998، طالبة ماستر في إدارة الموارد البشريّة  ومتخصّصة في العمل الصحّي الإجتماعي، من فرع مار بنديلامون – بجدرفل.</p>
                                                <p className="card-text">صفات تميّزها: الصّراحة، الجهوزيّة الدّائمة، عطول قدّ التحدّي. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card">
                                        <h3>المستشار</h3>
                                        <p className="card-text eyye">"من استشارهُ فأفهمهُ وعلّمهُ في طريق الحقّ، وعلّمه معرفةً وعرّفه سبيل الفهم؟" (إش 14:40)</p>
                                        <img src="ReactTalaih/images/Geovany.png" className="card-img-top" alt="..."></img>
                                        <div className="filler">
                                            <div className="card-body">
                                                <p className="card-text">جيوفاني منذر، مواليد 19-10-1996، طالب في الجامعة الألمانيّة اللّبنانيّة، يتخصّص في الaudiovisuel، من فرع مار بنديلامون – بجدرفل.</p>
                                                <p className="card-text">صفات تميّزه: الجديّة، مشغول دايماً، pro تصوير.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn moreButton leftLst">N</button>
                            <button className="btn moreButton rightLst">P</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lejne;