import React from 'react';
import '../App.css';
const Teams = () => {
    /* Team section */
  return (
    <section className="team" id="team">

    <div className="heading">
        <h1>our team</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
            minus optio?</p>
    </div>

    <div className="box-container">

        <div className="box">
            <div className="image">
            <img src={require('../images/hamad.jpg')} alt=""/>
                <div className="share">
                    <a href="https://www.facebook.com/naimasultana.dhaly.5" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
            </div>
            <div className="content">
                <h3>Hammad Bajwa</h3>
                <p>Manager</p>
            </div>
        </div>

        <div className="box">
            <div className="image">
            <img src={require('../images/team-2.png')} alt=""/>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
            </div>
            <div className="content">
                <h3>Behnam & Swathi</h3>
                <p>make-up artist</p>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={require('../images/team-3.png')} alt=""/>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
            </div>
            <div className="content">
                <h3>Daniyal & Faisal</h3>
                <p>facial artist</p>
            </div>
        </div>

    </div>

</section>

  )
}

export default Teams