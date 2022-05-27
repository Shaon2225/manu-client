import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import CheckOut from "./CheckOut";

const Payment = () => {
  const { id } = useParams();
  const [cost,setCost] = useState(0);
  const stripePromise = loadStripe('pk_test_51L3iPOIzcJwnHuAZj2kzBVBU4NzesCo1S1zWKM1AA3kwepRBtQL8QgxlneP2YGOFSODRD9Mq9zscROjFRIjbjcH000SblffIxI');

  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["userProfile"], () => fetch(`https://fathomless-woodland-51722.herokuapp.com/order/${id}`,{
    method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
  }).then((res) => res.json()));

  if(isLoading){
    return <Loading></Loading>
  }
  if(order){
    const price = parseInt(order.orderedQuantity)* parseInt(order.price);
    setCost(price);
    console.log(price);
  }

  return (
    <div className="mx-auto flex flex-col justify-center items-center w-3/4">
      <div class="card w-full max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-accent font-bold">
            <b>Name : </b> {order?.userName}
          </p>
          <h2 class="card-title">Please Pay for {}</h2>
          <p>
            Product Name:{" "}
            <span className="text-orange-700">{order.productName}</span>
          </p>
          <p>Please pay: ${order.orderedQuantity} x ${order.price} = ${}</p>
        </div>
      </div>
      <div class="card w-full max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckOut order={order} cost={cost} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
