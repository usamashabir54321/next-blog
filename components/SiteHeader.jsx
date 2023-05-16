import Link from "next/link";

const SiteHeader = () => {
    return (
        <>
            <header className="top_panel_wrap top_panel_style_1 scheme_original menu_show">
                <div className="top_panel_wrap_inner top_panel_inner_style_1 top_panel_position_above">
                    {/* top panel top */}
                    <div className="top_panel_top">
                        <div className="content_wrap clearfix">
                        <div className="top_panel_top_user_area">
                            <ul id="menu_user" className="menu_user_nav inited sf-js-enabled sf-arrows">
                                <li className="menu_user_login">
                                    <a href="#popup_login" className="popup_link popup_login_link icon-user inited" title="">لاگ ان کریں</a>
                                    <div id="popup_login" className="popup_wrap popup_login bg_tint_light">
                                    <a href="#" className="popup_close"></a>
                                    <div className="form_wrap">
                                        <div className="form_left">
                                            <form action="https://kidsplanet.ancorathemes.com/wp-login.php" method="post" name="login_form" className="popup_form login_form">
                                                <div className="popup_form_field login_field iconed_field icon-user"><input type="text" id="log" name="log" placeholder="Login or Email" /></div>
                                                <div className="popup_form_field password_field iconed_field icon-lock"><input type="password" id="password" name="pwd" placeholder="Password" /></div>
                                                <div className="popup_form_field remember_field">
                                                <a href="https://kidsplanet.ancorathemes.com/my-account/lost-password/" className="forgot_password">Forgot password?</a>
                                                <input type="checkbox" value="forever" id="rememberme" name="rememberme" />
                                                <label htmlFor="rememberme">Remember me</label>
                                                </div>
                                                <div className="popup_form_field submit_field"><input type="submit" className="submit_button" value="Login" /></div>
                                            </form>
                                        </div>
                                        <div className="form_right">
                                            <div className="login_socials_title">You can login using your social profile</div>
                                            <div className="login_socials_list">
                                                <div className="wp-social-login-widget">
                                                <div className="wp-social-login-connect-with">Connect with:</div>
                                                <div className="wp-social-login-provider-list">
                                                    <a rel="nofollow" href="https://kidsplanet.ancorathemes.com/wp-login.php?action=wordpress_social_authenticate&amp;mode=login&amp;provider=Facebook&amp;redirect_to=https%3A%2F%2Fkidsplanet.ancorathemes.com%2F" title="Connect with Facebook" className="wp-social-login-provider wp-social-login-provider-facebook" data-provider="Facebook" role="button">
                                                        <img alt="Facebook" src="https://kidsplanet.ancorathemes.com/wp-content/plugins/wordpress-social-login/assets/img/32x32/wpzoom//facebook.png" aria-hidden="true" />
                                                    </a>
                                                    <a rel="nofollow" href="https://kidsplanet.ancorathemes.com/wp-login.php?action=wordpress_social_authenticate&amp;mode=login&amp;provider=Twitter&amp;redirect_to=https%3A%2F%2Fkidsplanet.ancorathemes.com%2F" title="Connect with Twitter" className="wp-social-login-provider wp-social-login-provider-twitter" data-provider="Twitter" role="button">
                                                        <img alt="Twitter" src="https://kidsplanet.ancorathemes.com/wp-content/plugins/wordpress-social-login/assets/img/32x32/wpzoom//twitter.png" aria-hidden="true" />
                                                    </a>
                                                </div>
                                                <div className="wp-social-login-widget-clearing"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="top_panel_middle">
                        <div className="content_wrap">
                        <div className="columns_wrap columns_fluid">
                            <div className="column-2_5 contact_logo">
                                <div className="logo">
                                    {/* logo */}
                                    <Link href="/">
                                        <img src="/img/logo_light.png" className="logo_main" alt="img" />
                                        <img src="/img/logo_light.png" className="logo_fixed" alt="img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="column-3_5 top_search_panel">
                                <div className="search_wrap search_style_flat search_state_fixed search_ajax inited">
                                    <div className="search_form_wrap">
                                    <form role="search" method="get" className="search_form" action="https://kidsplanet.ancorathemes.com/">
                                        <button type="submit" className="search_submit icon-search" title="Start search"></button>
                                        <input type="text" className="search_field" placeholder="کلیدی لفظ درج کریں۔" name="s" title="Enter keyword" />
                                    </form>
                                    </div>
                                    <div className="search_results widget_area scheme_original">
                                    <a className="search_results_close icon-cancel"></a>
                                    <div className="search_results_content"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* header menu */}
                    <div className="top_panel_bottom">
                        <div className="content_wrap clearfix">
                        <a href="#" className="menu_main_responsive_button icon-down">ہوم ڈیفالٹ</a>
                        <nav role="navigation" className="menu_main_nav_area">
                            <ul id="menu_main" className="menu_main_nav inited sf-js-enabled sf-arrows">
                                <li id="menu-item-869" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-869">
                                    <a href="https://kidsplanet.ancorathemes.com/#" className="sf-with-ul">ہوم پیج</a>
                                    <ul className="sub-menu fadeOutDown animated fast" style={{ display: 'none' }}>
                                    <li id="menu-item-1484" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-item-1484">
                                        <a href="https://kidsplanet.ancorathemes.com/" aria-current="page">ہوم ڈیفالٹ</a>
                                    </li>
                                    <li id="menu-item-589" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-589"><a href="https://kidsplanet.ancorathemes.com/homepage-2/">ہوم پیڈیاٹرک</a></li>
                                    <li id="menu-item-38" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38"><a href="https://kidsplanet.ancorathemes.com/landing-page/">ہوم لینڈنگ</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-1149" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1149">
                                    <a href="https://kidsplanet.ancorathemes.com/#" className="sf-with-ul">خصوصیات</a>
                                    <ul className="sub-menu fadeOutDown animated fast" style={{ display: 'none' }}>
                                    <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a href="https://kidsplanet.ancorathemes.com/typography/">نوع ٹائپ</a></li>
                                    <li id="menu-item-180" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-180"><a href="https://kidsplanet.ancorathemes.com/shortcodes/">Shortcodes</a></li>
                                    <li id="menu-item-1096" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1096"><a href="https://kidsplanet.ancorathemes.com/service-plus/">Service Plus</a></li>
                                    <li id="menu-item-234" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-234"><a href="https://kidsplanet.ancorathemes.com/404-2/">404</a></li>
                                    <li id="menu-item-1451" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1451"><a href="https://kidsplanet.ancorathemes.com/privacy-policy/">Privacy Policy</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-33" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="https://kidsplanet.ancorathemes.com/about-us/">بارے میں</a></li>
                                <li id="menu-item-849" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-849">
                                    <a href="https://kidsplanet.ancorathemes.com/#" className="sf-with-ul">عملہ</a>
                                    <ul className="sub-menu fadeOutDown animated fast" style={{ display: 'none' }}>
                                    <li id="menu-item-39" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39"><a href="https://kidsplanet.ancorathemes.com/our-staff/">Team</a></li>
                                    <li id="menu-item-345" className="menu-item menu-item-type-post_type menu-item-object-team menu-item-345"><a href="https://kidsplanet.ancorathemes.com/team/robert-book/">Team Member</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-43" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43"><a href="https://kidsplanet.ancorathemes.com/services/">خدمات</a></li>
                                <li id="menu-item-399" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-399"><a href="https://kidsplanet.ancorathemes.com/events/">تقریبات</a></li>
                                <li id="menu-item-850" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-850">
                                    <a href="https://kidsplanet.ancorathemes.com/#" className="sf-with-ul">گیلری</a>
                                    <ul className="sub-menu animated fast fadeOutDown" style={{ display: 'none' }}>
                                    <li id="menu-item-42" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42"><a href="https://kidsplanet.ancorathemes.com/cobbles/">Cobbles</a></li>
                                    <li id="menu-item-862" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-862"><a href="https://kidsplanet.ancorathemes.com/masonry/">Masonry</a></li>
                                    <li id="menu-item-861" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-861"><a href="https://kidsplanet.ancorathemes.com/grid/">Grid</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-34" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-34">
                                    <a href="https://kidsplanet.ancorathemes.com/blog/" className="sf-with-ul">بلاگ</a>
                                    <ul className="sub-menu fadeOutDown animated fast" style={{ display: 'none' }}>
                                    <li id="menu-item-427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427"><a href="https://kidsplanet.ancorathemes.com/blog/">Standard With Sidebar</a></li>
                                    <li id="menu-item-848" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-848"><a href="https://kidsplanet.ancorathemes.com/category/standard-without-sidebar/">Standard Without Sidebar</a></li>
                                    <li id="menu-item-796" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-796">
                                        <a href="https://kidsplanet.ancorathemes.com/#" className="sf-with-ul">Masonry</a>
                                        <ul className="sub-menu animated fast fadeOutDown" style={{ display: 'none' }}>
                                            <li id="menu-item-793" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-793"><a href="https://kidsplanet.ancorathemes.com/category/masonry-2-columns/">Masonry (2 columns)</a></li>
                                            <li id="menu-item-791" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-791"><a href="https://kidsplanet.ancorathemes.com/category/masonry-3-columns/">Masonry (3 columns)</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-797" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-797">
                                        <a href="https://kidsplanet.ancorathemes.com/#" className="sf-with-ul">Portfolio</a>
                                        <ul className="sub-menu animated fast fadeOutDown" style={{ display: 'none' }}>
                                            <li id="menu-item-794" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-794"><a href="https://kidsplanet.ancorathemes.com/category/portfolio-2-columns/">Portfolio (2 columns)</a></li>
                                            <li id="menu-item-792" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-792"><a href="https://kidsplanet.ancorathemes.com/category/portfolio-3-columns/">Portfolio (3 columns)</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-795" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-795"><a href="https://kidsplanet.ancorathemes.com/category/post-formats/">Post Formats</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-44" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="https://kidsplanet.ancorathemes.com/shop/">شاپ</a></li>
                                <li id="menu-item-35" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"><a href="https://kidsplanet.ancorathemes.com/contacts/">رابطے</a></li>
                                <li id="blob" style={{ width: '116.238px', height: '0px', left: '713.025px', top: '0px', backgroundColor: 'rgba(0, 0, 0, 0)', opacity: '0', overflow: 'hidden' }}></li>
                            </ul>
                        </nav>
                        <ul className="menu_main_responsive">
                            <li id="menu-item-869" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-869">
                                <a href="#">Homepage</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-1484" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-item-1484">
                                    <a href="https://kidsplanet.ancorathemes.com/" aria-current="page">ہوم ڈیفالٹ</a>
                                    </li>
                                    <li id="menu-item-589" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-589"><a href="https://kidsplanet.ancorathemes.com/homepage-2/">ہوم پیڈیاٹرک</a></li>
                                    <li id="menu-item-38" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38"><a href="https://kidsplanet.ancorathemes.com/landing-page/">ہوم لینڈنگ</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-1149" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1149">
                                <a href="#">خصوصیات</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a href="https://kidsplanet.ancorathemes.com/typography/">نوع ٹائپ</a></li>
                                    <li id="menu-item-180" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-180"><a href="https://kidsplanet.ancorathemes.com/shortcodes/">Shortcodes</a></li>
                                    <li id="menu-item-1096" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1096"><a href="https://kidsplanet.ancorathemes.com/service-plus/">Service Plus</a></li>
                                    <li id="menu-item-234" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-234"><a href="https://kidsplanet.ancorathemes.com/404-2/">404</a></li>
                                    <li id="menu-item-1451" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1451"><a href="https://kidsplanet.ancorathemes.com/privacy-policy/">Privacy Policy</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-33" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="https://kidsplanet.ancorathemes.com/about-us/">بارے میں</a></li>
                            <li id="menu-item-849" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-849">
                                <a href="#">عملہ</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-39" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39"><a href="https://kidsplanet.ancorathemes.com/our-staff/">Team</a></li>
                                    <li id="menu-item-345" className="menu-item menu-item-type-post_type menu-item-object-team menu-item-345"><a href="https://kidsplanet.ancorathemes.com/team/robert-book/">Team Member</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-43" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43"><a href="https://kidsplanet.ancorathemes.com/services/">خدمات</a></li>
                            <li id="menu-item-399" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-399"><a href="/events/">تقریبات</a></li>
                            <li id="menu-item-850" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-850">
                                <a href="#">گیلری</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-42" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42"><a href="https://kidsplanet.ancorathemes.com/cobbles/">Cobbles</a></li>
                                    <li id="menu-item-862" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-862"><a href="https://kidsplanet.ancorathemes.com/masonry/">Masonry</a></li>
                                    <li id="menu-item-861" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-861"><a href="https://kidsplanet.ancorathemes.com/grid/">Grid</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-34" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-34">
                                <a href="https://kidsplanet.ancorathemes.com/blog/">بلاگ</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427"><a href="https://kidsplanet.ancorathemes.com/blog/">Standard With Sidebar</a></li>
                                    <li id="menu-item-848" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-848"><a href="https://kidsplanet.ancorathemes.com/category/standard-without-sidebar/">Standard Without Sidebar</a></li>
                                    <li id="menu-item-796" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-796">
                                    <a href="#">Masonry</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-793" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-793"><a href="https://kidsplanet.ancorathemes.com/category/masonry-2-columns/">Masonry (2 columns)</a></li>
                                        <li id="menu-item-791" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-791"><a href="https://kidsplanet.ancorathemes.com/category/masonry-3-columns/">Masonry (3 columns)</a></li>
                                    </ul>
                                    </li>
                                    <li id="menu-item-797" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-797">
                                    <a href="#">Portfolio</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-794" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-794"><a href="https://kidsplanet.ancorathemes.com/category/portfolio-2-columns/">Portfolio (2 columns)</a></li>
                                        <li id="menu-item-792" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-792"><a href="https://kidsplanet.ancorathemes.com/category/portfolio-3-columns/">Portfolio (3 columns)</a></li>
                                    </ul>
                                    </li>
                                    <li id="menu-item-795" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-795"><a href="https://kidsplanet.ancorathemes.com/category/post-formats/">Post Formats</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-44" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="https://kidsplanet.ancorathemes.com/shop/">شاپ</a></li>
                            <li id="menu-item-35" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"><a href="https://kidsplanet.ancorathemes.com/contacts/">رابطے</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default SiteHeader;