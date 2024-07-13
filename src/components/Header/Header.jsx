import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <a className={css.logo} href="/">
        Logo
      </a>
      <div className={css.links}>
        <a className={css.link} href="/">
          News
        </a>
        <a className={css.link} href="/">
          Blogs
        </a>
        <a className={css.link} href="/">
          About Us
        </a>
        <a className={css.link} href="/">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
