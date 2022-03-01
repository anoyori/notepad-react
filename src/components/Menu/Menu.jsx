import React, { Component } from "react";
import "./style.css";

export class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <a className="menu-anchor" href="">
          Home
        </a>
        <a className="menu-anchor" href="">
          Note List
        </a>
        <a className="menu-anchor" href="">
          Contact us
        </a>
      </nav>
    );
  }
}

export default Menu;
