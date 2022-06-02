import React from 'react';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';
import facebook from "../../assets/Icon/facebook.png"
import Spinner from '../Shared/Spinner';

const SocialLogin = () => {
    const [signInWithFacebook, loading, error] = useSignInWithFacebook(auth);
    let errorText;
    if(loading) {
        return <Spinner/>
    };
    if(error) {
        errorText = <p className='text-red-600 mt-3'>{error?.message}</p>
    }
    return (
        <div className='px-3'>
            <button onClick={() => signInWithFacebook()} className='flex justify-center items-center bg-white shadow-lg text-black px-3 lg:px-6 py-3 rounded-lg border-2 border-black'>
                <img src={facebook} alt="" />
                <span className='ml-3 font-bold'>Continue With Facebook</span>
            </button>
            {errorText}
        </div>
    );
};

export default SocialLogin;