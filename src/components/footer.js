import React from "react";

const Footer = () =>{
    return(
        <>
        <footer className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-10 me-auto mb-4">
                        <h4 className="text-white mb-3"><a href="/suryawanshis">Little</a> Fashion</h4>
                        <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2022 <strong>Little Fashion</strong></p>
                        <br/>
                        <p className="copyright-text">Designed by <a href="" target="_blank">Praveena</a></p>
                    </div>

                    <div className="col-lg-5 col-8">
                        <h5 className="text-white mb-3">Sitemap</h5>

                        <ul className="footer-menu d-flex flex-wrap">
                            <li className="footer-menu-item"><a href="/suryawanshis/about" className="footer-menu-link">Story</a></li>

                            <li className="footer-menu-item"><a href="/suryawanshis/project" className="footer-menu-link">Projects</a></li>

                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Privacy policy</a></li>

                            <li className="footer-menu-item"><a href="#" className="footer-menu-link">FAQs</a></li>

                            <li className="footer-menu-item"><a href="/suryawanshis/contact" className="footer-menu-link">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-4">
                        <h5 className="text-white mb-3">Social</h5>

                        <ul className="social-icon">

                            <li><a href="#" className="social-icon-link"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>

                            <li><a href="#" className="social-icon-link"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>

                            <li><a href="#" className="social-icon-link"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>

                            <li><a href="#" className="social-icon-link"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;