import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ProtectedRoutes = (props) => {
  const { Component } = props
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const login = localStorage.getItem('adminToken')
    const isLoginPage = location.pathname === '/login'
    const isForgetPasswordPage = location.pathname === '/SendMail'

    if (!login && !isLoginPage && !isForgetPasswordPage) {
      navigate('/login')
    }
  }, [location.pathname, navigate])

  return (
    <div>
      <Component />
    </div>
  )
}

export default ProtectedRoutes
