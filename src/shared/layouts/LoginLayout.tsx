import { ChildrenProp } from "../../types";
import "./styles/LoginLayout.css";

export const LoginLayout = ({ children }: ChildrenProp) => {
  return (
    <main className="main">
      <section className="section-banner">
        
      </section>

      <section className="section-form">
        <div className="info-container">
          <i className="bi bi-film"></i>
          <h1>Get more things done with Loggin platform.</h1>
          <p>
            Access to the most powerful tool in the entire design and web
            industry.
          </p>
        </div>
        {children}
        <div className="login-icons">
          <p>Or login with:</p>
          <ul>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-google"></i>
            </li>
            <li>
              <i className="bi bi-github"></i>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
