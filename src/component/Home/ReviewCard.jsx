import React from "react";

const ReviewCard = ({ review1 }) => {
  const { user1, rating, review } = review1;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{user1}</h2>
          <div className="rating rating-md">
              <input
                type="radio"
                
                className="mask mask-star-2 bg-orange-400"
                checked ={rating == 1}
                readOnly
              />
              <input
                type="radio"
                
                className="mask mask-star-2 bg-orange-400"
                checked ={rating == 2}
                readOnly
              />
              <input
                type="radio"
                
                className="mask mask-star-2 bg-orange-400"
                checked ={rating == 3}
                readOnly
              />
              <input
                type="radio"
                
                className="mask mask-star-2 bg-orange-400"
                checked ={rating == 4}
                readOnly
              />
              <input
                type="radio"
                
                className="mask mask-star-2 bg-orange-400"
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
