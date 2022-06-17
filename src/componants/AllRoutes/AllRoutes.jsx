import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { HomeDetails } from "../HomeDetails/HomeDetails";
import { PrivateComponent } from "../Private/PrivateComponant";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/details/:id"
        element={
          <PrivateComponent>
            <HomeDetails />
          </PrivateComponent>
        }
      ></Route>
    </Routes>
  );
};
