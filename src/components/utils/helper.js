import { task1AcademicBank } from "../../assets/test-materials/Test_bank_academic";
import { task2AcademicBank } from "../../assets/test-materials/Test_bank_academic";

import { task1GeneralBank } from "../../assets/test-materials/Test_bank_general";
import { task2GeneralBank } from "../../assets/test-materials/Test_bank_general";

export function countWords(str) {
  let matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}

export function moduleSelector(ExamModule) {
  let taskBank = null;
  ExamModule === "Academic"
    ? (taskBank = [task1AcademicBank, task2AcademicBank])
    : (taskBank = [task1GeneralBank, task2GeneralBank]);
  return taskBank;
}
