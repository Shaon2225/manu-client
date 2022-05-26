import React, {useEffect,useRef} from "react";
import { useForm } from "react-hook-form";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from "../shared/Loading";
import useToken from "../../hooks/useToken";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, Eerror]=useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, pError] = useSendPasswordResetEmail(
    auth
  );
  
  let signInError = '';
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user||gUser)
  const emailRef = useRef();

  useEffect( () =>{
    if (token) {
        navigate(from, { replace: true });
    }
}, [token, from, navigate])


  if(loading||gLoading || sending) <Loading></Loading>

  if(gError|| Eerror || pError){
    signInError = Eerror?.message||gError?.message || pError.message;
    signInError=signInError.split(' ')[2].split('/')[1].split(')')[0].split('-').join(' ');
  }

  const handleform = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const passReset = async () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Password reset email send',
      showConfirmButton: false,
      timer: 1500
    })
  }


  return (
    <div className="flex justify-center item-center mt-20">
      <div className="card w-96 shadow-lg shadow-cyan-500/50">
        <div className="card-body">
          <h2 className="text-secondary text-center font-bold text-2xl">Log in</h2>

          <form onSubmit={handleSubmit(handleform)}>
            <div className="form-control w-full max-w-xs">
              <label className="label text-secondary font-semibold">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
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
            <p className='text-secondary font-medium my-2 text-base	'>New to VoltLab <Link to={'/signup'} className="font-bold">Sign up</Link> now</p>
            <p className='text-secondary font-bold my-2 text-base cursor-pointer' onClick={passReset}>Forgate password</p>
            <input type="submit" value="Log in" className="btn w-full max-w-xs text-secondary font-bold" />
          </form>
          <div className="divider text-secondary">OR</div>
          <button className="btn w-full max-w-xs text-secondary font-bold" onClick={()=>signInWithGoogle()}>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
