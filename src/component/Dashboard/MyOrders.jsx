import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const userUrl = `https://fathomless-woodland-51722.herokuapp.com/allorders/${user.email}`;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["userProfile"], () => fetch(userUrl,{
    method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
  }).then((res) => res.json()));

  const handleDltOrder = (id) => {
    const url = `https://fathomless-woodland-51722.herokuapp.com/allorders/dlt/${id}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(url, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Product has been deleted.", "success");
            refetch();
          });
      }
    });
  };
  
  
  return (
    <div>
      <h1 className="text-neutral text-lg font-bold text-center my-5">
        {" "}
        Total number of order : {orders?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-3/4 flex justify-center items-center mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => {
              return <tr key={order._id}>
              <th className="text-neutral text-base">{index + 1}</th>
              <td className="text-neutral text-base">{order?.productName}</td>
              <td className="text-neutral text-base">
                {order?.orderedQuantity}
              </td>
              <td className="text-neutral text-base">
                {(order.payment == "unpaid") ? (
                  <>
                  <button className="btn btn-xs mx-1">Unpaid</button>
                  <Link to={``}><button className="btn btn-xs mx-1"> Make payment</button></Link>
                  </>
                ) : (
                  <button className="btn btn-xs mx-1">Paid</button>
                )}
              </td>
              <td>
                {order.payment == "unpaid" && (
                  <button
                    className="btn btn-xs mx-1"
                    onClick={() => handleDltOrder(order._id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
