import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.rights}>
        Logo Financial Group LLC <br />
        2022 Logo. All rights reserved
      </p>
      <p className={css.location}>
        2972 Westheimer Rd. Santa Ana, <br />
        Illinois 85486
      </p>
      <div className={css.policy}>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Services</a>
        <a href="/">Disclaimer</a>
      </div>
      <address className={css.address}>
        <a href="tel:4065550120">Phone: (406) 555-0120</a>
        <a href="mailto:logo@gmail.com">Email: logo@gmail.com</a>
      </address>
      <a className={css.logo} href="/">
        Logo
      </a>
    </footer>
  );
};

export default Footer;
