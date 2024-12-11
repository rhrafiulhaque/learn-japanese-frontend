import useAuth from "./useAuth";

export default function isUser() {
  const user = useAuth();
  if (user.role === "user") {
    return true;
  } else {
    return false;
  }
}
