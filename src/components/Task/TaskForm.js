import { countWords } from "../utils/helper";
import { StyledTaskForm, TextArea } from "./styled";

function TaskForm(props) {
  const handleChange = (e) => {
    props.setInput(e.target.value);
  };
  return (
    <StyledTaskForm>
      <TextArea
        spellCheck="false"
        className="textarea"
        id="textarea"
        value={props.value}
        onChange={handleChange}
      ></TextArea>
      <div>
        <p>Word count: {countWords(props.input)}</p>
      </div>
    </StyledTaskForm>
  );
}

export default TaskForm;
