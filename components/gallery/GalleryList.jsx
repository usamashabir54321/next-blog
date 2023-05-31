
const GalleryList = () => {
    const galleryArray = [
        { src: '/img/gallery/1.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/2.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/3.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/5.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/6.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/7.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/8.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/9.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/10.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
        { src: '/img/gallery/11.jpg', title: 'کیا آپ کو لگتا ہے کہ آپ اپنے بچے کو بہت زیادہ پیار سے خراب کر سکتے ہیں؟' },
    ];
    return (
        <div>
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="sc_content content_wrap py-5">
                                <h6 className="sc_title sc_title_dotted sc_align_left" style={{ float: 'right', marginTop: '0.5em', marginBottom: '2rem', display: 'contents', textAlign: 'left' }}> مضامین  </h6>
                                <div id="sc_blogger_1390911916" className="sc_blogger layout_masonri_3 template_masonri  sc_blogger_horizontal no_description">
                                    <div className="isotope_filters inited"></div>
                                    <div className="isotope_wrap inited" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {
                                            galleryArray.map((obj, index) => (
                                                <div key={index} className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 flt_77 flt_79 flt_17 flt_12 isotope_item_show">
                                                    <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard odd">
                                                        <div className="post_featured">
                                                            <div className="post_thumb"><a className="hover_icon hover_icon_link"><img className="wp-post-image" width="370" alt="Gallery Image" src={obj.src} /></a></div>
                                                        </div>
                                                        <div className="post_content isotope_item_content"><h4 className="post_title">{obj.title}</h4></div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GalleryList;