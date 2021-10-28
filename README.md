# _this project is under development_

>### Background:
>Millions of people take IELTS English test every year. One section on the test is writing, where the examinees are expected to type up 2 texts on a >computer. There is a special app which provides the tasks and to candidates and enables them to input their answers.

### The problem:
This program is unique in a way that it is not similar to any text editor test takers are used to from their computer experience (Google docs, Ms words, others). Therefore, it is quite a challenge on its own to feel confident working in an alien environment let alone taking a test in a foreign language.

### My solution:
I decided to build a similar app which will bear a close resemblance to the app used in a test (which I have seen myself since I did the official test). I wanted my app to simulate the real test app but give the user some extra features.
Number 0 is that the app should offer a dozen of exam versions.
First, they may choose to do a random test or select a task to their liking.
Second, they should be able to keep their text after they are done so they they can show it to their teacher or run through a spell checker / grammar checker and take pride in the result or cry for a bit.
Third, the app should have some dummy-proof features such as the work should not disappear if a user accidentally closes their browser or refreshes the page.
Fourth, there has to be a timer and a word counter.

### Tech stack:
Html css js react github githubPages

### Tech side:

I developed a SPA which runs on react framework with functional components and hooks. 

- There is a 'database' object which holds a set of tasks for the test.

- The state hooks helps toggle between 2 writing tasks a user has to complete as clicks on navbar buttons prompt taskState to change based on the current task number.

-  There is a word counter which through state hook is able to follow change on textarea element and uses string methods with a regExp to keep track of the number of words and displays them

- There is a timer/stopwatch which displays how much time is left. It is build with useState and useEffect hooks.

-  I made use of local storage to keep track of user's input. If a user accidentally closes their browser/a tab/whatever happens, their work is still there and they may keep working on the test.
