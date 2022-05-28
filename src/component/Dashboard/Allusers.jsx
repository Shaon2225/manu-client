import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../shared/Loading";

const Allusers = () => {
  const userUrl = `https://fathomless-woodland-51722.herokuapp.com/allusers`;
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], () => fetch(userUrl).then((res) => res.json()));

  if (isLoading) {
    <Loading></Loading>;
  }

  const handleDlt = async (email) => {
    const url1 = `https://fathomless-woodland-51722.herokuapp.com/allusers/dlt/${email}`;
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

  const handleAdmin = async (user) => {
    const email = user.email;
    const url1 = `https://fathomless-woodland-51722.herokuapp.com/allusers/makeadmin/${email}`;
    const body1 = { email: email };
    console.log(body1);
    Swal.fire({
      title: "Are you sure?",
      text: `${user?.name ? user.name : ""} promot to admin`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url1, {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(body1),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Admin made", `Email ${user.email}`, "success");
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-neutral text-lg font-bold text-center my-5">
        {" "}
        Total number of user : {users?.length}
      </h1>
      <div class="overflow-x-auto">
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
            {users?.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th className="text-neutral text-base">{index + 1}</th>
                  <td className="text-neutral text-base">{user.name}</td>
                  <td className="text-neutral text-base">{user.email}</td>
                  <td className="text-neutral text-base">{user.signUpDate}</td>
                  <td>
                    <button
                      className="btn btn-xs mx-1"
                      onClick={() => handleDlt(user.email)}
                    >
                      Delete
                    </button>
                    {!(user.role === "admin") && (
                      <button
                        className="btn btn-xs mx-1"
                        onClick={() => handleAdmin(user)}
                      >
                        Make admin
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
