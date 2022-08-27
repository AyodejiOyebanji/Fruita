import React from "react";
import "../styles/subNav.css";

function SubNav() {
  return (
    <div>
      {/* The navigation menu  */}
      <div class="sub_navbar">
        <div class="subnav">
          <button class="subnavbtn">
            Home <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#company">Company</a>
            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
        <a href="#home">About</a>
        <div class="subnav">
          <button class="subnavbtn">
            Shop <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#bring">Bring</a>
            <a href="#deliver">Deliver</a>
            <a href="#package">Package</a>
            <a href="#express">Express</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            Pages <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            Blog <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default SubNav;
