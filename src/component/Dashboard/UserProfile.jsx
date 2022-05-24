import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {BiEdit} from 'react-icons/bi';
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const [user] = useAuthState(auth);
    const [editAble, setEditAble]=useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const handleUpdate = (data) =>{
        const profile ={
            education: data.education,
            social: data.social,
            phoneNumber: data.phoneNumber,
            address: data.address,
            signUpDate: user.metadata.creationTime,
        };
        console.log(profile);
        setEditAble(false);
    }

  console.log(user);
  return (
    <div className="mx-auto mt-5 w-3/4 flex justify-around">
      <div>
        <h1 className="text-accent text-3xl">
          Hello <b>{user.displayName}</b>
        </h1>
        <h1 className="text-accent text-xl">
          <b>Email : </b>
          {user.email}
        </h1>
        <div>
            <p onClick={()=>setEditAble(true)} 
            className="text-accent text-l font-bold border-2 border-accent rounded-lg px-3 py-1 my-2 cursor-pointer w-1/2">Edit profile <button className=""><BiEdit></BiEdit></button></p>
        </div>
        <div className="my-5">
            <b className="text-accent mt-10">User details:</b>
            {
                editAble?
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <div className="form-control">
                        <label className="label text-accent font-semibold">Your University</label>
                        <input type="text" placeholder="University/school/college"
                        className="py-2 border border-accent rounded-lg w-full px-3 text-accent"
                        {...register("education")
                        }
                        />
                        <label className="label text-accent font-semibold">Your Socialmedia link</label>
                        <input type="text" 
                        placeholder="Socialmedia link"
                        className="py-2 border border-accent rounded-lg w-full px-3 text-accent"
                        {...register("social")
                        }
                        />
                        <label className="label text-accent font-semibold">Your phone number</label>
                        <input type="number"
                         placeholder="phone number"
                        className="py-2 border border-accent rounded-lg w-full px-3 text-accent"
                        {...register("phoneNumber")
                        }
                        />
                        <label className="label text-accent font-semibold">Your Address</label>
                        <textarea type="text" placeholder="Address"
                        className="py-2 border border-accent rounded-lg w-full px-3 text-accent"
                        {...register("address")
                        }
                        />
                        <input type="submit" value="Update" className="btn btn-nutral" />
                        </div>
                    </form>
                :
                <div>

                </div>
            }
        </div>
      </div>

      {/* ============================= photo user ===========================================*/}
      {user?.photoURL ? (
        <div class="avatar">
          <div class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL}/>
          </div>
        </div>
      ) : (
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span class="text-3xl">{user.displayName.split("")[0]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
