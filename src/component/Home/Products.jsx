import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-woodland-51722.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        const min = data.length - 4;
        const max = data.length - 1;
        const newPro = data.slice(min, max);
        console.log(newPro);
        setProducts(newPro);
      });
  }, []);

  return (
    <div>
      <h1 className="text-accent text-center text-4xl font-bold my-10">
        Our products
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 justify-items-center">
        {products?.map((product) => (
          <div
            key={product._id}
            class="card card-compact w-96 bg-base-100 shadow-xl sm:mt-10"
          >
            <figure>
              <img src={product.productImg} alt={product.productName} />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-accent">{product.productName}</h2>
              <h2 class="text-accent font-base">
                <b>Price :</b> <span className="text-xl">&#2547;</span>{" "}
                {product.productPrice}
              </h2>
              <h2 class="text-accent font-base">
                <b>Avaiable :</b> {product.productQuantity} pis
              </h2>
              <h2 class="text-accent font-base">
                <b>Minimum order quantity :</b> {product.minOrderQuantity} pis
              </h2>
              <p className="text-accent">{product.productDetails}</p>
              <div class="card-actions justify-end mt-5">
                <Link to={`/productdetails/${product._id}`}>
                  <button class="btn btn-primary">Order Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
