import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footercontainer}>
      <hr />
    
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

export default Footer;
