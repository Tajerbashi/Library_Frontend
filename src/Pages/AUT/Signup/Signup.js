import "./Signup.css";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Layout } from "antd";
import Grid from "@mui/material/Grid";
import { RGTextField } from "../../../components/Renders/renderers";
import { Input } from "antd";
import { Button, Flex } from "antd";
const { Content } = Layout;
const Signup = (props) => {
  const { control, errors } = useForm({});
  return (
    <Layout className="sign-container">
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={10}>
          <Input placeholder="نام کاربری را وارد کنید" />
        </Grid>
        <Grid item xs={10}>
          <Input placeholder="نام کاربری را وارد کنید" />
        </Grid>
        <Grid item xs={6}>
          <Button className="w-75" type="primary" ghost>
            ورود
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button className="w-75" type="primary" danger ghost>
            ثبت نام
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Signup;
