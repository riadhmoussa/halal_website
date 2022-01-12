import React from 'react'
import { useNavigate } from "react-router-dom";
import './styles.css'


const Footer = () => {
    const history = useNavigate();

    return (
        <footer class="footer-distributed">

            <div class="footer-left">
                <img src={require('../../assets/logo/white_logo.png')}/>
                    <p class="footer-links">
                        <a href="#">The largest site for displaying and advertising livestock in the Kingdom of Saudi Arabia</a>
                    </p>
                    <div class="footer-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                </div>

            </div>

            <div class="footer-center">
                <div>
                    <p>Terms & Conditions </p>
                </div>

                <div>
                    <p>+91 22-27782183</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:support@eduonix.com">support@eduonix.com</a></p>
                </div>
                <div>
                    <p>Copyrights © Halal 2022</p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <span>Banks Accounts</span>
                    </p>
              
            </div>
        </footer>
    )
}

export default Footer