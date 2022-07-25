import React from 'react'
import {Routes, Route, Navigate } from "react-router-dom"
import Profile from '../apps/profile/components/Profile'
const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to="/profile" />} />
        <Route path="profile" element={<Profile/>} />
    </Routes>
  )
}

export default PrivateRoutes