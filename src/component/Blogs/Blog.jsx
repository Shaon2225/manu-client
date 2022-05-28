import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col mx-16 my-16">
      <div className="my-16">
        <h1 className="text-neutral text-2xl font-bold">
          Q1. How will you improve the performance of a React Application?
        </h1>
        <p className="text-neutral">
          <b>Ans. </b> There are many way to improve performance from them
          <ul>
            <li>Spliting the code into different component</li>
            <li>
              Usign import function to use same component in to different page
            </li>
            <li>
              Usign cockes or local storage or seasonal data for fetching api
            </li>
            <li>using react router for routing pages</li>
          </ul>
        </p>
      </div>
      <div className="my-16">
        <h1 className="text-neutral text-2xl font-bold">
          Q2. What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="text-neutral">
          <b>Ans. </b> to mange state below storage can be use
          <ul>
            <li>Global state</li>
            <li>local state</li>
            <li>local state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
        </p>
      </div>
      <div className="my-16">
        <h1 className="text-neutral text-2xl font-bold">
          Q3. How does prototypical inheritance work?
        </h1>
        <p className="text-neutral">
          <b>Ans. </b>Simply say, prototypical inheritance refers to the ability
          to access object properties from another object.We use a JavaScript
          prototype to add new properties and methods to an existing object
          constructor. We can then essentially tell our JS code to inherit
          properties from a prototype. Prototypical inheritance allows us to
          reuse the properties or methods from one JavaScript object to another
          through a reference pointer function.
        </p>
      </div>
      <div className="my-16">
        <h1 className="text-neutral text-2xl font-bold">
          Q4. Why you do not set the state directly in React. For example, if
          you have const [products, setProducts] = useState([]). Why you do not
          set products = [...] instead, you use the setProducts?
        </h1>
        <p className="text-neutral">
          <b>Ans. </b>react state is an immuteable value so we can't handle this
          value as normal value. if we do then the this state can affect other
          states. so for ensuring proper and smooth runing we have to use
          setProducts and it is a function which take the new value and set the
          new value to the state.
        </p>
      </div>
      <div className="my-16">
        <h1 className="text-neutral text-2xl font-bold">
          Q5. You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p className="text-neutral">
          <b>Ans. </b> 1st iterate through the array and for each iteration i'll
          check wheater it name is equal to searched name{" "}<br></br>
          <code className="text-center mx-auto my-10">arr.find(x=>x.name="name")</code>
        </p>
      </div>
    </div>
  );
};

export default Blog;
