import React from 'react';
import '../Styles/Header.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";



function Header() {

  return (
    <div className='__Header'>
      <div className='header_right'>
        < AiOutlineMenuUnfold className='icon' />

      </div>
      <div className='header_left'>
        <select >
          <option value="EN">EN</option>
          <option value="FR">FR</option>
          <option value="AL">AL</option>
          <option value="TU">TU</option>
          <option value="AR">AR</option>


        </select>

      </div>


    </div>
  )
}

export default Header