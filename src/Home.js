import React, { useState } from "react";
import "./Home.css";
import Product from "./products";
import img1 from "./img/1.gif";
import img2 from "./img/2.gif";
import img3 from "./img/3.gif";
import img4 from "./img/4.gif";
import img5 from "./img/5.gif";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";

function Home() {
  const [formSerchTearm, setFormTearm] = useState();

  return (
    <div className="home">
      <section>
        <Product
          search={setFormTearm}
          id="1"
          title="Fruit and Vegetable Tray"
          image={img1}
          price="$50.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="2"
          title="Classic Hostess Tray"
          image={img2}
          price="$30.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="3"
          title="Fruit Pizza"
          image={img3}
          price="$50.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="4"
          title="Fruit Tray"
          image={img4}
          price="$18.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="5"
          title="Signature Dill Dip Appetizer Tray"
          image={img5}
          price="$30.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="6"
          title="Kales"
          image={img6}
          price="$3.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="7"
          title="Onions"
          image={img7}
          price="$2.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="8"
          title="Oranges"
          image={img8}
          price="$5.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="9"
          title="Bananas"
          image={img9}
          price="$3.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="10"
          title="Watermelon"
          image={img10}
          price="$6.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="11"
          title="Chili and Peppers"
          image={img11}
          price="$6100"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="12"
          title="Cabbages"
          image={img12}
          price="$3.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="13"
          title="Carrots"
          image={img13}
          price="$1.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="14"
          title="Mango"
          image={img14}
          price="$5.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="1"
          title="Fruit and Vegetable Tray"
          image={img1}
          price="$50.00"
          button="ADD TO CART"
        />
        <Product
          search={setFormTearm}
          id="15"
          title="Garlic	"
          image={img2}
          price="$2.00"
          button="ADD TO CART"
        />
      </section>
    </div>
  );
}

export default Home;
