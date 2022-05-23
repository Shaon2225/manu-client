import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../shared/Loading';

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword,user,loading,eError] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile,updating,updateError]= useUpdateProfile(auth);
  
  

  const navigate = useNavigate();

  let signInError = '';

  if(loading||updating||gLoading){
    <Loading></Loading>
  }

  if(gError|| eError || updateError){
    signInError = eError?.message||gError?.message||updateError?.message;
    signInError=signInError.split(' ')[2].split('/')[1].split(')')[0].split('-').join(' ');
  }
  const [token] = useToken(user||gUser);
  if(token){
    navigate('/');
  }

  const handleform = async data =>{
    await createUserWithEmailAndPassword(data.email,data.password);
    await updateProfile({displayName:data.name});
  }

  return (
    <div className="flex justify-center item-center mt-20">
      <div className="card w-96 shadow-lg shadow-cyan-500/50">
        <div className="card-body">
          <h2 className="text-secondary text-center font-bold text-2xl">Sign up</h2>

          <form onSubmit={handleSubmit(handleform)}>
            <div className="form-control w-full max-w-xs">
              <label className="label text-secondary font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input-border w-full px-3 py-2 text-secondary"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required",
                  }
                })}
              />
              <label className="label text-red">
                {errors?.email?.type === "required" && (
                  <small>{errors?.email?.message}</small>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label text-secondary font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input-border w-full px-3 py-2 text-secondary"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Required",
                  },
                })}
              />
              <label className="label text-red">
                {errors?.email?.type === "required" && (
                  <small>{errors?.email?.message}</small>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label text-secondary font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input-border w-full px-3 py-2 text-secondary"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  pattern: {
                    value: 8,
                    message: "Not less than 8 digit",
                  },
                })}
              />
              <label className="label text-red">
                {errors?.password?.type === "required" && (
                  <small>{errors?.password?.message}</small>
                )}
              </label>
            </div>
            <p className="mb-3"><small className="text-secondary font-bold">{signInError}</small></p>
            <p className='text-secondary font-medium my-2 text-base	'>Already have an account <Link to={'/login'} className="font-bold"> Log in</Link></p>
            <input type="submit" value="Log in" className="btn w-full max-w-xs text-secondary font-bold" />
          </form>
          <div className="divider text-secondary">OR</div>
          <button className="btn w-full max-w-xs text-secondary font-bold" onClick={()=>signInWithGoogle()}>
            Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup