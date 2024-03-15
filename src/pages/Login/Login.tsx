import React, { useState } from "react";
import {
  CompanyTitle,
  ContentContainer,
  ContentTitle,
  InputField,
  SevicesLoginButtons,
} from "../../components";
import "./styles.css";
import ContentButton from "../../components/ContentButton/ContentButton";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        <div className="delimiter-conten__inputs">
          <InputField
            typeField="email"
            placeholder="Work email"
            value={email}
            onChange={() => console.log("Change")}
          />
          <InputField
            typeField="password"
            placeholder="password"
            value={password}
            onChange={() => console.log("Change")}
          />
        </div>
        <ContentButton type="primary" title="Login in " />
      </ContentContainer>
    </>
  );
};

export default Login;
