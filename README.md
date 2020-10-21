# Todo Web App (Frontend)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## How to run the application

* First clone the backend project [Todo Backend](https://bitbucket.org/bouali-todo-app/todo-backend/src/master/)
* Follow the instructions to run correctly the backend project and generate the swagger.json file => The REST API documentation which servers the Frontend services generation
* In the file `package.json` line 14 replace the `/Users/bouali/Documents/alib/personal/courses/udemy/todo_project/backend/todo/target/todo-0.0.1-SNAPSHOT.jar` and `/Users/bouali/Documents/alib/personal/courses/udemy/todo_project/backend/todo/target/swagger.json` with the absolute path of your generated jar and swagger.json file
## Two different options to run the application
# Option 1
   * Run the command  `npm install` to install all the dependencies and libraries
   * Run the command `npm run todo-api` to generate
   * Run the command `ng serve` for a dev server. Navigate to `http://localhost:4200/login`. The app will automatically reload if you change any of the source files.
# Option 2
* Run the command  `npm install` to install all the dependencies and libraries
* Run `npm run start:local` for a dev server. Navigate to `http://localhost:4200/login`. The app will automatically reload if you change any of the source files.
    + This command will generate the API and run the application


