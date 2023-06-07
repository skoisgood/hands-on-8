import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navcontainer}>
      <div className={classes.logo}>เคลฟเวิร์ส</div>
      <div className={classes.menucontainer}>
        <a className={classes.menu} href="">
          About Us
        </a>
        <a className={classes.menu} href="">
          Blog
        </a>
        <a className={classes.menu} href="">
          Career
        </a>
        <a className={classes.menu} href="">
          Contact Us
        </a>
        {/* <div className={classes.menu}>About Us</div>
        <div className={classes.menu}>Blog</div>
        <div className={classes.menu}>Career</div>
        <div className={classes.menu}>Contact Us</div> */}
      </div>
    </div>
  );
};

export default Navbar;
