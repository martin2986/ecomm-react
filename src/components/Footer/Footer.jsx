import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.top}>
        <div className={classes.item}>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            dolorum veritatis aliquam ipsa alias? Voluptatum, sequi ab explicabo
            nihil deleniti, dolorem vel odit accusantium temporibus corporis
            pariatur repellat et libero!
          </span>
        </div>
        <div className={classes.item}>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil
            omnis repudiandae minima voluptates doloribus quam dicta esse
            officiis consequuntur, tempore cupiditate blanditiis nam? Et.
          </span>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <span className={classes.logo}>Yourstore</span>
          <span className={classes.copyright}>
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className={classes.right}>
          <img src="/img/payment.png" alt="footer img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
