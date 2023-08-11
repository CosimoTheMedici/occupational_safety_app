import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Register,
  LockScreen,
  ForgotPassword,
  Dashboard,RecordData
} from "../features";
import PersistLogin from "../hooks/PersistLogin";
import RequireAuth from "../hooks/RequireAuth";

const AppRouter = () => {
  return (
    <Routes>

      <Route element={<PersistLogin />}>
       
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lockscreen" element={<LockScreen />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/unauthorised" element={<Login />} />
        <Route path="/404" element={<Login />} />


        <Route element={<RequireAuth allowedRoles={[2000]} />}>
          <Route path="/home/tenant" element={<Login />} />
        </Route>

        {/* protected agents */}
        <Route element={<RequireAuth allowedRoles={[3000, 5000]} />}>
          <Route path="/home/agent" element={<Login />} />
          <Route path="/record/data" element={<RecordData />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[4000, 5000]} />}>

        </Route>

        <Route element={<RequireAuth allowedRoles={[4000, 3000, 5000, 2000]} />}>

          <Route path="/home" element={<Dashboard />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[5000]} />}>
          
        </Route>

        <Route element={<RequireAuth allowedRoles={[6000]} />}>

        </Route>

        <Route element={<RequireAuth allowedRoles={[2003]} />}>

        </Route>

        <Route path="/admin" element={<Login />} />
      </Route>

      {/* missing path */}
      {/* <Route path='*' element={<Login />} /> */}
    </Routes>
  );
};

export default AppRouter;
