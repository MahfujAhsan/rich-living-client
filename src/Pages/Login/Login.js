import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }
    return (
        <div className='h-screen flex justify-center items-center w-10/12 lg:w-2/4 mx-auto border-2 rounded-lg'>
            <form className='lg:w-full text-center' onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full mx-auto max-w-sm">
                    <input type="email"
                        placeholder="Your Email"
                        class="input input-bordered lg:max-w-lg"
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
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full mx-auto max-w-sm relative">
                    <input type={passwordShown ? "text" : "password"}
                        placeholder="Your SecretKey"
                        class="input input-bordered lg:max-w-lg"
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
                            passwordShown ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>
                        }
                        </span>
                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                        {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                    </label>
                </div>
                <input className='btn text-white font-bold' type="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default Login;