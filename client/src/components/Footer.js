import React from 'react'
import '../App.css';
const Footer = () => {
    /* footer section */
  return (
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>quick links</h3>
            <a className="link" href="#home"> <i className="fas fa-angle-right"></i> Home</a>
            <a className="link" href="#shop"> <i className="fas fa-angle-right"></i> Shop</a>
            <a className="link" href="#gallery"> <i className="fas fa-angle-right"></i> Gallery</a>
            <a className="link" href="#team"> <i className="fas fa-angle-right"></i> Team</a>
            <a className="link" href="#arrivals"> <i className="fas fa-angle-right"></i> Arrivals</a>
            <a className="link" href="#blogs"> <i className="fas fa-angle-right"></i> blogss</a>
        </div>

        <div className="box">
            <h3>extra links</h3>
            <a href="#" className="link"> <i className="fas fa-angle-right"></i> My order </a>
            <a href="#" className="link"> <i className="fas fa-angle-right"></i> My favorite </a>
            <a href="#" className="link"> <i className="fas fa-angle-right"></i> My wishlist </a>
            <a href="#" className="link"> <i className="fas fa-angle-right"></i> Private policy </a>
            <a href="#" className="link"> <i className="fas fa-angle-right"></i> Terms of use </a>
        </div>


        

        <div className="box">
            <h3>contact info</h3>
            <p> <i className="fas fa-phone"></i> 01878-307396 </p>
            <p> <i className="fas fa-phone"></i> 01684-346530 </p>
            <p> <i className="fas fa-envelope"></i> kosmetica@gmail.com </p>
            <p> <i className="fas fa-map"></i> TH Bingen, Germany. </p>
            
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="">
                <input type="email" name="" placeholder="enter your email" id="" className="email"/>
                <input type="submit" value="subscribe" className="btn"/>
            </form>
        </div>

    </div>

    <div className="credit"> Design and Developed by <span>Team Bajwa</span> | all rights reserved! </div>

</section>

  )
}

export default Footer;