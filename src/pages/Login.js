import React from "react";
import Layout from "../Layout";
import Button, { KIND } from "../ui-components/Button/Button";

const Login = () => {
  return (
    <Layout>
      <Button kind={KIND.PRIMARY}>Login</Button>
      <Button kind={KIND.GREEN}>Create New Account </Button>
    </Layout>
  );
};

export default Login;
