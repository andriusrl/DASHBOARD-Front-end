import axios from "axios";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';
import dotenv from "dotenv";
dotenv.config();


// COLOCAR .ENV
const baseUrl = "https://my-json-server.typicode.com/silvandante/frontendtest"

export const getFeed = () => async (dispatch) =>{
    try{
        const response = await axios.get(
            `${baseUrl}/posts`
        );
        console.log(response.data)
    }catch(error){
        alert("Por favor tente novamente")
    }
}