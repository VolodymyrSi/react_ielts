import { task1AcademicBank } from '../../files/Test_bank_academic.js';
import { task2AcademicBank } from '../../files/Test_bank_academic.js';

import { task1GeneralBank } from '../../files/Test_bank_general.js';
import { task2GeneralBank } from '../../files/Test_bank_general.js';


export function countWords(str) {
  let matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}

export function moduleSelector (ExamModule) {
  let taskBank = null;
  ExamModule === 'Academic'
    ? (taskBank = [task1AcademicBank, task2AcademicBank])
    : (taskBank = [task1GeneralBank, task2GeneralBank]);
  return taskBank;
}