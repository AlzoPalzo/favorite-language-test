# favorite-language-test

## What is it?
This NodeJs program takes a Github username and attempts to tell you what that users favorite programming language is.

## How does it work?
The program looks at up to 50 of the most recently created public repositories by a user via the Github API. It will then add up the most
commonly used language for each repository and find the most used language and declare that as the favorite in most cases. The program makes the assumption that nobody likes programming in C even if it is the most common and so will pick a different language if another is available. The program also assumes that Python is the best language because... it is, so any user that has a Python heavy repository will 
be assumed to have Python as their favorite language.

## How do I use it?
The program is very simple to run.

**Instructions:**
- Make sure you have [npm](https://www.npmjs.com/get-npm) installed.
- Clone this repository.
- Navigate to the directory where you cloned this repository in your terminal.
- Run npm install.
- Run npm start to begin.
- You should now be prompted to enter a Github username.
- Upon doing so the program will figure what the favorite programmin language is for that user
