import React from 'react'
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../shared/Loading';

const MangeProduct = () => {

    const productUrl= `https://fathomless-woodland-51722.herokuapp.com/allproducts`;
    const {
        data: products,
        isLoading,
        refetch,
      } = useQuery(["products"], () => fetch(productUrl).then((res) => res.json()));

      if(isLoading){
          <Loading></Loading>
      }

      const handleDltProduct = async (id)=>{
        const url1 = `https://fathomless-woodland-51722.herokuapp.com/allproducts/dlt/${id}`;
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
        await fetch(url1, {
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
      }

  return (
    <div>
    <h1 className="text-neutral text-lg font-bold text-center my-5">
      {" "}
      Total number of Product : {products?.length}
    </h1>
      <div class="overflow-x-auto">
    <table class="table w-3/4 flex justify-center items-center mx-auto">
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Avaibale quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => {
          return (
            <tr key={product._id}>
              <th className="text-neutral text-base">{index + 1}</th>
              <td className="text-neutral text-base">{product?.productName}</td>
              <td className="text-neutral text-base">{product?.productPrice}</td>
              <td className="text-neutral text-base">{product?.productQuantity}</td>
              <td>
                <button
                  className="btn btn-xs mx-1"
                  onClick={() => handleDltProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
 </div>
  )
}

export default MangeProduct