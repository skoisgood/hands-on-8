import React from "react";
import classes from "./blog.module.css";
const Blog = (props) => {
  const { section } = props;

  return (
    <div className={classes.box}>
      <span className={classes.author}>{section.author}</span>
      <span className={classes.datetime}>
        {section.date} · {section.readingTime}
      </span>

      <div className={classes.articleheader}>{section.header}</div>
      <div className={classes.desc}>{section.description}</div>

      {section.tags.map((tag) => {
        return <button className={classes.tag}>#{tag}</button>;
      })}
    </div>
  );
};

export default Blog;
