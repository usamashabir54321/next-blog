'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const SingleMagazine = () => {
    const params = useParams();
    const { slug } = params;
    const [cat, setCat] = useState(null);
    const [posts, setPosts] = useState('empty');
    useEffect(() => {
        getCatId();
    }, [slug]);
    const getCatId = async () => {
        const catres = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/categories?_fields=id,description,acf&slug=${slug}`);
        await catres.json().then(data => {
            setCat(data[0]);
            getPostByCatId(data[0].id);
        });
    };
    const getPostByCatId = async (id) => {
        const postres = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/posts?categories=${id}&_fields=id,slug,title,acf`);
        const postData = await postres.json();
        setPosts(postData);
    };
    return (
        <div>
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="sc_content content_wrap py-5">
                                <h6 className="sc_title sc_align_left" style={{ textAlign: 'center' }}>{cat ? cat.description : '' }</h6>
                                <div id="sc_blogger_1390911916" className="sc_blogger layout_masonri_3 template_masonri  sc_blogger_horizontal no_description">
                                    <div className="isotope_filters inited">{/*<a href="https://kidsplanet.ancorathemes.com/#" data-filter="*" className="theme_button active">تمام</a>*/}</div>
                                    <div className='magazine-details-div'>
                                        <div className='mag_left'>
                                            {cat ? <img src={cat.acf.category_featured_image} alt={cat.description}></img> : '' }
                                        </div>
                                        <div className='mag_right'>
                                            {
                                                posts == 'empty' ? 'لوڈ ہو رہا ہے۔...' :
                                                posts.length > 0 ?
                                                    <>
                                                        <h1 className='table_heading'>{posts.length}&nbsp;&nbsp;مضامین کا گل دان</h1>
                                                        <div className="site_table">
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <th> نمبر شمار</th>
                                                                        <th>عنوان</th>
                                                                        <th>مضمون نگار</th>
                                                                    </tr>
                                                                    {
                                                                        posts.map((obj, index) => (
                                                                            <tr key={index}>
                                                                                <td>1</td>
                                                                                <td><Link href={`/magazines/${slug}/${obj.slug}`} className="table_title">{obj.title.rendered}</Link></td>
                                                                                <td><Link href={`/magazines/${slug}/${obj.slug}`}>{obj.acf.post_auhor}</Link></td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </>
                                                : <h1 className='table_heading'>کوئی مضمون نہیں۔</h1>
                                            }
                                        </div>
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

export default SingleMagazine;