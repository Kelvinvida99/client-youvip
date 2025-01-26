import { Link } from "react-router-dom";
import { useForm } from "../../../shared/hooks";
import { LoginLayout } from "../../../shared/layouts";
import "./styles/LoginPage.css";
import { useRegisterHandler } from "../hooks";

export const RegisterPage = () => {
  const { email, password, fullName, onInputChange, onResetForm } = useForm({
    fullName: "",
    email: "",
    password: "",
  });

  const { handleRegister, credentials } = useRegisterHandler();

  let errorMessages: string[] = [];

  if (credentials && 'error' in credentials) {
    errorMessages = (credentials.error as any)?.data.message;
    console.log( errorMessages );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRegister({ fullName, email, password });
    onResetForm();
  };

  return (
    <LoginLayout>
      <div className="form-container">
        <form className="form-container" onSubmit={onSubmit}>
          <input
            className="input-login"
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            onChange={onInputChange}
          />
          <input
            className="input-login"
            type="email"
            placeholder="E-mail Address"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            className="input-login"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <div className="btn-container">
            <button className="btn-submit" type="submit">
              Register
            </button>
            <Link to="/auth/login">Sign in</Link>
          </div>
        </form>

        <div className="alert-info">
          {errorMessages?.map((error) => (<span key={error}>{error}. </span>))}
        </div>
      </div>
    </LoginLayout>
  );
};
