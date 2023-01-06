import React from 'react';
import '../App.css';
const Teams = () => {
    /* Team section */
  return (
    <section class="team" id="team">

    <div class="heading">
        <h1>our team</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
            minus optio?</p>
    </div>

    <div class="box-container">

        <div class="box">
            <div class="image">
            <img src={require('../images/hamad.jpg')} alt=""/>
                <div class="share">
                    <a href="https://www.facebook.com/naimasultana.dhaly.5" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="content">
                <h3>Hammad Bajwa</h3>
                <p>Manager</p>
            </div>
        </div>

        <div class="box">
            <div class="image">
            <img src={require('../images/team-2.png')} alt=""/>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="content">
                <h3>Behnam & Swathi</h3>
                <p>make-up artist</p>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src={require('../images/team-3.png')} alt=""/>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
            <div class="content">
                <h3>Daniyal & Faisal</h3>
                <p>facial artist</p>
            </div>
        </div>

    </div>

</section>

  )
}

export default Teams