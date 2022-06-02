import { faEye, faEyeSlash, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useUpdateProfile, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';
import Spinner from '../Shared/Spinner';
import axios from 'axios';
import { toast } from 'react-toastify';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const imageStorageKey = 'aa780f948d0fcc6c59b034aa5fa85ca9';
    const [passwordShown, setPasswordShown] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let errorText;
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    };
    if (user) {
        navigate('/login')
    }
    if (loading || updating || sending) {
        return <Spinner />
    };
    if (error || updateError || verificationError) {
        errorText = <p className='text-red-600 mt-3'>{error?.message || updateError?.message || verificationError?.message}</p>
    }
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        axios.post(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                console.log(response)
            })
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: data.name, photoURL: data.image });
        await sendEmailVerification();
        toast.info('Please Verify Your Email');
        reset();
    };
    return (
        <div className='w-10/12 lg:w-2/4 mx-auto border-2 border-black rounded-lg my-6'>
            <div className='h-screen flex flex-col justify-center items-center'>
                <h2 className='mb-8 text-xl lg:text-3xl font-bold'>Please SignUp</h2>
                <form className='lg:w-full text-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mx-auto max-w-sm">
                        <label className="label">
                            <span className="label-text-alt font-bold">Your Name:</span>
                        </label>
                        <input type="name"
                            placeholder="ex: Mahfuj Ahsan"
                            className="input input-bordered lg:max-w-lg"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required"
                                }
                            })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full mx-auto max-w-sm">
                        <label className="label">
                            <span className="label-text-alt font-bold">Your Photo:</span>
                        </label>
                        <input type="file"
                            className="input input-bordered lg:max-w-lg"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is Required"
                                }
                            })} />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full mx-auto max-w-sm">
                        <label className="label">
                            <span className="label-text-alt font-bold">Your Email:</span>
                        </label>
                        <input type="email"
                            placeholder="ex: ahsanmahfuj@gmail.com"
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
                        <label className="label">
                            <span className="label-text-alt font-bold">Your Password:</span>
                        </label>
                        <input type={passwordShown ? "text" : "password"}
                            placeholder="ex: secret3264"
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
                        <span onClick={togglePassword} className='absolute top-11 right-4 cursor-pointer'>
                            {
                                passwordShown ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
                            }
                        </span>
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input className='btn text-white font-bold' type="submit" value="Sign Up" />
                </form>
                {errorText}
                <p className='mt-6 '>New to rich-living? <Link className='font-bold underline ml-2' to="/login"><FontAwesomeIcon icon={faRightToBracket} /> LogIn</Link></p>
            </div>
        </div>
    );
};

export default SignUp;