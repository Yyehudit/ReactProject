import { useNavigate } from 'react-router-dom'
import Login from "./Login"
import AdminHome from './AdminHome';
import { useState } from "react"

function AdminPage() {

  const [isLogin,setIsLogin] = useState(false);
  const navigate = useNavigate();
  
    return (
      <>
  {
      !isLogin?
          <Login onLoginSuccess={() => setIsLogin(true)}/> :
          // <AdminHome/>
          navigate("/admin/services")

  }
      </>
    )
  }
  

export default AdminPage


