'use client';
import Link from "next/link";
import PostSidebar from "@/components/post/PostSidebar";
import { useState, useEffect } from 'react';

const Blog = () => {
        // basic variables
    const [posts, setPosts] = useState('empty');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const paginationLinks = [];
    useEffect(() => {
            // fetching my new posts
        fetchPosts();
    }, [currentPage]);
        // function to get posts by page number and offset
    const fetchPosts = async () => {
        try {
                // posts with page number and offset
            const perPage = 5; // Number of posts per page
            const offset = (currentPage - 1) * perPage;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/posts?per_page=${perPage}&offset=${offset}`
            );
            const data = await response.json();
                // updating posts array state
            setPosts(data);
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
        // content words limitify
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        const truncated = text.substr(0, maxLength);
        return truncated.substr(0, truncated.lastIndexOf(' ')) + '...';
    };          
    return (
        <div className="sidebar_right">
            {/* bread crumb area */}
            <div className="top_panel_title top_panel_style_1  title_present scheme_original">
                <div className="top_panel_title_inner top_panel_inner_style_1  title_present_inner">
                    <div className="content_wrap">
                        <h1 className="page_title">All Posts</h1>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="page_content_wrap">
                <div className="content_wrap">
                    {/* posts listing */}
                    <div className="content">
                        {posts == 'empty' ? <p>Loading ...</p> :
                            posts.length > 0 ? posts.map((post) => (
                            <article key={post.id} className="post_item post_item_excerpt post_featured_default post_format_standard odd post-725 post type-post status-publish format-standard has-post-thumbnail hentry category-portfolio-2-columns tag-school">
                                {/* post title */}
                                <h3 className="post_title"><a href="https://kidsplanet.ancorathemes.com/babysitter-hiring-resources/">{post.title.rendered}</a></h3>
                                {/* feathured image */}
                                <div className="post_featured">
                                    <div className="post_thumb">
                                        <a className="hover_icon hover_icon_link" href="https://kidsplanet.ancorathemes.com/babysitter-hiring-resources/">
                                            {post.featured_image_url && (
                                                <img src={post.featured_image_url} className="wp-post-image" alt={post.title.rendered} style={{ maxWidth: '100%' }} />
                                            )}
                                        </a> 
                                    </div>
                                </div>
                                <div className="post_content clearfix">
                                    <div className="post_info">
                                        {/* post date */}
                                        <span className="post_info_item post_info_posted">
                                            <a href="https://kidsplanet.ancorathemes.com/babysitter-hiring-resources/" className="post_info_date">
                                                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", })}
                                            </a>
                                        </span>
                                        {/* author name */}
                                        {post.author_name ? <span className="post_info_item post_info_posted_by">by <a href="https://kidsplanet.ancorathemes.com/author/anc_admin/" className="post_info_author">{post.author_name}</a></span> : ''}
                                        {/* <span className="post_info_item post_info_counters"> <a className="post_counters_item post_counters_comments icon-comment" title="Comments - 0" href="https://kidsplanet.ancorathemes.com/babysitter-hiring-resources/#respond"><span className="post_counters_number">0</span></a>
                                        <a className="post_counters_item post_counters_likes icon-heart-empty enabled inited" title="Like" href="#" data-postid="725" data-likes="12" data-title-like="Like" data-title-dislike="Dislike"><span className="post_counters_number">12</span></a>
                                        </span> */}
                                    </div>
                                    <div className="post_descr">
                                        {post.excerpt.rendered ? <p dangerouslySetInnerHTML={{ __html: truncateText(post.excerpt.rendered, 300) }}></p> : <p dangerouslySetInnerHTML={{ __html: truncateText(post.content.rendered, 300) }}></p>}
                                        <Link href={`/blog/${post.slug}`} className="sc_button sc_button_square sc_button_style_filled  sc_button_bg_link sc_button_size_small">More</Link>
                                    </div>
                                </div>
                            </article>
                            ))
                            : <p>No Post Founds</p>
                        }
                        {/* post pagination */}
                        {
                            totalPages > 0 ?
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
                    {/* post side bar */}
                    <PostSidebar />
                </div>
            </div>
        </div>
    )
};

export default Blog;