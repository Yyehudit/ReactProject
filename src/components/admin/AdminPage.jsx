
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import Login from "./Login"
import AdminHome from './AdminHome';




function AdminPage() {

  const [isLogin,setIsLogin] = useState(false);
  const navigate = useNavigate();
  
    return (
      <>
  {
      !isLogin?
          <Login onLoginSuccess={() => setIsLogin(true)}/> :
          navigate("/admin/services")

  }
      </>
    )
  }
  

export default AdminPage


