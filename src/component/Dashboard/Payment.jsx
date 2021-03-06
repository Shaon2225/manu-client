import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import CheckOut from "./CheckOut";

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe("pk_test_51L3iPOIzcJwnHuAZj2kzBVBU4NzesCo1S1zWKM1AA3kwepRBtQL8QgxlneP2YGOFSODRD9Mq9zscROjFRIjbjcH000SblffIxI");


  const url = `https://fathomless-woodland-51722.herokuapp.com/order/${id}`;
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["order"], () => fetch(url,{
    method: 'GET',
    mode:"no-cors",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
  }).then((res) => res.json()));

  if(isLoading){
    return <Loading></Loading>
  }
  

  return (
    <div className="mx-auto flex flex-col justify-center items-center w-3/4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-neutral font-bold">
            <b>Name : </b> {order?.userName}
          </p>
          <h2 className="card-title">Please Pay for {}</h2>
          <p>
            Product Name:{" "}
            <span className="text-orange-700">{order?.productName}</span>
          </p>
          <p>Please pay: ${order?.orderedQuantity} x ${order?.price} = ${order?.orderedQuantity*order?.price}</p>
        </div>
      </div>
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckOut order={order} cost={order?.orderedQuantity*order?.price} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
