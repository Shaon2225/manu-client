import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const ProductDetails = () => {
    const[product,setProduct]=useState({});
    const {id} =useParams();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

    const [user]=useAuthState(auth);

    useEffect(()=>{
        fetch(`https://fathomless-woodland-51722.herokuapp.com/allproducts/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])

    const addOrder =async data=>{
        const email = user.email;
        const userName = user.displayName;
        const address = data.address;
        const phoneNumber = data.phoneNumber;
        const orderedQuantity = parseInt(data.quantity);
        const minQuantity = parseInt(product.minOrderQuantity);
        const maxQuantity = parseInt(product.productQuantity);
        const productName = product.productName;
        const price = product.productPrice;
        if(orderedQuantity<minQuantity || orderedQuantity>maxQuantity){
            return (
                Swal.fire(`Order quantity can't be less thand minimun order quantity or over the avaiable quantity`)
            )
        }
        const order = {
            price,productName,email,userName,address,phoneNumber,orderedQuantity,payment:'unpaid'
        }
        console.log(order);
     fetch(`https://fathomless-woodland-51722.herokuapp.com/allproducts/palceorder`,{
         method:"POST",
         headers:{
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
         },
         body:JSON.stringify(order),
     })
     .then(res=>res.json())
     .then(data=>{
         if(data.acknowledged){
            Swal.fire(
                'Congratualtion',
                'Your order is placed succesfully',
                'success'
              )
         }
     })
     reset();
    }
  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-10 justify-items-center sm:px-5'>
        <div>
            <img src={product.productImg} className="w-72 h-72" alt={product.productName} />
            <h1 className='text-3xl text-neutral text-center font-bold'>{product.productName}</h1>
            <h1 className='text-xl mt-3 text-neutral font-bold'><b>Price </b><span className="text-xl">&#2547;</span>{" "}
                {product.productPrice}</h1>
            <h2 class="text-neutral font-base">
                <b>Avaiable :</b> {product.productQuantity} pis
            </h2>
            <h2 class="text-neutral font-base">
                <b>Minimum order quantity :</b> {product.minOrderQuantity} pis
              </h2>
            <p className='text-neutral'><b>Details : </b>{product.productDetails}</p>
        </div>
        <div className='w-3/4'>
        <h1 className='text-3xl text-neutral text-center font-bold'>Place order</h1>
            <form onSubmit={handleSubmit(addOrder)}>
                <div className=''>
                <label className='label text-neutral font-semibold'>
                Email
                </label>
                <input type="text"
                 placeholder='Product Name' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-neutral'
                 value={user.email}
                 readOnly
                 />
                  <label className='label text-neutral font-semibold'>
                Your Name
                </label>
                <input type="text"
                 placeholder='Product Name' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-neutral'
                 value={user?.displayName}
                 readOnly={user.displayName}
                 />
                  <label className='label text-neutral font-semibold'>
                Delivery Address
                </label>
                <textarea type="text"
                 placeholder='Address' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-neutral'
                 {...register('address')}
                 />
                  <label className='label text-neutral font-semibold'>
                Phone Number
                </label>
                <input type="number"
                 placeholder='Phone number' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-neutral'
                 {...register('phoneNumber')}
                 />
                  <label className='label text-neutral font-semibold'>
                Quantity
                </label>
                <input type="number"
                 placeholder='Quantity' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-neutral'
                 {...register('quantity')}
                 />
                  <input type="submit" value="Complete order" className='btn btn-nutral mt-3' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProductDetails