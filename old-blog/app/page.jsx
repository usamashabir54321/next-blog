import Link from "next/link";
import "@/styles/home-page.css";
import MagazineList from "@/components/magazines/magazine-list";

export const metadata = {
    title: 'Home Page',
    description: 'App Home Page',
}

const Home = () => {
    return (
        <>
            {/* banner slider */}
            <section className="slider_wrap slider_fullwide slider_engine_revo slider_alias_kidsplanet_slider_1">
                <div id="rev_slider_1_1_wrapper" className="rs-module-wrap" style={{ background: 'url(/img/slider11.jpg)' }}>
                    <div id="rev_slider_1_1" className="revslider-initialised rev_redraw_on_blurfocus rs-module">
                        <div className="rs-slides">
                            <div className="rs-slide">
                                <div className="rs-parallax-wrap rs-layer-wrap rs-slide-1">
                                    <div id="slider-1-slide-2-layer-1" className="black rs-layer">
                                        <div className="accent1_bg slider_bg"></div>
                                    </div>
                                </div>
                                <div className="rs-parallax-wrap rs-layer-wrap rs-slide-2">
                                    <div id="slider-1-slide-2-layer-2" className="largewhite rs-layer">صحت مند زندگی گزارنے<br/>
                                    کے لیے آسان اقدامات
                                    </div>
                                </div>
                                <div className="rs-parallax-wrap rs-layer-wrap rs-slide-3">
                                    <div id="slider-1-slide-2-layer-3" className="smallwhite rs-layer">انفرادی مراحل سے لے کر ای کتابوں تک اور مزید، ہمارے پاس وہ تمام ٹولز ہیں جن کی آپ کو ضرورت ہے۔</div>
                                </div>
                                <div className="rs-parallax-wrap rs-layer-wrap rs-slide-4">
                                    <div id="slider-1-slide-2-layer-4" className="smallwhitebutton rs-layer">
                                        <a href="https://kidsplanet.ancorathemes.com/about-us/" className="sc_button sc_button_style_filled" style={{ paddingLeft: '0' }}>مزید معلومات</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* page content */}
            <div className="page_content_wrap">
                <div className="content">
                    <article className="itemscope post_item post_item_single post_featured_default post_format_standard post-8 page type-page status-publish hentry">
                    <section className="post_content">
                        <section className="wpb-content-wrapper">
                            {/* box categories */}
                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                    <div className="vc_column-inner vc_custom_1438258935637">
                                        <div className="wpb_wrapper">
                                            <div className="sc_content content_wrap py-5">
                                                <div id="sc_services_502941603" className="sc_services sc_services_style_services-3 sc_services_type_icons  sc_slider_nopagination sc_slider_nocontrols" style={{ width: '100%' }}>
                                                    <div className="sc_columns columns_wrap">
                                                        <div className="column-1_4 column_padding_bottom">
                                                            <div id="sc_services_502941603_1" className="sc_services_item sc_services_item_1 odd first">
                                                                <h3 className="sc_services_item_title">تعلیم</h3>
                                                                <a href="https://kidsplanet.ancorathemes.com/services/education/">
                                                                    <span className="sc_icon icon-right"></span>
                                                                    <div className="sc_services_item_description">
                                                                        <p>یہ پلیس ہولڈر کے لیے ویب سائٹ پر ایک ڈمی مواد ہے۔ اس کا کوئی ذریعہ نہیں ہے، اس لیے پرسکون ہو جاؤ۔</p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_4 column_padding_bottom">
                                                            <div id="sc_services_502941603_2" className="sc_services_item sc_services_item_2 even">
                                                                <h3 className="sc_services_item_title">سرگرمیاں</h3>
                                                                <a href="https://kidsplanet.ancorathemes.com/services/activities/">
                                                                    <span className="sc_icon icon-right"></span>
                                                                    <div className="sc_services_item_description">
                                                                        <p>یہ پلیس ہولڈر کے لیے ویب سائٹ پر ایک ڈمی مواد ہے۔ اس کا کوئی ذریعہ نہیں ہے، اس لیے پرسکون ہو جاؤ۔</p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_4 column_padding_bottom">
                                                            <div id="sc_services_502941603_3" className="sc_services_item sc_services_item_3 odd">
                                                                <h3 className="sc_services_item_title">کھلونے</h3>
                                                                <a href="https://kidsplanet.ancorathemes.com/services/toys/">
                                                                    <span className="sc_icon icon-right"></span>
                                                                    <div className="sc_services_item_description">
                                                                        <p>یہ پلیس ہولڈر کے لیے ویب سائٹ پر ایک ڈمی مواد ہے۔ اس کا کوئی ذریعہ نہیں ہے، اس لیے پرسکون ہو جاؤ۔</p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_4 column_padding_bottom">
                                                            <div id="sc_services_502941603_4" className="sc_services_item sc_services_item_4 even">
                                                                <h3 className="sc_services_item_title">کھیل</h3>
                                                                <a href="https://kidsplanet.ancorathemes.com/services/games/">
                                                                    <span className="sc_icon icon-right"></span>
                                                                    <div className="sc_services_item_description">
                                                                        <p>یہ پلیس ہولڈر کے لیے ویب سائٹ پر ایک ڈمی مواد ہے۔ اس کا کوئی ذریعہ نہیں ہے، اس لیے پرسکون ہو جاؤ۔</p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* magazine list */}
                            <MagazineList />
                            {/* posts by category */}
                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="sc_content content_wrap py-5">
                                            <h6 className="sc_title sc_title_dotted sc_align_left" style={{ float: 'right', marginTop: '0.5em', marginBottom: '0px', textAlign: 'left' }}>بلاگ سے</h6>
                                            <div id="sc_blogger_1390911916" className="sc_blogger layout_masonri_3 template_masonri  sc_blogger_horizontal no_description">
                                                <div className="isotope_filters inited">
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter="*" className="theme_button active">تمام</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_77" className="theme_button">سرگرمیاں</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_79" className="theme_button">ابتدائی</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_17" className="theme_button">پری اسکول</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_12" className="theme_button">کھیل</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_64" className="theme_button">کتابیں</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_13" className="theme_button">خاندان</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_63" className="theme_button">اسکول</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_78" className="theme_button">کھلونے</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_76" className="theme_button">دن کی دیکھ بھال</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_16" className="theme_button">مطالعہ</a>
                                                </div>
                                                <div className="isotope_wrap inited" data-columns="3" style={{ position: 'relative', height: '1013.35px' }}>
                                                    <div className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 flt_77 flt_79 flt_17 flt_12 isotope_item_show" style={{ position: 'absolute', left: '0px', top: '0px', opacity: '1' }}>
                                                        <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard odd">
                                                            <div className="post_featured">
                                                            <div className="post_thumb">
                                                                <a className="hover_icon hover_icon_link" href="https://kidsplanet.ancorathemes.com/do-you-think-you-can-spoil-your-baby-with-too-much-love/"><img className="wp-post-image" width="370" alt="Do You Think You Can Spoil Your Baby with Too Much Love?" src="/img/Depositphotos_30164331_original-370x367.jpg" /></a> 
                                                            </div>
                                                            </div>
                                                            <div className="post_content isotope_item_content">
                                                            <h4 className="post_title"><a href="https://kidsplanet.ancorathemes.com/do-you-think-you-can-spoil-your-baby-with-too-much-love/">کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟</a></h4>
                                                            <div className="post_info">
                                                                <span className="post_info_item post_info_posted"><a href="https://kidsplanet.ancorathemes.com/do-you-think-you-can-spoil-your-baby-with-too-much-love/" className="post_info_date">اگست 10, 2015</a></span>
                                                                <span className="post_info_item post_info_posted_by"> کی طرف سے<a href="https://kidsplanet.ancorathemes.com/author/admin/" className="post_info_author">ایڈمن</a></span>
                                                                <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments icon-comment" title="Comments - 0" href="https://kidsplanet.ancorathemes.com/do-you-think-you-can-spoil-your-baby-with-too-much-love/#respond"><span className="post_counters_number">0</span></a>
                                                                <a className="post_counters_item post_counters_likes icon-heart-empty enabled inited" title="Like" href="https://kidsplanet.ancorathemes.com/#" data-postid="492" data-likes="3" data-title-like="Like" data-title-dislike="Dislike"><span className="post_counters_number">3</span></a>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 flt_64 flt_13 flt_63 flt_12 flt_78 isotope_item_show" style={{ position: 'absolute', left: '399px', top: '0px', opacity: '1' }}>
                                                        <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard even">
                                                            <div className="post_featured">
                                                            <div className="post_thumb">
                                                                <a className="hover_icon hover_icon_link" href="https://kidsplanet.ancorathemes.com/self-awareness-how-kids-make-sense-of-life-experiences/"><img className="wp-post-image" width="370" alt="Self-Awareness: How Kids Make Sense of Life Experiences" src="/img/Depositphotos_4730439-370x247.jpg" /></a> 
                                                            </div>
                                                            </div>
                                                            <div className="post_content isotope_item_content">
                                                            <h4 className="post_title"><a href="https://kidsplanet.ancorathemes.com/self-awareness-how-kids-make-sense-of-life-experiences/">خود آگاہی: بچے زندگی کے تجربات کا احساس کیسے کرتے ہیں۔</a></h4>
                                                            <div className="post_info">
                                                                <span className="post_info_item post_info_posted"><a href="https://kidsplanet.ancorathemes.com/self-awareness-how-kids-make-sense-of-life-experiences/" className="post_info_date">اگست 10, 2015</a></span>
                                                                <span className="post_info_item post_info_posted_by"> کی طرف سے<a href="https://kidsplanet.ancorathemes.com/author/admin/" className="post_info_author">ایڈمن</a></span>
                                                                <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments icon-comment" title="Comments - 0" href="https://kidsplanet.ancorathemes.com/self-awareness-how-kids-make-sense-of-life-experiences/#respond"><span className="post_counters_number">0</span></a>
                                                                <a className="post_counters_item post_counters_likes icon-heart-empty enabled inited" title="Like" href="https://kidsplanet.ancorathemes.com/#" data-postid="491" data-likes="1" data-title-like="Like" data-title-dislike="Dislike"><span className="post_counters_number">1</span></a>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 isotope_item_show" style={{ position: 'absolute', left: '799px', top: '0px', opacity: '1' }}>
                                                        <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard odd">
                                                            <div className="post_featured">
                                                            <div className="post_thumb">
                                                                <a className="hover_icon hover_icon_link" href="https://kidsplanet.ancorathemes.com/15-ways-to-improve-your-childs-chances-for-success/"><img className="wp-post-image" width="370" alt="15 Ways To Improve Your Child's Chances For Success" src="/img/Depositphotos_31817075_original-370x366.jpg" /></a> 
                                                            </div>
                                                            </div>
                                                            <div className="post_content isotope_item_content">
                                                            <h4 className="post_title"><a href="https://kidsplanet.ancorathemes.com/15-ways-to-improve-your-childs-chances-for-success/">اپنے بچے کی کامیابی کے امکانات کو بہتر بنانے کے 15 طریقے</a></h4>
                                                            <div className="post_info">
                                                                <span className="post_info_item post_info_posted"><a href="https://kidsplanet.ancorathemes.com/15-ways-to-improve-your-childs-chances-for-success/" className="post_info_date">July 23, 2015</a></span>
                                                                <span className="post_info_item post_info_posted_by"> کی طرف سے<a href="https://kidsplanet.ancorathemes.com/author/admin/" className="post_info_author">ایڈمن</a></span>
                                                                <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments icon-comment" title="Comments - 0" href="https://kidsplanet.ancorathemes.com/15-ways-to-improve-your-childs-chances-for-success/#respond"><span className="post_counters_number">0</span></a>
                                                                <a className="post_counters_item post_counters_likes icon-heart-empty enabled inited" title="Like" href="https://kidsplanet.ancorathemes.com/#" data-postid="204" data-likes="1" data-title-like="Like" data-title-dislike="Dislike"><span className="post_counters_number">1</span></a>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 flt_76 flt_17 flt_63 flt_78 isotope_item_show" style={{ position: 'absolute', left: '399px', top: '446px', opacity: '1' }}>
                                                        <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard even">
                                                            <div className="post_featured">
                                                            <div className="post_thumb">
                                                                <a className="hover_icon hover_icon_link" href="https://kidsplanet.ancorathemes.com/ways-to-recover-from-post-childhood-adversity-syndrome/"><img className="wp-post-image" width="370" alt="Ways to Recover From Post Childhood Adversity Syndrome" src="/img/Depositphotos_25255173_l-2-370x367.jpg" /></a> 
                                                            </div>
                                                            </div>
                                                            <div className="post_content isotope_item_content">
                                                            <h4 className="post_title"><a href="https://kidsplanet.ancorathemes.com/ways-to-recover-from-post-childhood-adversity-syndrome/">پوسٹ چائلڈہڈ ایڈورسٹی سنڈروم سے صحت یاب ہونے کے طریقے</a></h4>
                                                            <div className="post_info">
                                                                <span className="post_info_item post_info_posted"><a href="https://kidsplanet.ancorathemes.com/ways-to-recover-from-post-childhood-adversity-syndrome/" className="post_info_date">July 22, 2015</a></span>
                                                                <span className="post_info_item post_info_posted_by"> کی طرف سے<a href="https://kidsplanet.ancorathemes.com/author/admin/" className="post_info_author">ایڈمن</a></span>
                                                                <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments icon-comment" title="Comments - 0" href="https://kidsplanet.ancorathemes.com/ways-to-recover-from-post-childhood-adversity-syndrome/#respond"><span className="post_counters_number">0</span></a>
                                                                <a className="post_counters_item post_counters_likes icon-heart-empty enabled inited" title="Like" href="https://kidsplanet.ancorathemes.com/#" data-postid="136" data-likes="0" data-title-like="Like" data-title-dislike="Dislike"><span className="post_counters_number">0</span></a>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 flt_77 flt_64 flt_79 flt_12 flt_16 isotope_item_show" style={{ position: 'absolute', left: '799px', top: '565px', opacity: '1' }}>
                                                        <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard odd">
                                                            <div className="post_featured">
                                                            <div className="post_thumb">
                                                                <a className="hover_icon hover_icon_link" href="https://kidsplanet.ancorathemes.com/10-simple-truth-about-raising-happy-and-successful-kids/"><img className="wp-post-image" width="370" alt="10 Simple Truth About Raising Happy and Successful Kids" src="/img/Depositphotos_16048739-370x247.jpg" /></a> 
                                                            </div>
                                                            </div>
                                                            <div className="post_content isotope_item_content">
                                                            <h4 className="post_title"><a href="https://kidsplanet.ancorathemes.com/10-simple-truth-about-raising-happy-and-successful-kids/">خوش اور کامیاب بچوں کی پرورش کے بارے میں 10 سادہ سچائی</a></h4>
                                                            <div className="post_info">
                                                                <span className="post_info_item post_info_posted"><a href="https://kidsplanet.ancorathemes.com/10-simple-truth-about-raising-happy-and-successful-kids/" className="post_info_date">July 22, 2015</a></span>
                                                                <span className="post_info_item post_info_posted_by"> کی طرف سے<a href="https://kidsplanet.ancorathemes.com/author/admin/" className="post_info_author">ایڈمن</a></span>
                                                                <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments icon-comment" title="Comments - 0" href="https://kidsplanet.ancorathemes.com/10-simple-truth-about-raising-happy-and-successful-kids/#respond"><span className="post_counters_number">0</span></a>
                                                                <a className="post_counters_item post_counters_likes icon-heart-empty enabled inited" title="Like" href="https://kidsplanet.ancorathemes.com/#" data-postid="133" data-likes="1" data-title-like="Like" data-title-dislike="Dislike"><span className="post_counters_number">1</span></a>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 flt_77 flt_79 flt_13 flt_63 flt_12 isotope_item_show" style={{ position: 'absolute', left: '0px', top: '566px', opacity: '1' }}>
                                                        <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard even last">
                                                            <div className="post_featured">
                                                            <div className="post_thumb">
                                                                <a className="hover_icon hover_icon_link" href="https://kidsplanet.ancorathemes.com/why-do-aerobically-fit-children-have-better-math-skills/"><img className="wp-post-image" width="370" alt="Why Do Aerobically Fit Children Have Better Math Skills?" src="/img/Depositphotos_10193483-370x247.jpg" /></a> 
                                                            </div>
                                                            </div>
                                                            <div className="post_content isotope_item_content">
                                                            <h4 className="post_title"><a href="https://kidsplanet.ancorathemes.com/why-do-aerobically-fit-children-have-better-math-skills/">ایروبک طور پر فٹ بچوں میں ریاضی کی بہتر مہارتیں کیوں ہوتی ہیں؟</a></h4>
                                                            <div className="post_info">
                                                                <span className="post_info_item post_info_posted"><a href="https://kidsplanet.ancorathemes.com/why-do-aerobically-fit-children-have-better-math-skills/" className="post_info_date">July 22, 2015</a></span>
                                                                <span className="post_info_item post_info_posted_by"> کی طرف سے<a href="https://kidsplanet.ancorathemes.com/author/admin/" className="post_info_author">ایڈمن</a></span>
                                                                <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments icon-comment" title="Comments - 0" href="https://kidsplanet.ancorathemes.com/why-do-aerobically-fit-children-have-better-math-skills/#respond"><span className="post_counters_number">0</span></a>
                                                                <a className="post_counters_item post_counters_likes icon-heart-empty enabled inited" title="Like" href="https://kidsplanet.ancorathemes.com/#" data-postid="131" data-likes="1" data-title-like="Like" data-title-dislike="Dislike"><span className="post_counters_number">1</span></a>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/blog" className="sc_button sc_button_square sc_button_style_filled  sc_button_bg_link sc_button_size_small" style={{ marginTop: '1.15em' }}>مزید مضامین</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* contact us section */}
                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                    <div className="vc_column-inner vc_custom_1438326811722">
                                        <div className="wpb_wrapper">
                                            <div className="sc_content content_wrap donate">
                                                <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_4">
                                                    <div className="column-1_4 sc_column_item sc_column_item_1 odd first">
                                                        <h2 className="sc_title sc_title_regular" style={{ color: '#ffffff' }}>ہمارے ساتھ شامل ہوں!</h2>
                                                    </div>
                                                    <div className="column-2_4 sc_column_item sc_column_item_2 even span_2">
                                                        <h4 className="sc_title sc_title_regular" style={{ lineHeight: '1.8em', marginTop: '0.55em', color: '#ffffff' }}>آپ کے بچے کی بھلائی سے زیادہ کوئی چیز اہم نہیں ہے۔ ہمارے سیمینارز اور ٹریننگز میں شامل ہوں اور اسے برقرار رکھنے کا طریقہ سیکھیں۔</h4>
                                                    </div>
                                                    <div className="column-1_4 sc_column_item sc_column_item_4 even after_span_2">
                                                        <a href="https://kidsplanet.ancorathemes.com/events/" className="sc_button sc_button_square sc_button_style_filled  sc_button_bg_link sc_button_size_large" style={{ marginTop: '0.55em' }}>شامل ہونا</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* video section */}
                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                            <div className="sc_content content_wrap py-5">
                                                <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_2">
                                                    <div className="column-1_2 sc_column_item sc_column_item_1 odd first">
                                                        <div className="sc_video_player">
                                                            <div className="sc_video_frame sc_video_play_button hover_icon hover_icon_play inited" style={{ width: '100%', opacity: '1', height: '321px' }}>
                                                                <img alt="img" src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/serv6.jpg" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="column-1_2 sc_column_item sc_column_item_2 paddingleft even">
                                                        <h6 className="sc_title sc_title_dotted">ایک جاگنے کی کہانی</h6>
                                                        <h3 className="sc_title sc_title_regular" style={{ lineHeight: '1.45em', marginTop: '1.4em', marginBottom: '0.65em' }}>ویڈیو دیکھیں اور جانیں کہ اپنے خاندان کو روزمرہ کے خطرات سے کیسے بچایا جائے!</h3>
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p>یہ پلیس ہولڈر کے لیے ویب سائٹ پر ایک ڈمی مواد ہے۔ اس کا کوئی ذریعہ نہیں ہے، اس لیے پرسکون ہو جاؤ۔</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* timer section */}
                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                            <div className="sc_parallax">
                                                <div className="sc_parallax_content" style={{ backgroundImage: 'url(/img/parralax.jpg)', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                                                    <div className="sc_section aligncenter py-5">
                                                        <div className="sc_section_inner">
                                                            <h6 className="sc_title sc_title_dotted sc_align_center" style={{ textAlign: 'center', color: '#ffffff' }}>نومبر 20, 2023</h6>
                                                            <h2 className="sc_title sc_title_regular sc_align_center" style={{ marginTop: '0.4em', marginBottom: '1.23em', textAlign: 'center', color: '#ffffff' }}>ویڈیو سیمینار: "واضح بچہ”</h2>
                                                            <div className="sc_section">
                                                                <div className="sc_section_inner">
                                                                <div id="sc_countdown_2087630927" className="sc_countdown sc_countdown_style_2 aligncenter inited">
                                                                    <div className="sc_countdown_item sc_countdown_days">
                                                                        <span className="sc_countdown_digits">
                                                                        <span className="">1</span>
                                                                        <span className="">9</span>
                                                                        <span className="">9</span>
                                                                        </span>
                                                                        <span className="sc_countdown_label">دن</span>
                                                                    </div>
                                                                    <div className="sc_countdown_separator">:</div>
                                                                    <div className="sc_countdown_item sc_countdown_hours">
                                                                        <span className="sc_countdown_digits"><span className="">1</span>
                                                                        <span className="">0</span>
                                                                        </span>
                                                                        <span className="sc_countdown_label">گھنٹے</span>
                                                                    </div>
                                                                    <div className="sc_countdown_separator">:</div>
                                                                    <div className="sc_countdown_item sc_countdown_minutes">
                                                                        <span className="sc_countdown_digits">
                                                                        <span className="">0</span>
                                                                        <span className="">1</span>
                                                                        </span>
                                                                        <span className="sc_countdown_label">منٹس</span>
                                                                    </div>
                                                                    <div className="sc_countdown_separator">:</div>
                                                                    <div className="sc_countdown_item sc_countdown_seconds">
                                                                        <span className="sc_countdown_digits">
                                                                        <span className="">0</span>
                                                                        <span className="">0</span>
                                                                        </span>
                                                                        <span className="sc_countdown_label">سیکنڈز</span>
                                                                    </div>
                                                                    <div className="sc_countdown_placeholder hide is-countdown">
                                                                        <span className="countdown-row countdown-show4">
                                                                        <span className="countdown-section">
                                                                        <span className="countdown-amount">199</span>
                                                                        <span className="countdown-period">دن</span>
                                                                        </span>
                                                                        <span className="countdown-section">
                                                                        <span className="countdown-amount">10</span>
                                                                        <span className="countdown-period">گھنٹے</span>
                                                                        </span>
                                                                        <span className="countdown-section">
                                                                        <span className="countdown-amount">1</span>
                                                                        <span className="countdown-period">منٹس</span>
                                                                        </span>
                                                                        <span className="countdown-section">
                                                                        <span className="countdown-amount">0</span>
                                                                        <span className="countdown-period">سیکنڈز</span>
                                                                        </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <a href="https://kidsplanet.ancorathemes.com/events/" className="sc_button sc_button_square sc_button_style_filled  sc_button_bg_link sc_button_size_large" style={{ marginTop: '2.1em' }}>ابھی رجسٹر کریں</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* our galleries */}
                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                            <div className="sc_content content_wrap py-5">
                                                <h6 className="sc_title sc_title_dotted" style={{ marginBottom: '3em' }}>گیلری سے</h6>
                                                <article className="myportfolio-container esg-grid-wrap-container minimal-light esg-entry-skin-polk source_type_custom esg-revealed" id="esg-grid-1-1-wrap" data-alias="gallery-home1" style={{ position: 'relative', zIndex: '0', minHeight: '100px', height: 'auto' }}>
                                                <div className="esg-grid-1-1-fullscreen-forcer esg-fullscreen-forcer" style={{ left: '0px', width: 'auto' }}>
                                                    <div id="esg-grid-1-1" className="esg-grid esg-layout-even esg-container" style={{ background: 'transparent', padding: '0px 0px 0px 0px', boxSizing: 'border-box' }}>
                                                        <div className="esg-overflowtrick" style={{ width: '100%', height: '570px', overflow: 'hidden' }}>
                                                            <ul className="mainul" style={{ height: '570px' }}>
                                                                <li id="eg-1-post-id-0_2728" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-0 tp-esg-item itemtoshow isvisiblenow" data-date="1683582055" data-piig="true">
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_25255173_l-2.jpg" data-no-lazy="1" alt="" width="1200" height="1190" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="/img/Depositphotos_25255173_l-2.jpg" data-src="/img/Depositphotos_25255173_l-2.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(/img/Depositphotos_25255173_l-2.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden', height: '270px' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '93px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}>
                                                                                <a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_25255173_l-2-200x198.jpg" href="./img/Depositphotos_25255173_l-2.jpg" data-width="1200" data-height="1190" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a>
                                                                            </div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale">
                                                                                <a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/ways-to-recover-from-post-childhood-adversity-syndrome/hands-together/" target="_self"><i className="eg-icon-unlink"></i></a>
                                                                            </div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'translate3d(0px, 0px, 0.001px) rotateX(-90deg)' }}>Hands Together</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="eg-1-post-id-1_9633" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-1 tp-esg-item itemtoshow isvisiblenow eg-item-in-focus" data-date="1683582055" data-piig="true" style={{ opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0.1px)', height: '270px', width: '270px', display: 'block', top: '0px', left: '300px', transformOrigin: '50% 50%' }}>
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_31817075_original.jpg" data-no-lazy="1" alt="" width="1206" height="1192" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="/img/Depositphotos_31817075_original.jpg" data-src="/img/Depositphotos_31817075_original.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(/img/Depositphotos_31817075_original.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'perspective(1000px)', opacity: '0', visibility: 'hidden', height: '270px', transformStyle: 'flat' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'perspective(1000px)', opacity: '0', visibility: 'hidden', transformStyle: 'flat' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '83px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'perspective(1000px)', opacity: '0', visibility: 'hidden', transformStyle: 'flat' }}><a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_31817075_original-200x198.jpg" href="./img/Depositphotos_31817075_original.jpg" data-width="1206" data-height="1192" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale"><a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/15-ways-to-improve-your-childs-chances-for-success/small-jumping-boy-holding-bunch-of-balloons/" target="_self"><i className="eg-icon-unlink"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'perspective(1000px) rotateX(-90deg)', transformStyle: 'flat' }}>Small jumping boy holding bunch of balloons</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="eg-1-post-id-2_3049" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-2 tp-esg-item itemtoshow isvisiblenow" data-date="1683582055" data-piig="true" style={{ opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0.1px)', height: '270px', width: '270px', display: 'block', top: '0px', left: '600px', transformOrigin: '50% 50%' }}>
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_10193483.webp" data-no-lazy="1" alt="" width="1200" height="800" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_10193483.jpg" data-src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_10193483.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(/img/Depositphotos_10193483.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden', height: '270px' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '93px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}><a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_10193483-200x133.jpg" href="./img/Depositphotos_10193483.webp" data-width="1200" data-height="800" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale"><a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/why-do-aerobically-fit-children-have-better-math-skills/happy-little-girl-painting-in-her-room-3/" target="_self"><i className="eg-icon-unlink"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'translate3d(0px, 0px, 0.001px) rotateX(-90deg)' }}>Happy little girl painting in her room</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="eg-1-post-id-3_6547" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-3 tp-esg-item itemtoshow isvisiblenow" data-date="1683582055" data-piig="true" style={{ opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0.1px)', height: '270px', width: '270px', display: 'block', top: '0px', left: '900px', transformOrigin: '50% 50%' }}>
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_16048739.webp" data-no-lazy="1" alt="" width="1200" height="800" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_16048739.jpg" data-src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_16048739.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_16048739.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden', height: '270px' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '93px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}><a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_16048739-200x133.jpg" href="./img/Depositphotos_16048739.webp" data-width="1200" data-height="800" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale"><a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/10-simple-truth-about-raising-happy-and-successful-kids/inspiration/" target="_self"><i className="eg-icon-unlink"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'translate3d(0px, 0px, 0.001px) rotateX(-90deg)' }}>Inspiration</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="eg-1-post-id-4_7672" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-4 tp-esg-item itemtoshow isvisiblenow" data-date="1683582055" data-piig="true" style={{ opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0.1px)', height: '270px', width: '270px', display: 'block', top: '300px', left: '0px', transformOrigin: '50% 50%' }}>
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_1713894.jpg" data-no-lazy="1" alt="" width="1968" height="1492" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="/img/Depositphotos_1713894.jpg" data-src="/img/Depositphotos_1713894.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(/img/Depositphotos_1713894.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden', height: '270px' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '93px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}><a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_1713894-200x152.jpg" href="./img/Depositphotos_1713894.jpg" data-width="1968" data-height="1492" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale"><a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/birthday-party/" target="_self"><i className="eg-icon-unlink"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'translate3d(0px, 0px, 0.001px) rotateX(-90deg)' }}>Birthday party</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="eg-1-post-id-5_5928" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-5 tp-esg-item itemtoshow isvisiblenow" data-date="1683582055" data-piig="true" style={{ opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0.1px)', height: '270px', width: '270px', display: 'block', top: '300px', left: '300px', transformOrigin: '50% 50%' }}>
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_4730439.jpg" data-no-lazy="1" alt="" width="1136" height="757" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_4730439.jpg" data-src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_4730439.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_4730439.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ opacity: '0', visibility: 'hidden', height: '270px', transformStyle: 'flat', transform: 'translate(0px, 0px)' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ opacity: '0', visibility: 'hidden', transformStyle: 'flat', transform: 'translate(0px, 0px)' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '93px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'perspective(1000px)', opacity: '0', visibility: 'hidden', transformStyle: 'flat' }}><a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_4730439-200x133.jpg" href="./css/Depositphotos_4730439.jpg" data-width="1136" data-height="757" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale"><a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/self-awareness-how-kids-make-sense-of-life-experiences/family-drawing-and-reading/" target="_self"><i className="eg-icon-unlink"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'perspective(1000px) rotateX(-90deg)', transformStyle: 'flat' }}>Family drawing and reading</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="eg-1-post-id-6_9987" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-6 tp-esg-item itemtoshow isvisiblenow" data-date="1683582055" data-piig="true" style={{ opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0.1px)', height: '270px', width: '270px', display: 'block', top: '300px', left: '600px', transformOrigin: '50% 50%' }}>
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_30164331_original.webp" data-no-lazy="1" alt="" width="1200" height="1191" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_30164331_original.jpg" data-src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_30164331_original.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_30164331_original.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden', height: '270px' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '93px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}><a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/08/Depositphotos_30164331_original-200x199.jpg" href="./img/Depositphotos_30164331_original.webp" data-width="1200" data-height="1191" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale"><a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/do-you-think-you-can-spoil-your-baby-with-too-much-love/girl-drawing-with-pencils-at-school/" target="_self"><i className="eg-icon-unlink"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'translate3d(0px, 0px, 0.001px) rotateX(-90deg)' }}>girl drawing with pencils at school</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="eg-1-post-id-7_9943" data-skin="polk" className="filterall eg-polk-wrapper eg-post-id-7 tp-esg-item itemtoshow isvisiblenow" data-date="1683582055" data-piig="true" style={{ opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0.1px)', height: '270px', width: '270px', display: 'block', top: '300px', left: '900px', transformOrigin: '50% 50%' }}>
                                                                    <div className="esg-media-cover-wrapper">
                                                                        <div className="esg-entry-media-wrapper esg-entry-media-wrapper-even">
                                                                            <div className="esg-entry-media">
                                                                            <img src="/img/Depositphotos_23728559_original.webp" data-no-lazy="1" alt="" width="1250" height="833" style={{ display: 'none' }} />
                                                                            <div className="esg-media-poster" src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/06/Depositphotos_23728559_original.jpg" data-src="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/06/Depositphotos_23728559_original.jpg" data-lazythumb="undefined" style={{ backgroundImage: 'url(https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/06/Depositphotos_23728559_original.jpg)', opacity: '1', visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="esg-entry-cover esg-transition" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden', height: '270px' }}>
                                                                            <div className="esg-overlay esg-transition eg-polk-container" data-delay="0" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}></div>
                                                                            <div className="esg-cc eec" style={{ top: '93px' }}>
                                                                            <div className="esg-center eg-polk-element-0-a esg-transition" data-delay="0.2" data-duration="default" data-transition="esg-fade" style={{ transform: 'translate(0px, 0px)', opacity: '0', visibility: 'hidden' }}><a className="eg-polk-element-0 esgbox inited esgboxffssii" data-thumb="https://kidsplanet.ancorathemes.com/wp-content/uploads/2015/06/Depositphotos_23728559_original-200x133.jpg" href="./img/Depositphotos_23728559_original.webp" data-width="1250" data-height="833" rel="prettyPhoto[slideshow]" data-esgbox="" data-clickreference="0"><i className="eg-icon-search"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-1-a esg-transition" data-delay="0.3" data-duration="default" data-transition="esg-rotatescale"><a className="eg-polk-element-1" href="https://kidsplanet.ancorathemes.com/social-skills-in-preschool/depositphotos_23728559_original/" target="_self"><i className="eg-icon-unlink"></i></a></div>
                                                                            <div className="esg-center eg-polk-element-2 esg-transition" data-delay="0.46" data-duration="default" data-transition="esg-flipdown" style={{ transformOrigin: '50% 0%', opacity: '0', visibility: 'hidden', transform: 'translate3d(0px, 0px, 0.001px) rotateX(-90deg)' }}>at elementary-school</div>
                                                                            <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="esg-loader spinner0" style={{ opacity: '0', visibility: 'hidden' }}>
                                                    <div className="dot1"></div>
                                                    <div className="dot2"></div>
                                                    <div className="bounce1"></div>
                                                    <div className="bounce2"></div>
                                                    <div className="bounce3"></div>
                                                </div>
                                                <div className="esg-relative-placeholder esg-w100-hauto"></div>
                                                </article>
                                                <div className="clear"></div>
                                                <Link href="/blog" className="sc_button sc_button_square sc_button_style_filled  sc_button_bg_link sc_button_size_small" style={{ marginTop: '3.6em' }}>مزید تصویریں</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* testimonials */}
                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                    <div className="vc_column-inner vc_custom_1439201501198">
                                        <div className="wpb_wrapper">
                                            <div className="sc_content content_wrap py-5">
                                                <h6 className="sc_title sc_title_dotted" style={{ marginBottom: '2.5em', color: '#ffffff' }}>کہانیاں</h6>
                                                <div id="sc_testimonials_723916063" className="sc_testimonials sc_testimonials_style_testimonials-3 sc_slider_nopagination sc_slider_nocontrols sc_slider_swiper swiper-slider-container inited sc_testimonials_723916063" style={{ width: '100%', cursor: '-webkit-grab' }}>
                                                    <div className="slides swiper-wrapper" style={{ transform: 'unset', }}>
                                                        <div className="swiper-slide" style={{ position: 'unset', }}>
                                                            <div id="sc_testimonials_723916063_1" className="sc_testimonial_item">
                                                                <div className="sc_testimonial_content">میں اور میری بیٹی بڑے بستر پر فلم دیکھ رہے ہیں۔ ساتھ ساتھ بیٹھا، میرا لیپ ٹاپ اس کے خلاف کھڑا ہوا...<span className="sc_icon icon-right sc_icon_shape_round sc_icon_bg_custom button_in_end"></span></div>
                                                                <div className="sc_testimonial_avatar"><img className="wp-post-image" width="75" height="75" alt="Jenifer Oniston" src="/img/team7-75x75.jpg" /></div>
                                                                <div className="sc_testimonial_author"><span className="sc_testimonial_author_name">Jenifer Oniston</span><span className="sc_testimonial_author_position">Chicago, IL</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide" style={{ position: 'unset', }}>
                                                            <div id="sc_testimonials_723916063_2" className="sc_testimonial_item">
                                                                <div className="sc_testimonial_content">اپنے بچوں کو صحت مند زندگی گزارتے ہوئے دیکھیں؟ تحقیق بتاتی ہے کہ والدین کو سخت نظر آنا چاہیے...<span className="sc_icon icon-right sc_icon_shape_round sc_icon_bg_custom button_in_end"></span></div>
                                                                <div className="sc_testimonial_avatar"><img className="wp-post-image" width="75" height="75" alt="Tamara Lee" src="/img/team5-75x75.jpg" /></div>
                                                                <div className="sc_testimonial_author"><span className="sc_testimonial_author_name">Tamara Lee</span><span className="sc_testimonial_author_position">Chicago, IL</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide" style={{ position: 'unset', }}>
                                                            <div id="sc_testimonials_723916063_3" className="sc_testimonial_item">
                                                                <div className="sc_testimonial_content">اپنے بچوں کو صحت مند زندگی گزارتے ہوئے دیکھیں؟ تحقیق بتاتی ہے کہ والدین کو سخت نظر آنا چاہیے...<span className="sc_icon icon-right sc_icon_shape_round sc_icon_bg_custom button_in_end"></span></div>
                                                                <div className="sc_testimonial_avatar"><img className="wp-post-image" width="75" height="75" alt="Alisa Milano" src="/img/team10-75x75.jpg" /></div>
                                                                <div className="sc_testimonial_author"><span className="sc_testimonial_author_name">Alisa Milano</span><span className="sc_testimonial_author_position">New York, NY</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sc_slider_controls_wrap">
                                                        <a className="sc_slider_prev" href="https://kidsplanet.ancorathemes.com/#"></a>
                                                        <a className="sc_slider_next" href="https://kidsplanet.ancorathemes.com/#"></a>
                                                    </div>
                                                    <div className="sc_slider_pagination_wrap"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    </article>
                    <section className="related_wrap related_wrap_empty"></section>
                </div>
            </div>
        </>
    )
};

export default Home;