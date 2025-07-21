import React, { useState } from "react";
import AdminComponent from "../../components/adminComponent";
import UserComponent from "../../components/userComponent";

const SwitchRoleBaseRander = () => {
  const [role, setRole] = useState("admin");
  const handleChange = (e) => {
    setRole(e.target.value);
  };
  let content;
  switch (role) {
    case "admin":
      content = <AdminComponent />;
      break;
    case "user":
      content = <UserComponent />;
      break;
    // case "guest":
    //   content = <GuestComponent />;
    //   break;
    default:
      content = <h3>Unauthorised</h3>;
  }
  return (
    <div>
      <h2>Select Role</h2>
      <select value={role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        {/* <option value="admin">Admin</option> */}
      </select>
      <div>{content}</div>
    </div>
  );
};

export default SwitchRoleBaseRander;
