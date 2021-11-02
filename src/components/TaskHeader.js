function TaskHeader(props) {
  return (
    <>
      {props.taskNumber === 1 && (
        <div className="taskHeader">
          <h1>Part 1</h1>
          <p>
            You should spend about 20 minutes on this task. Write at least 150
            words.
          </p>
        </div>
      )}
      {props.taskNumber === 2 && (
        <div className="taskHeader">
          <h1>Part 2</h1>
          <p>
            You should spend about 40 minutes on this task. Write at least 250
            words.
          </p>
        </div>
      )}
    </>
  );
}

export default TaskHeader;
