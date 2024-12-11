import useAuth from "./useAuth";

export default function isAdmin() {
  const user = useAuth();
  if (user.role === "admin") {
    return true;
  } else {
    return false;
  }
}
