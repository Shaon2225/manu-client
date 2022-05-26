import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import DltConfirm from "../shared/DltConfirm";
import Loading from "../shared/Loading";

const Allusers = () => {
  const userUrl = `http://localhost:5000/allusers`;
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], () => fetch(userUrl).then((res) => res.json()));

  if (isLoading) {
    <Loading></Loading>;
  }

  const handleDlt = async (email) => {
    const url1 = `http://localhost:5000/allusers/dlt/${email}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(url1, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch();
          });
      }
    });
  };

  const handleAdmin = async (email) => {
    const url1 = `http://localhost:5000/allusers/makeadmin/${email}`;
    await fetch(url1, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div class="overflow-x-auto">
      <h1 className="text-accent text-lg font-bold text-center my-5">
        {" "}
        Total number of user : {users?.length}
      </h1>
      <table class="table w-3/4 flex justify-center items-center mx-auto">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Sign up date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u, index) => {
            return (
              <tr key={u._id}>
                <th className="text-accent text-base">{index + 1}</th>
                <td className="text-accent text-base">{u.name}</td>
                <td className="text-accent text-base">{u.email}</td>
                <td className="text-accent text-base">{u.signUpDate}</td>
                <td>
                  <button
                    className="btn btn-xs mx-1"
                    onClick={() => handleDlt(u.email)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-xs mx-1"
                    onClick={() => handleAdmin(u.email)}
                  >
                    Make admin
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
