import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../components/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.refreshToken && auth.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            refreshToken: auth.refreshToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
