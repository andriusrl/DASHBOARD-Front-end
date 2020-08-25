import axios from "axios";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';
import dotenv from "dotenv";
dotenv.config();


// COLOCAR .ENV
const baseUrl = "https://my-json-server.typicode.com/silvandante/frontendtest"

export const getFeed = () => async (dispatch) =>{
    try{
        // const response = await axios.get(
        //     `${baseUrl}/posts`
        // );
        // console.log(response.data)

        const responseFeed = new Promise((resolve, reject)=>{
            const response = axios.get(
                `${baseUrl}/comments`
            )
            resolve(response)
        })
        const responseComments = new Promise((resolve, reject)=>{
            const response = axios.get(
                `${baseUrl}/comments`
            )
            resolve(response)
        })
        Promise.all([responseFeed, responseComments]).then((values)=>{
            console.log(values)
        })
    }catch(error){
        alert("Por favor tente novamente")
    }
}