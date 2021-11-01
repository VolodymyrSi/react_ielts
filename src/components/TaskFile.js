import task1picture from '../files/10/10-1.jpg';
import task2picture from '../files/10/10-2.jpeg';
import task3picture from '../files/10/10-3.jpg';
import task4picture from '../files/10/10-4.jpg';

function TaskFile(props) {
  return (
    <div className="taskFile">
      <p>{props.task}</p>
      {props.number === '1' && (
        <img
          src={task1picture}
          alt="if you do not see this, please contact admins"
        />
      )}
    </div>
  );
}

export default TaskFile;
