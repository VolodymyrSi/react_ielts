import TaskHeader from './Task_header';
import TaskFile from './Task_file';
import TaskForm from './Task_form';

function TaskContainer() {
  return (
    <div>
      <div className="taskContainer">
        <TaskHeader />
      </div>
      <div className="taskFileAndForm">
        <TaskFile />
        <TaskForm />
      </div>
    </div>
  );
}

export default TaskContainer;
