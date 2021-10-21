import task1SamplePicture from '../files/sample_task_1.jpg';

function TaskFile(props) {
  return (
    <div className="taskFile">
      <p>{props.task}</p>

      <img
        src={task1SamplePicture}
        alt="if you do not see this, please contact admins"
      />
    </div>
  );
}

export default TaskFile;
