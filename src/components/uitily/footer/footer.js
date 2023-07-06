import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';


const Footers = () => {
    const [t , il8] = useTranslation();

  return (
    <footer style={{backgroundColor: "#F4F4F4" , paddingTop: "50px"}} className="new_footer_area new_footer bg_color ">
        <div className="new_footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                            <a href='/'><img style={{width: "200px"}} src={require("../../../images/preview.png")} alt='shape1' /></a> 
                            <p style={{color: "#FC746C" , margin: "40px 0"}}>{t('Follow Postgait on Social Media')}</p>
                            <div className="f_social_icon">
                            <a href="#" style={{textDecoration: "none" , color: "#949494" , border: "1px solid #949494" , borderRadius: "12px" , padding: "10px" , fontSize: "20px" , marginLeft: "23px"}} className="fab fa-facebook"></a>
                            <a href="#" style={{textDecoration: "none" , color: "#949494" , border: "1px solid #949494" , borderRadius: "12px" , padding: "10px" , fontSize: "20px" , marginLeft: "23px"}} className="fab fa-twitter"></a>
                            <a href="#" style={{textDecoration: "none" , color: "#949494" , border: "1px solid #949494" , borderRadius: "12px" , padding: "10px" , fontSize: "20px" , marginLeft: "23px"}} className="fab fa-instagram"></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                            <ul className="list-unstyled f_list">
                                <li className='name-top' style={{ marginBottom: "20px"}}><a style={{textDecoration: "none" , fontSize: "20px" , color: "#1A1A1A"}} href="/">{t('Home')}</a></li>
                                <li style={{ marginBottom: "20px"}}><a style={{textDecoration: "none" , fontSize: "20px" , color: "#1A1A1A"}}  href="/about">{t('About us')}</a></li>
                                <li style={{ marginBottom: "20px"}}><a style={{textDecoration: "none" , fontSize: "20px" , color: "#1A1A1A"}}  href="/contact">{t('Contact Us')}</a></li>
                                <li style={{ marginBottom: "20px"}}><a style={{textDecoration: "none" , fontSize: "20px" , color: "#1A1A1A"}}  href="/blog">{t('Blog')}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                             <ul className="list-unstyled f_list">
                              <li style={{ marginBottom: "20px"}}><a style={{textDecoration: "none" , fontSize: "20px" , color: "#1A1A1A"}} href="/conditions">{t('Terms and Conditions')}</a></li>
                              <li style={{ marginBottom: "20px"}}><a style={{textDecoration: "none" , fontSize: "20px" , color: "#1A1A1A"}}  href="/privacy">{t('Privacy Policy')}</a></li>
                              <li style={{ marginBottom: "20px"}}><a style={{textDecoration: "none" , fontSize: "20px" , color: "#1A1A1A"}}  href="#">{t('FAQs')}</a></li>
                             </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">

                            <div style={{display:"flex"}} className="f_social_icon social_icon">
                             <img style={{width: "25px" , height: "25px" , marginRight: "20px" , marginTop: "5px" }} src={require("../../../images/Send.png")} alt='shape1' /><p style={{ fontSize: "20px" , color: "#1A1A1A"}}>{t('Jeddah, Saudi Arabia')}</p>
                            </div>
                            <div style={{display:"flex"}} className="f_social_icon social_icon">
                             <img style={{width: "25px" , height: "25px" , marginRight: "20px" , borderRadius: "15px" , marginTop: "5px" }} src={require("../../../images/Message.jpg")} alt='shape1' /><p style={{ fontSize: "20px" , color: "#1A1A1A"}}>support@postgait.com</p>
                            </div>
                            <div style={{display:"flex"}} className="f_social_icon social_icon">
                             <img style={{width: "25px" , height: "25px" , marginRight: "20px" , marginTop: "5px" }} src={require("../../../images/Call.png")} alt='shape1' /><p style={{ fontSize: "20px" , color: "#1A1A1A"}}>+966 055 021 0280</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bg">
                <div className="footer_bg_one"></div>
                <div className="footer_bg_two"></div>
            </div>
        </div>
        <div style={{marginTop: "50px"}} className="footer_bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-7">
                        <p className="mb-0 f_400">© 2023 POSTGAIT.com, subsidiary of Iktsar Elzaman. All rights reserved.</p>
                    </div>
                    <div style={{marginTop: "10px"}} className="col-lg-6 col-sm-5">
                        <p>© 2023 POSTGAIT Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
};

export default Footers;