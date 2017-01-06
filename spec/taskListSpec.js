function taskListCreatedWithEmptyArray(){
  var taskList = new TaskList();

  assert.isTrue("taskListCreatedWithEmptyArray", taskList.allObjects.length === 0);
}

function taskListCanCreateTask(){
  var taskList = new TaskList();
  taskList.addTask("Walk the dog");

  assert.isTrue("taskListCanCreateTask", taskList.allObjects[0].text === "Walk the dog");
}

function taskListCanEditTask() {
  var taskList = new TaskList();


  taskList.addTask("Walk the dog");
  taskList.editTask(taskList.allObjects[0], "Walk the cat");

  assert.isTrue("taskListCanEditTask", taskList.allObjects[0].text === "Walk the cat");
}

function taskListCanSetTaskToCompleted() {
  var taskList = new TaskList();

  taskList.addTask("Walk the dog");
  taskList.taskCompleted(taskList.allObjects[0]);

  assert.isTrue("taskListCanSetTaskToCompleted", taskList.allObjects[0].status === "Completed");
}

taskListCreatedWithEmptyArray();
taskListCanCreateTask();
taskListCanEditTask();
taskListCanSetTaskToCompleted();
