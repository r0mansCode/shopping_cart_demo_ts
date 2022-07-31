import "./Pages.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="buttonContainer">
      <NavLink to="/store" className="neon-button">
        Please redirect to the store
      </NavLink>
    </div>
  );
};
