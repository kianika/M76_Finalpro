import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "./routes";

function PrivateRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.users);
  return isLoggedIn ? <>{children}</> : <Navigate to={LOGIN_ROUTE} />;
}

export default PrivateRoute;