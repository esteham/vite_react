import React from "react";
import ChildProps from "../../components/childProps";

const ParentProps = () => {
  return (
    <>
      <h1>This is 1st props card</h1>
      <ChildProps name="Xihad Ansari" email="xihad@example.com" />
      <ChildProps name="Mehedi Ansari" email="mehedi@example.com" />
    </>
  );
};

export default ParentProps;
