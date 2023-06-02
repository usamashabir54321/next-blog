'use client';
import PostSidebar from "@/components/post/PostSidebar";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PostSingle = () => {
    const params = useParams();
    const { postslug } = params;
    const decodePostSlug = decodeURIComponent(postslug);
    const [postData, setPostData] = useState('nothing');
    const [user, setUser] = useState('');
    useEffect(() => {
        // current user name
		if (typeof window !== "undefined") {
			const user = JSON.parse(localStorage.getItem('user'));
			// if user name exists
			if (user) {
				// getting post data if user has buy subscription plan
				setPostData('loading');
				getPostData(user);
			} else {
				setUser('empty');
			}
		}
    }, []);
    const getPostData = async (user) => {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/posts?slug=${decodePostSlug}&_fields=id,title,content,acf,featured_image_url,membership&user_id=${user.ID}`);
        const data = await resp.json();
        // setting post data to react state
        setPostData(data[0]);
    };
    return (
        <div className="sidebar_right">
            {/* page content */}
            <div className="page_content_wrap">
                <div className="content_wrap">
                    <div className="content" style={{ width: '100%' }}>
                        {
							user == 'empty' &&
							<div style={{ display: 'flex', justifyContent: 'space-around' }}>
								<Link href="/login" className="btn">اگر آپ کا اکاؤنٹ ہے تو لاگ ان کریں۔</Link>
								<a className="btn" href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/membership-account/membership-levels`} target="_blank">براہ کرم اکاؤنٹ بنائیں</a>
							</div>
						}
                        { postData == 'loading' && 'لوڈ ہو رہا ہے۔...' }
                        {
                            postData.id &&
                            <>
                                {/* post details content */}
                                <article className="itemscope post_item post_item_single post_featured_default post_format_standard post-492 post type-post status-publish format-standard has-post-thumbnail hentry category-masonry tag-activities tag-elementary tag-pre-school tag-sport" itemScope="" itemType="//schema.org/Article">
                                    {/* post title */}
									<h1 itemProp="name" className="post_title entry-title">{postData.title.rendered}</h1>
									{/* post thumbnail */}
									{
										postData.featured_image_url &&
										<section className="post_featured">
											<div className="post_thumb" data-title={postData.title.rendered}>
												<img className="wp-post-image" width="1170" height="660" alt={postData.title.rendered} src={postData.featured_image_url} itemProp="image" />
											</div>
										</section>
									}
									{/* post content */}
									{ postData.content.rendered && <section className="post_content" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: postData.content.rendered.replace(/\n/g, '<br>') }}></section> }
									<br />
									{ postData.acf.post_pdf && <a className="btn" href={postData.acf.post_pdf} target="_blank">پی ڈی ایف ڈاؤن لوڈ کریں</a> }
									{
										!postData.membership ?
											<a className="btn" href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/membership-account/membership-levels`} target="_blank">براہ کرم اکاؤنٹ بنائیں</a>
										: postData.membership == 'expire' ?
											<a className="btn" href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/membership-account/membership-levels`} target="_blank">اپنے اکاؤنٹ کی تجدید کریں۔</a>
										: ''
									}
                                </article>
                            </>
                        }
                        {
                            !postData.id && !postData == 'loading' && <p>مضمون کا ڈیٹا نہیں ہے۔</p>
                        }
                    </div>
                    {/* post side bar */}
                    <PostSidebar />
                </div>
            </div>
        </div>
    )
};

export default PostSingle;