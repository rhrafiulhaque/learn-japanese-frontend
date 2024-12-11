import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import isAdmin from "../../hooks/isAdmin";

export default function AdminRoute() {
  const isAdminUser = isAdmin();
  return isAdminUser ? <Outlet /> : <Navigate to="/notauthorized" />;
}
