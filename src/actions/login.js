import axios from "axios";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';
import dotenv from "dotenv";
dotenv.config();


// COLOCAR .ENV
const baseUrl = "https://my-json-server.typicode.com/silvandante/frontendtest"

export const setLogin = value => {
    return {
        type: 'SET_LOGIN_DATA',
        payload: {
            value
        }
    }
}

export const login = (user, password) => async (dispatch) =>{
    try{
        const response = await axios.get(
            `${baseUrl}/user`
        );
        console.log(user)
        console.log(password)
        console.log(response.data)
        if ((user === response.data.username) && (password === response.data.password)){
            console.log("Logado com sucesso!")
            dispatch(setLogin(response.data.username))
            dispatch(dispatch(push(routes.feed)))
        }
        else {
            alert("Usuário ou senha incorretos")
        }

    }catch(error){
        alert("Por favor tente novamenteeeee")
        console.log(error)
    }
}