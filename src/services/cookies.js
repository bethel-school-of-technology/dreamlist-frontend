import axios from "axios";
import cookieClient from 'react-cookie'

const API_URL = 'http://localhost:8081/login';

let cookie = cookieClient.load('/login')
if(cookie === undefined){
    axios.get( API_URL, {withCredentials: true}).then(response => {
        if(response.status == 200){
          cookieClient.save('/login', response.data, {path:'/'})
          console.log(response.data);
        }
      })
    }