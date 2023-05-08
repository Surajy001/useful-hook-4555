import styles from "./Carousels.module.css";
import { Link } from "react-router-dom";

export function MyCard({ src, cap }) {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "311px",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft: "-10px",
        border: "1px solid lightgray",
        // borderRadius: "10px",
      }}
    >
      <img
        src={src}
        alt="i"
        style={{  height: "210px", margin: "auto",marginTop:'15px' }}
      />
      <div className={styles.myCardCaption}>
        <Link to="/">{cap}</Link>
      </div>
    </div>
  );
}

export const Carousels=()=> {

  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-Women-2._CB439603748_.jpg"
               //cap="Coats & Jackets"

            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Men.jpg"
               //cap="Bag"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-men-2._CB439603748_.jpg"
               //cap="Shoes"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/G/31/img19/Jew/Feb/380-500.jpg"
               //cap="Accessories"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Women.jpg"
              //cap="Clothing"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/MAYART/P0/COOP/PUMA-Men-s-Casual-Denim-wear_49.png"
              //cap="Baby"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/MAYART/P0/COOP/Peter-England-Men-s-Formal-wear_30.png"
              //cap="Fragrance"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/Revised_Luxe-brands._SY530_QL85_.jpg"
              //cap="Gifts"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
