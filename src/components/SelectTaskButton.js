import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Context } from '../App';

function SelectTaskButton() {
  const { ExamModule, setExamModule, ExamModuleTaskNumber, setExamModuleTaskNumber } =
    useContext(Context);

  async function chooseExamModuleTaskNumber() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          1: '1',
          2: '2',
          3: '3',
          4: '4'
        });
      }, 1000);
    });

    const { value: ExamModuleTaskNumber } = await Swal.fire({
      title: 'Select task number',
      input: 'radio',
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!';
        }
      }
    });

    if (ExamModuleTaskNumber) {
      Swal.fire({ html: `You selected ${ExamModuleTaskNumber}` });
      setExamModuleTaskNumber(ExamModuleTaskNumber);
    }
  }

  async function chooseModule() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          General: 'General',
          Academic: 'Academic'
        });
      }, 1000);
    });

    const { value: module } = await Swal.fire({
      title: 'Select module',
      input: 'radio',
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!';
        }
      }
    });

    if (module) {
      Swal.fire({ html: `You selected ${module}` });
      setExamModule(module);
      setTimeout(() => chooseExamModuleTaskNumber(), 2000);
    }
  }
  return (
    <button className="headerButton" onClick={() => chooseModule()}>
      Select Task
    </button>
  );
}

export default SelectTaskButton;
