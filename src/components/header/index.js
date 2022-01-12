import React from 'react'
import { useNavigate } from "react-router-dom";
import DropDownsMenu from '../dropdowns-menu';
import './styles.css'
import { AiOutlineSearch } from "react-icons/ai";


const Header = () => {
    const history = useNavigate();

    return (
        <header class="header">
        <a href="#">
          <img src={require('../../assets/logo/logo.png')} alt="YouTube Logo" class="youtube-logo" />
        </a>
        <div class="menu-icons">
          <text>Home</text>
          <DropDownsMenu title={"Sections"}/>
          <DropDownsMenu title={"All regions"}/>
        </div>
        <form class="search-bar">
          <input class="search-input" type="search" placeholder="Search here ..." aria-label="Search" />
          <button type="submit" class="search-btn">
           <AiOutlineSearch/>
          </button>
        </form>
        <div class="menu-icons">
          <text class="myprofile-btn">My Profile</text>
          <text class="join-btn">Join Halal</text>
        </div>
      </header>
    )
}

export default Header