function TaskForm(props) {
  const handleChange = (e) => {
    props.setInput(e.target.value);
    console.log(props.input);
    console.log(props.input.split(' '));
  };
  function countWords(str) {
    // eslint-disable-next-line no-useless-escape
    let matches = str.match(/[\w\d\’\'-]+/gi);
    return matches ? matches.length : 0;
  }
  return (
    <div className="taskForm">
      <textarea
        spellCheck="false"
        className="textarea"
        id="textarea"
        value={props.value}
        onChange={handleChange}
      ></textarea>
      <div>
        <p>Word count: {countWords(props.input)}</p>
      </div>
    </div>
  );
}

export default TaskForm;
