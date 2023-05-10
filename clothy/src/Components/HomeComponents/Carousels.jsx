import styles from "./Carousels.module.css";
import { Link } from "react-router-dom";

export const MyCard=({ src, cap,cap2 })=> {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "320px",
        marginRight: "25px",
        paddingTop:"10px",
        color: "white",
        marginLeft: "10px",
        borderRadius: "10px",
        marginBottom:"7px",
        marginTop:"7px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      <div>
      <img
        src={src}
        alt="i"
        style={{  height: "210px", margin: "auto",marginTop:'10px',
        // border:"2px solid green"
       }}
      />
      </div>
      
      <div className={styles.myCardCaption}>
        <Link to="/">{cap}</Link>
      </div>

      <div className={styles.myCardCaption2}>
      <Link to="/">{cap2}</Link>
      </div>
    </div>
  );
}

export const Carousels=()=> {

  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 270;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 260;
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
            // padding: "0 0px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
            
          }}
        >
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/61Fxn7u8yGL._AC_UL480_QL65_.jpg"
              cap="Top"
              cap2="₹429"
            />
            
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/71cFpnm0b6S._UX522_.jpg"
              cap="Printed Half Sleeve Shirt"
              cap2="₹1498"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://5.imimg.com/data5/TL/FL/MY-48872755/mens-wedding-wear-coat-500x500.jpg"
              cap="Men's Coats"
              cap2="₹1999"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/81S++MvcavL._AC_UL480_QL65_.jpg"
               cap="Men's Jeans"
               cap2="₹899"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/41iwABh3H9L._AC_UL600_FMwebp_QL65_.jpg"
               cap="Cotton Short Kurti"
               cap2="₹499"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/61CfluPc+GL._AC_UL600_FMwebp_QL65_.jpg"
              cap="Zari Digital Printed Saree"
              cap2="₹1498"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/51sRGdRlVXL._AC_UL600_FMwebp_QL65_.jpg"
              cap="Jacket"
              cap2="₹1498"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/717-WaIUi9L._UX569_.jpg"
              cap=" Men Dress Pants"
              cap2="₹879"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
