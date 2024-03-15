import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CompanyTitle,
  ContentContainer,
  ContentTitle,
  InputField,
  SevicesLoginButtons,
  ContentButton,
  LinkComponent
} from "../../components";
import "../../App.css";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <CompanyTitle />
      <ContentContainer>
        <ContentTitle title="Log in into your account" />
        <SevicesLoginButtons />
        <div className="delimiter-content">
          <div className="delimiter-content__line" />
          <span style={{ margin: "0 0.5em" }}>OR</span>
          <div className="delimiter-content__line" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="delimiter-conten__inputs">
            <InputField
              typeField="email"
              placeholder="Work email"
              register={register}
            />
            <InputField
              typeField="password"
              placeholder="password"
              register={register}
            />
            <ContentButton type="submit" color="primary" title="Login in " />
          </div>
        </form>
        <LinkComponent pathTo="forgot-password" text="Forgot your password?" />
      </ContentContainer>
    </>
  );
};

export default Login;
