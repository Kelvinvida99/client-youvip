import { ChildrenProp } from "../../types/prop.interface";
import "./styles/HomeLayout.css";

export const HomeLayout = ({ children }: ChildrenProp) => {
  return (
    <div className="homeLayout">
      <div className="filter-container">{children}</div>
    </div>
  );
};
