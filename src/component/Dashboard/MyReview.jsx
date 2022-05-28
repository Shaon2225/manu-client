import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const [star,setStar]=useState(5);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const addReview = async (data) => {
    
    const user1 = user.displayName || data.userName;
    const rating = star;
    const review = data.review;
    const email = user.email;
    const userReview = {
      user1,
      rating,
      review,
      email,
    };
    const url = `https://fathomless-woodland-51722.herokuapp.com/addreview`;
    await fetch(url, {
      method: 'PUT',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.acknowledged){
        Swal.fire("Congratulation", "Review has been added.", "success");
      }
    })
  };

  return (
    <div className="mx-auto mt-5 w-3/4 flex justify-around">
      <div className="w-3/4">
        <h1 className="text-3xl text-accent text-center font-bold">
          Add review
        </h1>
        <form onSubmit={handleSubmit(addReview)}>
          <div className="">
            <label className="label text-accent font-semibold">Email</label>
            <input
              type="text"
              placeholder="Product Name"
              className="py-2 px-3 border border-accent rounded-lg w-full text-accent"
              value={user.email}
              readOnly
            />
            <label className="label text-accent font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Product Name"
              className="py-2 px-3 border border-accent rounded-lg w-full text-accent"
              value={user?.displayName}
              readOnly={user.displayName}
              {...register("userName")}
            />
            <label className="label text-accent font-semibold">Rating</label>
            <div class="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                checked ={star == 1}
                onChange={()=>setStar(1)}
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                onChange={()=>setStar(2)}
                checked ={star == 2}
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                onChange={()=>setStar(3)}
                checked ={star == 3}
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                onChange={()=>setStar(4)}
                checked ={star == 4}
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                onChange={()=>setStar(5)}
                checked ={star == 5}
              />
            </div>

            <label className="label text-accent font-semibold">
              Your Review
            </label>
            <textarea
              type="text"
              placeholder="Your Review"
              className="py-2 px-3 border border-accent rounded-lg w-full text-accent"
              {...register("review")}
            />
            <input
              type="submit"
              value="Add review"
              className="btn btn-nutral mt-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyReview;
