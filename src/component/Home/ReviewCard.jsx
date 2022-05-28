import React from "react";

const ReviewCard = ({ review1 }) => {
  const { user1, rating, review } = review1;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{user1}</h2>
          <div class="rating rating-md">
              <input
                type="radio"
                
                class="mask mask-star-2 bg-orange-400"
                checked ={rating == 1}
                readOnly
              />
              <input
                type="radio"
                
                class="mask mask-star-2 bg-orange-400"
                checked ={rating == 2}
                readOnly
              />
              <input
                type="radio"
                
                class="mask mask-star-2 bg-orange-400"
                checked ={rating == 3}
                readOnly
              />
              <input
                type="radio"
                
                class="mask mask-star-2 bg-orange-400"
                checked ={rating == 4}
                readOnly
              />
              <input
                type="radio"
                
                class="mask mask-star-2 bg-orange-400"
                checked ={rating == 5}
                readOnly
              />
            </div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
