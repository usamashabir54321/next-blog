import '@/public/css/main.css';
import '@/public/css/my-custom-style.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'App Page',
  description: 'App Page',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" href='/img/favicon2.webp'></link>
        <link rel="icon" sizes="192x192" href='/img/favicon2.webp'></link>
        <link rel="apple-touch-icon" href='/img/favicon2.webp'></link>
      </head>
      <body className='home page-template-default page page-id-8 theme-kidsplanet woocommerce-js tribe-js default_theme themerex_body body_style_fullscreen body_filled theme_skin_kidsplanet article_style_stretch layout_single-standard template_single-standard top_panel_show top_panel_above sidebar_hide sidebar_outer_hide wpb-js-composer js-comp-ver-6.10.0 vc_responsive scheme_original js_active  vc_desktop  vc_transform  vc_transform'>
        <div id="my-app">
          <div className="body_wrap">
            <div className="page_wrap">
              <div className="top_panel_fixed_wrap"></div>
              {/* header */}
              <SiteHeader />
              {/* page content */}
              { children }
              {/* footer */}
              <SiteFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
};

export default RootLayout;