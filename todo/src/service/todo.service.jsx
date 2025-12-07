import axios from "axios";

const baseUrl = "http://localhost:3000"

const signup = async (name,email, password)=>{
    try{
        const response = await axios.post(baseUrl + "/user/register",{name, email, password} );
        return response.data.message;
    }catch(error){
        console.log('error');

    }
}

const  signin = async (email, password)=>{
    try{
        const response = await axios.post(baseUrl + "/user/signin", {email, password});
        return response.data.message;
    }catch(error){
        console.log('error');
    }
}


export {signup , signin};