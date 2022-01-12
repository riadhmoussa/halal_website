import React from 'react'
import { useNavigate } from "react-router-dom";
import './styles.css'


const DropDownsMenu = ({title}) => {
    const history = useNavigate();

    return (
        <div class="dropdown">
        <button class="dropbtn">{title}</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    )
}

export default DropDownsMenu