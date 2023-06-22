import axios from "axios";

const url='http://localhost:8000';

export const getProducts = async ()=>{
    try{
        const product = await axios.get(`${url}/products`);
        return product.data;
      }catch(err){
        console.log(err)
      }
}

export const getUsers = async ()=>{
    try{
        const product = await axios.get(`${url}/user`);
        return product.data;
      }catch(err){
        console.log(err)
      }
}

export const postUsers = async ( { email, password })=>{

    try {
      
        const res = await axios.post(`${url}/user/signup`, { email, password });
         console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
      }


}

