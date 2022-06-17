import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateComponent = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("tvappletoken"));
  //   const tokk = useSelector((store) => store.token.token);
  //   console.log(token, "tokk");
  if (token === null || token === "") {
    return (
      <div>
        {alert("Login First")}
        <Navigate to="/"></Navigate>
      </div>
    );
  }
  return children;
};
