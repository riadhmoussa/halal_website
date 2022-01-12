import React from 'react'
import { useNavigate } from "react-router-dom";
import './styles.css'
import { AiOutlineHeart } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BiMap } from "react-icons/bi";


const ItemProduct = () => {
    const history = useNavigate();

    return (
       
        <article class="video-container">
        <a href="#" class="thumbnail"  data-duration="12:24">
         <AiOutlineHeart class="btn-heart"/>
          <img class="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
        </a>
        <div class="video-bottom-section">
          <div class="video-details">
            <a href="#" class="video-title">Announce Title</a>
            <div class="video-metadata">
             <BsPerson class="icon"/>
              <span class="video-channel-name">Moussa Riadh</span>
            </div>
            <div class="video-metadata">
              <FiClock class="icon"/>
              <span class="video-channel-name">1 week ago</span>
            </div>
            <div class="video-metadata">
            <BiMap class="icon"/>
              <span class="video-channel-name">Mahdia</span>
            </div>
          </div>
        </div>
      </article>
    )
}

export default ItemProduct