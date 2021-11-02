import task1picture from '../files/10/10-1.jpg';
import task2picture from '../files/10/10-2.jpeg';
import task3picture from '../files/10/10-3.jpg';
import task4picture from '../files/10/10-4.jpg';

function TaskFile(props) {
  function imageSelector(prop) {
    let taskImage = null;
    switch (prop) {
      case '1':
        taskImage = task1picture;
        break;
      case '2':
        taskImage = task2picture;
        break;
      case '3':
        taskImage = task3picture;
        break;
      case '4':
        taskImage = task4picture;
        break;
      default:
        console.log('Something went wrong, task number out of range');
    }
    return taskImage;
  }

  function shouldDisplayImage(prop) {
    return prop.module === 'Academic' && prop.number === '1';
  }

  return (
    <div className="taskFile">
      <p>{props.task}</p>
      {shouldDisplayImage(props) && (
        <img
          src={imageSelector(props.taskNumber)}
          alt="if you do not see this, please contact admins"
        />
      )}
    </div>
  );
}

export default TaskFile;
