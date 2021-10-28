import { jsPDF } from 'jspdf';
import { Context } from '../App';
import { useContext } from 'react';

function FinishButton() {
  const { userInput1, userInput2 } = useContext(Context);

  return (
    <button
      className="headerButton"
      onClick={() => {
        const task1 = new jsPDF();
        var line = 25; // Line height to start text at
        var lineHeight = 8;
        var leftMargin = 20;
        var wrapWidth = 180;

        var splitText1 = task1.splitTextToSize(userInput1, wrapWidth);
        for (let i = 0, length = splitText1.length; i < length; i++) {
          task1.text(splitText1[i], leftMargin, line);
          line = lineHeight + line;
          let pageHeight = task1.internal.pageSize.height;

          if (line >= pageHeight - 20) {
            task1.addPage();
            line = 20;
          }
        }
        task1.save('Task1.pdf');
        line = 25;
        const task2 = new jsPDF();
        var splitText2 = task2.splitTextToSize(userInput2, wrapWidth);
        for (let i = 0, length = splitText2.length; i < length; i++) {
          task2.text(splitText2[i], leftMargin, line);
          line = lineHeight + line;
          let pageHeight = task1.internal.pageSize.height;

          if (line >= pageHeight - 20) {
            task1.addPage();
            line = 20;
          }
        }
        task2.save('Task2.pdf');
      }}
    >
      Finish test
    </button>
  );
}

export default FinishButton;
