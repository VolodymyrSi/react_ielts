import { countWords } from "../utils/helper";

function TaskForm(props) {
  const handleChange = (e) => {
    props.setInput(e.target.value);
  };
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
