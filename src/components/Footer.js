import React from 'react'
import '../App.css';
const Footer = () => {
    /* footer section */
  return (
    <section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>quick links</h3>
            <a class="link" href="#home"> <i class="fas fa-angle-right"></i> home</a>
            <a class="link" href="#shop"> <i class="fas fa-angle-right"></i> shop</a>
            <a class="link" href="#gallery"> <i class="fas fa-angle-right"></i> gallery</a>
            <a class="link" href="#team"> <i class="fas fa-angle-right"></i> team</a>
            <a class="link" href="#arrivals"> <i class="fas fa-angle-right"></i> arrivals</a>
            <a class="link" href="#blogs"> <i class="fas fa-angle-right"></i> blogs</a>
        </div>

        <div class="box">
            <h3>extra links</h3>
            <a href="#" class="link"> <i class="fas fa-angle-right"></i> my order </a>
            <a href="#" class="link"> <i class="fas fa-angle-right"></i> my favorite </a>
            <a href="#" class="link"> <i class="fas fa-angle-right"></i> my wishlist </a>
            <a href="#" class="link"> <i class="fas fa-angle-right"></i> private policy </a>
            <a href="#" class="link"> <i class="fas fa-angle-right"></i> terms of use </a>
        </div>


        

        <div class="box">
            <h3>contact info</h3>
            <p> <i class="fas fa-phone"></i> 01878-307396 </p>
            <p> <i class="fas fa-phone"></i> 01684-346530 </p>
            <p> <i class="fas fa-envelope"></i> kosmetica@gmail.com </p>
            <p> <i class="fas fa-map"></i> TH Bingen, Germany. </p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="">
                <input type="email" name="" placeholder="enter your email" id="" class="email"/>
                <input type="submit" value="subscribe" class="btn"/>
            </form>
        </div>

    </div>

    <div class="credit"> Design and Developed by <span>Team Bajwa</span> | all rights reserved! </div>

</section>

  )
}

export default Footer;