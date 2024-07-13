import small_1 from "../../img/small1_1x.jpg";
import small_1_2x from "../../img/small1_2x.jpg";
import small_2 from "../../img/small2_1x.jpg";
import small_2_2x from "../../img/small2_2x.jpg";
import small_3 from "../../img/small3_1x.jpg";
import small_3_2x from "../../img/small3_2x.jpg";
import small_4 from "../../img/small4_1x.jpg";
import small_4_2x from "../../img/small4_2x.jpg";
import small_5 from "../../img/small5_1x.jpg";
import small_5_2x from "../../img/small5_2x.jpg";
import small_6 from "../../img/small6_1x.jpg";
import small_6_2x from "../../img/small6_2x.jpg";
import small_7 from "../../img/small7_1x.jpg";
import small_7_2x from "../../img/small7_2x.jpg";
import small_8 from "../../img/small8_1x.jpg";
import small_8_2x from "../../img/small8_2x.jpg";
import css from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside className={css.wrapper}>
      <h2 className={css.title}>More News</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_1}, ${small_1_2x} 2x `} />
              <img src={`${small_1}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_2}, ${small_2_2x} 2x `} />
              <img src={`${small_2}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_3}, ${small_3_2x} 2x `} />
              <img src={`${small_3}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_4}, ${small_4_2x} 2x `} />
              <img src={`${small_4}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_5}, ${small_5_2x} 2x `} />
              <img src={`${small_5}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_6}, ${small_6_2x} 2x `} />
              <img src={`${small_6}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_7}, ${small_7_2x} 2x `} />
              <img src={`${small_7}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.listItemWrapper}>
            <picture className={css.picture}>
              <source srcSet={`${small_8}, ${small_8_2x} 2x `} />
              <img src={`${small_8}`} alt="image" width={140} />
            </picture>
            <h3 className={css.listItemTitle}>
              U.S. downs suspected Chinese spy balloon
            </h3>
            <p className={css.description}>
              China called the vessel’s downing “an excessive reaction” and said
              it “retains the right to respond...
            </p>
            <p className={css.subDescr}>
              Craig Bator -<span>27 Dec 2020</span>
            </p>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
