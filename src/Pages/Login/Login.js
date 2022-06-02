import { faEye, faEyeSlash, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import auth from '../../firebase.int';
import Spinner from '../Shared/Spinner';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let errorText;
    const [
        signInWithEmailAndPassword,
        signInUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (signInUser || user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Spinner />
    };
    if (error) {
        errorText = <p className='text-red-500 mt-3'>{error.message}</p>
    };
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    };
    return (
        <div className='w-10/12 lg:w-2/4 mx-auto border-2 border-black rounded-lg my-6'>
            <div className='h-screen flex flex-col justify-center items-center'>
                <h2 className='mb-8 text-xl lg:text-3xl font-bold'>Please Login</h2>
                <form className='lg:w-full text-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mx-auto max-w-sm">
                        <input type="email"
                            placeholder="Your Email"
                            className="input input-bordered lg:max-w-lg"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                },
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Enter a valid Email'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full mx-auto max-w-sm relative">
                        <input type={passwordShown ? "text" : "password"}
                            placeholder="Your SecretKey"
                            className="input input-bordered lg:max-w-lg"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: 'Provide 8 characters with numeric & letters'
                                }
                            })} />
                        <span onClick={togglePassword} className='absolute top-3 right-4 cursor-pointer'>
                            {
                                passwordShown ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
                            }
                        </span>
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input className='btn text-white font-bold' type="submit" value="Log in" />
                </form>
                {errorText}
                <p className='mt-6 '>New to rich-living? <Link className='font-bold underline ml-2' to="/signup"><FontAwesomeIcon icon={faRightToBracket} /> SignUp</Link></p>
                <div className="divider w-2/4 mx-auto my-6 lg:my-8">OR</div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;