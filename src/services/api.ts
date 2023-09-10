import axios from "axios";
import { APP_API } from "./environment";

const api = axios.create({
baseURL: `${APP_API}`
})


export const listCurrencry =  ()=> api.get(`/live?access_key=0c3051e2288ec4a6ff28521f88a8c039&currencies=&source=&format=`)