import axios from "axios";
import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    const currentUser = {email: email};
    if(email) {
        axios.post(`http://localhost:8000/user/${email}`, currentUser)
        .then(function (response) {
            setToken(response.data)
        })
    }
    return token;
}

export default useToken;