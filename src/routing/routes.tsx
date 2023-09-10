import { useRoutes,Navigate } from "react-router-dom"
import { CurrencryList } from "./Element"
const AdminRoute = () => {


  return useRoutes([
      {
            path:"",
            element: <Navigate to="/currency"/>
      },
      {
            path:"currency",
            element: <CurrencryList/>
      }
  ])
}

export default AdminRoute
