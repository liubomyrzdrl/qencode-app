import { useForm } from "react-hook-form";
import {
  CompanyTitle,
  ContentContainer,
  ContentTitle,
  ContentButton,
  InputField,
} from "../../components";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <CompanyTitle />
      <ContentContainer>
        <ContentTitle title="Create new Password?" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="delimiter-conten__inputs">
            <InputField
              typeField="password"
              placeholder="password"
              register={register}
            />
            <InputField
              typeField="password"
              placeholder="password"
              register={register}
            />
            <ContentButton type="submit" color="primary" title="Reset password " />
          </div>
        </form>
      </ContentContainer>
    </>
  );
};

export default ResetPassword;
