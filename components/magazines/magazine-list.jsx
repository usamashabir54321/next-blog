'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const MagazineList = () => {
    // basic variables
    const [cats, setCats] = useState('empty');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const paginationLinks = [];
    useEffect(() => {
            // calling fetching category function
        fetchCats();
    }, [currentPage]);
        // fetching categories function
    const fetchCats = async () => {
        try {
                // posts with page number and offset
            const perPage = 12; // Number of posts per page
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/categories?per_page=${perPage}&page=${currentPage}&_fields=id,description,slug,acf&exclude=1`
            );
            const data = await response.json();
                // updating posts array state
            setCats(data);
            // Extract total pages from the response headers
            const totalPosts = response.headers.get('X-WP-Total');
            setTotalPages(Math.ceil(totalPosts / perPage));
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
        // handeling the page number
    const handlePaginationClick = (page) => {
        const myapp = document.getElementById('my-app');
        myapp.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(page);
    };
        // pagination prev link
    const renderPrevLink = () => {
        if (currentPage > 1)
            return ( <a onClick={() => handlePaginationClick(currentPage - 1)}>Previous</a> );
        return null;
    };
        // making the pagination links
    const renderPaginationLinks = () => {
        const renderPageLink = (page) => {
            return (
                currentPage === page ?
                <span className="pager_current active">{page}</span> :
                <a key={page} onClick={() => handlePaginationClick(page)}>{page}</a>
            );
        };
        const renderEllipsis = () => {
            return <a className="pager_dot">...</a>;
        };
        const renderFirstLink = () => {
            paginationLinks.push(renderPageLink(1));
            if (currentPage > 3) {
                paginationLinks.push(renderEllipsis());
            }
        };
        const renderLastLink = () => {
            if (currentPage <= totalPages) {
                if (currentPage < totalPages - 2) {
                paginationLinks.push(renderEllipsis());
                }
                paginationLinks.push(renderPageLink(totalPages));
            }
        };
        const renderPageRange = () => {
            let start = currentPage - 1;
            let end = currentPage + 1;
            if (start < 2) {
                start = 2;
            }
            if (end > totalPages - 1) {
                end = totalPages - 1;
            }
            for (let page = start; page <= end; page++) {
                paginationLinks.push(renderPageLink(page));
            }
        };
        renderFirstLink();
        renderPageRange();
        renderLastLink();
        return paginationLinks;
    };
        // pagination next link
    const renderNextLink = () => {
        if (currentPage < totalPages)
            return (<a onClick={() => handlePaginationClick(currentPage + 1)}>Next</a>);
        return null;
    };
    return (
        <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="sc_content content_wrap py-5">
                            <h6 className="sc_title sc_title_dotted sc_align_left" style={{ float: 'right', marginTop: '0.5em', marginBottom: '0px', textAlign: 'left', display: 'contents' }}>گزشتہ شمارے</h6>
                            <div id="sc_blogger_1390911916" className="sc_blogger layout_masonri_3 template_masonri  sc_blogger_horizontal no_description">
                                <div className="isotope_filters inited">{/*<a href="https://kidsplanet.ancorathemes.com/#" data-filter="*" className="theme_button active">تمام</a>*/}</div>
                                {/* category listing */}
                                {
                                    cats == 'empty' ? 'لوڈ ہو رہا ہے۔ ...' :
                                    cats.length > 0 ?
                                        <div className="isotope_wrap inited" data-columns="3" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {
                                                cats.map((obj, index) => (
                                                    <div key={index} className="isotope_item isotope_item_masonri isotope_item_masonri_3 isotope_column_3 flt_77 flt_79 flt_17 flt_12 isotope_item_show">
                                                        <div className="post_item post_item_masonri post_item_masonri_3 post_format_standard odd">
                                                            <div className="post_featured">
                                                                {/* thumbnail */}
                                                                <div className="post_thumb">
                                                                    <Link className="hover_icon hover_icon_link" href={`/magazines/${obj.slug}`}>
                                                                        <img className="wp-post-image" width="370" alt={obj.description} src={obj.acf.category_featured_image} />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="post_content isotope_item_content">
                                                                {/* title with link */}
                                                                <h4 className="post_title"><Link href={`/magazines/${obj.slug}`}>{obj.description}</Link></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        : 'کوئی زمرہ نہیں ہے۔'
                                }
                            </div>
                            {/* category pagination */}
                            {
                                totalPages > 1 ?
                                <>
                                    <nav id="pagination" className="pagination_wrap pagination_pages" role="navigation">
                                        {renderPrevLink()}
                                        {renderPaginationLinks()}
                                        {renderNextLink()}
                                    </nav>
                                </>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MagazineList;