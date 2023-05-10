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
        // position: "relative",
        // marginLeft: "10px",
        // border: "1px solid lightgray",
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

export const Carousels2=()=> {

  const btnpressprev = () => {
    let box = document.querySelector(".productContainer2");
    box.scrollLeft -= 270;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer2");
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
          className="productContainer2"
          style={{
            // padding: "0 0px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
            
          }}
        >
          <Link to="/">
            <MyCard
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2022/Manayavar--Brand-imagery.jpg"
               cap="Kurta"
               cap2="₹999"
            />
            
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/616WL7KeARL._AC_UL480_QL65_.jpg"
              cap="Women,s Jeans"
              cap2="₹659"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1662130112_1367320.jpg?w=480&dpr=1.3"
               cap="T-Shirts"
               cap2="₹599"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/612XZsEScWL._AC._SR360,460.jpg"
               cap="Salwar Suit"
               cap2="₹799"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/318X3j0Q5wL.jpg"
              cap="Printed Shirt"
              cap2="₹399"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/71q+7G89EgL._AC_UL600_FMwebp_QL65_.jpg"
              cap="Maxi Dress"
              cap2="₹899"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://m.media-amazon.com/images/I/71tMtEBRO8L._UX569_.jpg"
              cap="Sweater"
              cap2="₹849"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://t4.ftcdn.net/jpg/00/87/44/55/360_F_87445575_iHkrH0v4vMDFcU0OIiN9B6akHzwS46Nd.jpg"
              cap="Men's Blazer"
              cap2="₹2199"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
