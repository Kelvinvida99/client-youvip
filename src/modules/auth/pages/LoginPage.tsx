import { Link } from "react-router-dom";
import { useForm } from "../../../shared/hooks";
import { LoginLayout } from "../../../shared/layouts/LoginLayout";
import { useLoginHandler } from "../hooks/useLoginHandle";
import './styles/LoginPage.css'

export const LoginPage = () => {
  const { email, password, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });
  
  const { handleLogin } = useLoginHandler();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    handleLogin( email, password );
    onResetForm();
  };
  


  return (
    <LoginLayout>
      <div className="form-container">
        <form className="form-container" onSubmit={onSubmit}>
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
            <button className="btn-submit" type="submit">Login</button>
            <Link to="/auth/register">Create account</Link>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};
