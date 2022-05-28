import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { BiEdit } from "react-icons/bi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import Loading from "../shared/Loading";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const [editAble, setEditAble] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const userUrl = `https://fathomless-woodland-51722.herokuapp.com/userprofile/${user.email}`;
  
  const {
    data: userProfile,
    isLoading,
    refetch,
  } = useQuery(["userProfile",user], () =>
    fetch(userUrl)
    .then((res) =>res.json())
  );

  if (isLoading) {
    <Loading></Loading>;
  }

  const handleUpdate = (data) => {
    const profile = {
      email: user.email,
      name: user.displayName,
      education: data.education,
      social: data.social,
      phoneNumber: data.phoneNumber,
      address: data.address,
      signUpDate: user.metadata.creationTime,
    };
    fetch(`https://fathomless-woodland-51722.herokuapp.com/userupdate/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your profile is updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    refetch();
    setEditAble(false);
  };

  
  return (
    <div className="mx-auto mt-5 w-3/4 flex justify-around">
      <div>
        <h1 className="text-neutral text-3xl">
          Hello <b>{user.displayName}</b>
        </h1>
        <h1 className="text-neutral text-xl">
          <b>Email : </b>
          {user.email}
        </h1>
        <div>
          <p
            onClick={() => setEditAble(true)}
            className="text-neutral text-l font-bold border-2 border-accent rounded-lg px-3 py-1 my-2 cursor-pointer w-3/4"
          >
            Edit profile{" "}
              <BiEdit></BiEdit>
          </p>
        </div>
        <div className="my-5">
          <b className="text-neutral mt-10">User details:</b>
          {editAble ? (
            <form onSubmit={handleSubmit(handleUpdate)}>
              <div className="form-control">
                <label className="label text-neutral font-semibold">
                  Your University
                </label>
                <input
                  type="text"
                  placeholder="University/school/college"
                  className="py-2 border border-accent rounded-lg w-full px-3 text-neutral"
                  {...register("education")}
                />
                <label className="label text-neutral font-semibold">
                  Your Socialmedia link
                </label>
                <input
                  type="text"
                  placeholder="Socialmedia link"
                  className="py-2 border border-accent rounded-lg w-full px-3 text-neutral"
                  {...register("social")}
                />
                <label className="label text-neutral font-semibold">
                  Your phone number
                </label>
                <input
                  type="number"
                  placeholder="phone number"
                  className="py-2 border border-accent rounded-lg w-full px-3 text-neutral"
                  {...register("phoneNumber")}
                />
                <label className="label text-neutral font-semibold">
                  Your Address
                </label>
                <textarea
                  type="text"
                  placeholder="Address"
                  className="py-2 border border-accent rounded-lg w-full px-3 text-neutral"
                  {...register("address")}
                />
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-nutral mt-3"
                />
                <button className="btn btn-nutral mt-3" onClick={()=>setEditAble(false)}>Cancel</button>
              </div>
            </form>
          ) : (
            <div className="mt-5 ml-5">
              <h1 className="text-neutral text-base">
                <b>Education : </b>
                {userProfile?.education}
              </h1>
              <h1 className="text-neutral text-base">
                <b>Phone no : </b>
                {userProfile?.phoneNumber}
              </h1>
              <h1 className="text-neutral text-base">
                <b>Social link : </b>
                {userProfile?.social}
              </h1>
              <h1 className="text-neutral text-base">
                <b>Address : </b>
                {userProfile?.address}
              </h1>
            </div>
          )}
        </div>
      </div>

      {/* ============================= photo user ===========================================*/}
      {user?.photoURL ? (
        <div className="avatar">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-primary-focus text-neutral-content rounded-full w-24 h-24">
            <span className="text-3xl">{user?.displayName?.split("")[0].toUpperCase()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
