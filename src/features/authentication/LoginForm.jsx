import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import CabinTable from "../cabins/CabinTable";

function LoginForm() {
  const { login, isLoggingIn } = useLogin();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password }, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
    });
  }

  if (isLoggingIn) return <Spinner />

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large">
          {!isLoggingIn ? "Login" : <SpinnerMini />}
        </Button>
      </FormRow>

    </Form>
  );
}

export default LoginForm;
