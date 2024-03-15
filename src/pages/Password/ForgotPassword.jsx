import { useForm } from "react-hook-form";
import {
  CompanyTitle,
  ContentContainer,
  ContentTitle,
  ContentButton,
  InputField,
} from "../../components";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <CompanyTitle />
      <ContentContainer>
        <ContentTitle title="Forgot Password?" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="delimiter-conten__inputs">
            <InputField
              typeField="email"
              placeholder="Enter your email"
              register={register}
            />
            <ContentButton type="submit" color="primary" title="Send " />
            <ContentButton type="submit"  title="Cancel" />
          </div>
        </form>
      </ContentContainer>
    </>
  );
};

export default ForgotPassword;
