function Nav(props) {
  return (
    <div className="navigationContainer">
      <div className="navigationButtonContainer">
        <p>Part 1:</p>
        <button className="navigationButton" onClick={() => props.onClick(1)}>1</button>
      </div>
      <div className="navigationButtonContainer">
        <p>Part 2:</p>
        <button className="navigationButton" onClick={() => props.onClick(2)}>2</button>
      </div>
    </div>
  );
}

export default Nav;
