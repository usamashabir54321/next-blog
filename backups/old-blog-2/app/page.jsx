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
                                                                <a href="/education/"><h3 className="sc_services_item_title">مضامین</h3>
                                                                    <span className="sc_icon icon-right"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_4 column_padding_bottom">
                                                            <div id="sc_services_502941603_2" className="sc_services_item sc_services_item_2 even">
                                                                <a href="/activities/">
                                                                    <h3 className="sc_services_item_title">سرگرمیاں</h3>
                                                                    <span className="sc_icon icon-right"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_4 column_padding_bottom">
                                                            <div id="sc_services_502941603_3" className="sc_services_item sc_services_item_3 odd">
                                                                <a href="/toys/">
                                                                    <h3 className="sc_services_item_title">کھیل</h3>                                                              
                                                                    <span className="sc_icon icon-right"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_4 column_padding_bottom">
                                                            <div id="sc_services_502941603_4" className="sc_services_item sc_services_item_4 even">
                                                                <a href="/games/">
                                                                    <h3 className="sc_services_item_title">ویڈیوز</h3>                                                                
                                                                    <span className="sc_icon icon-right"></span>
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
                                            <h6 className="sc_title sc_title_dotted sc_align_left" style={{ float: 'right', marginTop: '0.5em', marginBottom: '0px', textAlign: 'left' }}> مضامین  </h6>
                                            <div id="sc_blogger_1390911916" className="sc_blogger layout_masonri_3 template_masonri  sc_blogger_horizontal no_description">
                                                <div className="isotope_filters inited">
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter="*" className="theme_button active">تمام</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_77" className="theme_button">اللہ کا دوست</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_79" className="theme_button">ابتدائی</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_17" className="theme_button">پری اسکول</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_12" className="theme_button">کھیل</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_64" className="theme_button">کتابیں</a>
                                                    <a href="https://kidsplanet.ancorathemes.com/#" data-filter=".flt_13" className="theme_button">ادارہ</a>
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