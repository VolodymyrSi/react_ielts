import task1SamplePicture from '../files/sample_task_1.jpg';

function TaskFile() {
  return (
    <div className="taskFile">
      <p>
        The table below shows how the UK unemployed spent their time last year.
      </p>
      <p>
        Summarise the information by selecting and reporting the main features,
        and make comparisons where relevant.
      </p>
      <img
        src={task1SamplePicture}
        alt="if you do not see this, please contact admins"
      />
    </div>
  );
}

export default TaskFile;
