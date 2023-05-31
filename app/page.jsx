import "@/styles/home-page.css";
import MagazineList from "@/components/magazines/magazine-list";
import GalleryList from "@/components/gallery/GalleryList";

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
                            {/* gallery list */}
                            <GalleryList />
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
                                                <h6 className="sc_title sc_title_dotted" style={{ marginBottom: '1em', color: '#ffffff' }}>کہانیاں</h6>
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