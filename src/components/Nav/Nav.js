import { Link } from "react-router-dom";
import { Container } from "./styled";
import { NavButton } from "../Buttons/styled";

function Nav(props) {
  return (
    <Container>
      <div className="buttonWrapper">
        <p>Part 1:</p>
        <Link to="/task1">
          <NavButton className="button" onClick={() => props.onClick(1)}>
            1
          </NavButton>
        </Link>
      </div>
      <div className="buttonWrapper">
        <p>Part 2:</p>
        <Link to="/task2">
          <NavButton className="button" onClick={() => props.onClick(2)}>
            2
          </NavButton>
        </Link>
      </div>
    </Container>
  );
}

export default Nav;
