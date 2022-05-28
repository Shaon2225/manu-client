import React from "react";
import { useQuery } from "react-query";
import Slick from "slick-carousel";
import ReviewCard from "./ReviewCard";

const Review = () => {
    const reviewUrl =`https://fathomless-woodland-51722.herokuapp.com/product-review`;
    const {
        data: reviews,
        isLoading,
        refetch,
      } = useQuery(["userProfile"], () => fetch(reviewUrl,{
        method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
      }).then((res) => res.json()));
  return (
    <div>
      <div className="mx-auto flex justify-center">
        <h1 className="text-neutral text-3xl text center font-bold">
          Our Satisfied Customers
        </h1>
      </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto justify-items-center	text-neutral my-10">
                {
                  reviews?.map(review=><ReviewCard review1={review} key={review._id}></ReviewCard>)
                }
              </div>
          
    </div>
  );
};

export default Review;
