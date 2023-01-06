import React from 'react';
import '../App.css';
const Gallery = () => {
    /* Gallery section */
  return (
<section class="gallery" id="gallery">

<div class="heading">
    <h1>our gallery</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio
        minus optio?</p>
</div>

<div class="lightbox">
    <a href="images/img-1.jpg"><img src={require('../images/img-1.jpg')} alt=""/> </a>
    <a href="images/img-2.jpg"><img src={require('../images/img-2.jpg')} alt=""/> </a>
    <a href="images/img-3.jpg"><img src={require('../images/img-3.jpg')} alt=""/> </a>
    <a href="images/img-4.jpg"><img src={require('../images/img-4.jpg')} alt=""/> </a>
    <a href="images/img-5.jpg"><img src={require('../images/img-5.jpg')} alt=""/> </a>
    <a href="images/img-6.jpg"><img src={require('../images/img-6.jpg')} alt=""/> </a>
</div>

</section>
  )
}
export default Gallery