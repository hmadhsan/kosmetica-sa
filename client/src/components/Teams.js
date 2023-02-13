import React from 'react';
import '../App.css';
import { Card ,Row, Col} from 'antd';
import daniyal from "../images/dani.jpg";
import behnam from "../images/behnaam.jpg";
import debtabu from "../images/debtanu.jfif";
import swathi from "../images/swathi.jpg";
import faisal from "../images/faisal.jpg";
import hammad from "../images/hammad.jpg";

const { Meta } = Card;
const Teams = () => {
    /* Team section */
  return (
    <section className="team" id="team">

    <div className="heading">
        <h1>our team</h1>
        <p>Some of our very talented team members who made possible to make Kosmetica the number 1 brand in europe are</p>
    </div>
    <Row gutter={32}>
    <Col span={4}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={hammad} />}
  >
    <Meta title="Hammad Hassan" description="Full-Stack Engineer" />
  </Card>
  </Col>
    <Col span={4}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={debtabu} />}
  >
    <Meta title="Debtanu Ganguly" description="Backend Engineer" />
  </Card>
    </Col>
    <Col span={4}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={swathi} />}
  >
    <Meta title="Swathi" description="Frontend Engineer" />
  </Card>
    </Col>
    <Col span={4}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={daniyal} />}
  >
    <Meta title="Daniyal Bukhari" description="Frontend Engineer" />
  </Card>
    </Col>
    <Col span={4}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={behnam}/>}
  >
    <Meta title="Behnaam" description="Frontend Engineer" />
  </Card>
    </Col>
    <Col span={4}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={faisal} />}
  >
    <Meta title="Faisal Imam" description="Frontend Engineer" />
  </Card>
    </Col>
  </Row>

{/* 
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

    </div> */}

</section>

  )
}

export default Teams