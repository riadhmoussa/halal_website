import React from 'react'
import { useNavigate } from "react-router-dom";
import DropDownsMenu from '../../components/dropdowns-menu';
import Footer from '../../components/Footer';

import './styles.css'
import Header from '../../components/header';
import ItemProduct from '../../components/item-product';

const HomeScreen = () => {
    const history = useNavigate();
    
    return (
        <body>
        <Header/>
      
        <div class="videos">
          <section class="video-section">
          {Array.from({ length: 20 }, (_, i) => 
          <ItemProduct/>
          )}
           
           
          </section>
         
        </div>
        <Footer/>
      </body>
    )
}

export default HomeScreen