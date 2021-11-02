#### _this is alpha version_

>### Background:
>Millions of people take IELTS English test every year. One section on the test is writing, where the examinees are expected to type up 2 texts on a computer. There is a special app which provides the tasks to candidates and enables them to input their answers.

### The problem:
This program is unique in a way that it is not similar to any text editor test takers are used to from their computer experience *(Google docs, Ms words, others)*. Therefore, it is quite a challenge on its own to feel confident working in an alien environment let alone taking a test in a foreign language.

### My solution:
I decided to build a similar app which will bear a close resemblance to the app used in a test . I wanted my app to simulate the real test app but give the user some extra features.
1. The app should offer a few exam versions.
2. Users should be able to keep their text after they are done so they they can show it to their teacher or run through a spell checker / grammar checker and take pride in the result or cry for a bit.
3. There has to be a timer and a word counter.

### Tech stack:
- html 
- css 
- js 
- react 
- npm packages:
  - *SweetAlert2*
  - *react-to-pdf*
- version control with
  - *github*
- deployed with
  - *github pages*

### Tech side:

I developed a SPA which runs on react framework with functional components and hooks. 

- There are 'database' objects which hold sets of tasks for the test.

- The `state` hooks 
  - are responsible for rendering appropriate page elements 
  - take care of the word counter which through `state` hook is able to follow change on textarea element and uses string methods with a regExp to keep track of the number of words and displays them

- There is a timer/stopwatch which displays how much time is left. It is build with `useState` and `useEffect` hooks. The times notifies the user when there are 10 and 5 minutes left. *SweetAlert* npm package is used for such notifications.

- `useContext` hook makes it easy to pass data around the app and reduce usage of `props`. 

- When _finish test_ button is clicked, text inputs are rendered as PDF file with help of *react-to-pdf* npm package 
