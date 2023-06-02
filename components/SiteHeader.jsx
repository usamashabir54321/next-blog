'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

const SiteHeader = () => {
    const pathname = usePathname();
	const [isMenue, setIsMenu] = useState(false);
	useEffect(() => {
		// setting all empty on page refreshing
		localStorage.setItem("lastest_cats", '');
		localStorage.setItem("total_cat_pages", '');
		// getting all fetch items once
		fetchCats();
	}, []);
	const fetchCats = async () => {
		try {
			const perPage = 12; // Number of posts per page
			const response = await fetch( `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/categories?per_page=12&page=1&_fields=id,description,slug,acf&exclude=1` );
			const data = await response.json();
			localStorage.setItem("lastest_cats", JSON.stringify(data));
			const totalPosts = response.headers.get('X-WP-Total');
			localStorage.setItem("total_cat_pages", Math.ceil(totalPosts / perPage));
		} catch (error) {
			console.error('Error fetching posts:', error);
		}
	};
    return (
        <>
            <header className="top_panel_wrap top_panel_style_1 scheme_original menu_show">
                <div className="top_panel_wrap_inner top_panel_inner_style_1 top_panel_position_above">
                    <div className="top_panel_middle">
                        <div className="content_wrap">
                        <div className="columns_wrap columns_fluid">
							<button id="mobile-nav-toggler" onClick={() => setIsMenu(!isMenue)}><i className={`fa ${isMenue ? 'fa-close' : 'fa-bars'}`}></i></button>
                            {/* logo area */}
                            <div className="column-1_5 contact_logo logo-era">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/img/web-logo.png" className="logo_main" alt="img" />
                                        <img src="/img/web-logo.png" className="logo_fixed" alt="img" />
                                    </Link>
                                </div>
                            </div>
                            {/* menu area */}
                            <div className={`column-3_5 contact_logo menu-era ${isMenue ? 'active' : ''}`} style={{ display: 'inline-flex', justifyContent: 'center' }}>
                                <nav role="navigation" className="menu_main_nav_area">
                                    <ul id="menu_main" className="menu_main_nav inited sf-js-enabled sf-arrows">
                                        <li className={`menu-item menu-item-type-custom menu-item-object-custom ${pathname == '/' ? 'current-menu-item' : ''}`}>
                                            <Link href="/" className="sf-with-ul">ہوم پیج</Link>
                                        </li>
                                        <li className={`menu-item menu-item-type-custom menu-item-object-custom ${pathname == '/magazines' ? 'current-menu-item' : ''}`}>
                                            <Link href="/magazines" className="sf-with-ul">شمارے</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-33">
                                            <Link href="/">بارے میں</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-849">
                                            <Link href="/" className="sf-with-ul">عملہ</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43">
                                            <Link href="/">خدمات</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* login area */}
                            <div className="column-1_5 top_search_panel">
                                <div className="search_wrap search_style_flat search_state_fixed search_ajax inited">
                                    <ul id="menu_user" className="menu_user_nav inited sf-js-enabled sf-arrows">
                                        <li className="menu_user_login">
                                            {
												localStorage.getItem('user') ?
												JSON.parse(localStorage.getItem('user')).display_name  : <Link href="/login" className="popup_link popup_login_link icon-user inited">لاگ ان کریں</Link>
											}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default SiteHeader;