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
        setProducts(newPro);
      });
  }, []);

  return (
    <div>
      <h1 className="text-neutral text-center text-4xl font-bold my-10">
        Our products
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 justify-items-center">
        {products?.map((product) => (
          <div
            key={product._id}
            className="card card-compact w-96 bg-base-100 shadow-xl sm:mt-10"
          >
            <figure>
              <img src={product.productImg} alt={product.productName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral">{product.productName}</h2>
              <h2 className="text-neutral font-base">
                <b>Price :</b> <span className="text-xl">&#2547;</span>{" "}
                {product.productPrice}
              </h2>
              <h2 className="text-neutral font-base">
                <b>Avaiable :</b> {product.productQuantity} pis
              </h2>
              <h2 className="text-neutral font-base">
                <b>Minimum order quantity :</b> {product.minOrderQuantity} pis
              </h2>
              <p className="text-neutral">{product.productDetails}</p>
              <div className="card-actions justify-end mt-5">
                <Link to={`/productdetails/${product._id}`}>
                  <button className="btn btn-primary">Order Now</button>
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
