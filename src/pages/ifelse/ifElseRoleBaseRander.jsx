import React from "react";
import AdminComponent from "../../components/adminComponent";
import UserComponent from "../../components/userComponent";

const RoleBaseRander = () => {
  const user_role = "admin";

  if (user_role === "admin") {
    return <AdminComponent />;
  } else if (user_role === "user") {
    return <UserComponent />;
  } else {
    return <h2>Unauthorised Access</h2>;
  }
};

export default RoleBaseRander;
