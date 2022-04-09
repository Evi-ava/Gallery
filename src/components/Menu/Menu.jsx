import React from 'react';
import s from "./Menu.module.css";

const Menu = (props) => {
  return (
    <nav className={s.menu}>
      <li>New</li>
      <li>Popular</li>
    </nav>
  ); 
}



export default Menu;