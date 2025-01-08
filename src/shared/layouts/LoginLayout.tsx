import { ChildrenProp } from "../../types";

export const LoginLayout = ({ children }: ChildrenProp) => {
  return (
    <main>
      <section>
        <img src="https://via.placeholder.com/600" alt="image banner" />
      </section>

      <section>
        <div>
          <img src="https://via.placeholder.com/200x200" alt="logo" />
          <h1>Get more things done with Loggin platform.</h1>
          <p>
            Access to the most powerful tool in the entire design and web
            industry.
          </p>
        </div>
        {children}
        <div>
          <p>Or login with</p>
          <ul>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
