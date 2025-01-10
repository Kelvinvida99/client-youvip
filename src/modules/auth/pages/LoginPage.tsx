import { Link } from "react-router-dom";
import { useForm } from "../../../shared/hooks";
import { LoginLayout } from "../../../shared/layouts/LoginLayout";
import { useLoginHandler } from "../hooks/useLoginHandle";

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
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="E-mail Address"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <div>
            <button type="submit">Login</button>
            <Link to="/auth/register">Create account</Link>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};
