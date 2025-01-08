import { Link } from 'react-router-dom';
import { useForm } from "../../../shared/hooks";
import { LoginLayout } from "../../../shared/layouts";

export const RegisterPage = () => {
  const { email, password, fullName, onInputChange, onResetForm } = useForm({
    fullName: "",
    email: "",
    password: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Full Name", fullName); 
    onResetForm(); 
  };

  return (
    <LoginLayout>
      <div>
        <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            onChange={onInputChange}
          />
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
            <button type="submit">Register</button>
            <Link to="/auth/login" >Sign in</Link>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};