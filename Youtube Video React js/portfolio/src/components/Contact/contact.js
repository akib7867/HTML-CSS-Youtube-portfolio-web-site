import React from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Facebookicon from '../../assets/facebook-icon.png'
import Twittericon from '../../assets/twitter.png'
import Youtubeicon from '../../assets/youtube.png'
import Instagramicon from '../../assets/instagram.png'


const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle"> My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse  group of companies.
                    Some of the notable companies I have worked with includes
                </p>

                <div className="clientImgs">
                    <img src={walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                </div>

            </div>



            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="conatctdesc"> Please fill out the below to discuss any work oppotunities.</span>
                <form className="contactform">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={Facebookicon} alt="" className="link" />
                        <img src={Twittericon} alt="" className="link" />
                        <img src={Youtubeicon} alt="" className="link" />
                        <img src={Instagramicon} alt="" className="link" />

                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact