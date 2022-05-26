import React from 'react'
import { useForm } from 'react-hook-form';

const Addproduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const addProduct = data =>{
        console.log(data);
      }
    
  return (
    <div className='w-1/2 mx-auto'>
        <h1 className='text-accent font-bold text-2xl mx-auto mt-5 text-center'>Add new product</h1>
        <form onSubmit={handleSubmit(addProduct)}>
            <div className='form-control'>
                <label className='label text-accent font-semibold'>
                Product Name
                </label>
                <input type="text"
                 placeholder='Product Name' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-accent'
                 {...register('productName')}
                 />
                <label className='label text-accent font-semibold'>
                Product Details
                </label>
                <textarea type="text"
                 placeholder='Product details' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-accent'
                 {...register('productDetails')}
                 />
                <label className='label text-accent font-semibold'>
                Product Price
                </label>
                <input type="number"
                 placeholder='Product Price' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-accent'
                 {...register('productPrice')}
                 />
                <label className='label text-accent font-semibold'>
                Avaible quantity
                </label>
                <input type="number"
                 placeholder='Avaivble quantity' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-accent'
                 {...register('productQuantity')}
                 />
                <label className='label text-accent font-semibold'>
                Minimum order quantity
                </label>
                <input type="number"
                 placeholder='Minimum order quantity' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-accent'
                 {...register('minOrderQuantity')}
                 />
                <label className='label text-accent font-semibold'>
                Product Image
                </label>
                <input type="file"
                 placeholder='Product Image' 
                 className='py-2 px-3 border border-accent rounded-lg w-full text-accent'
                 {...register('productImg')}
                 />
                 <input type="submit" value="Add product" className='btn btn-nutral mt-3' />
            </div>
        </form>
    </div>
  )
}

export default Addproduct