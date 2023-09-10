import axios from "axios";
import { APP_API } from "./environment";

const api = axios.create({
baseURL: `${APP_API}`
})


export const listCurrencry =  ()=> api.get(`/live?access_key=5f287622ab8563adc9a3cd7ec3efd04d&currencies=&source=&format=`)