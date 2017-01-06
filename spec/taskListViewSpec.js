function taskListViewProperty() {

  var TaskListDouble = function(){};

  var taskList = new TaskListDouble();
  var taskListView = new TaskListView(taskList)

  assert.isTrue("taskListViewProperty", taskListView.hasOwnProperty('taskList'));
}

function singleTaskListViewToHTML(){

  var task = {text: "Walk the dog"}
  var taskListDouble = {allObjects: [task]}
  var taskListView = new TaskListView(taskListDouble)

  assert.isTrue("taskListViewToHTML", taskListView.convert() === "<ul><li>Walk the dog</li></ul>");
}

function multipleTaskListViewToHTML(){

  var task1 = {text: "Walk the dog"};
  var task2 = {text: "Walk the cat"};
  var taskListDouble = {allObjects: [task1, task2]};
  var taskListView = new TaskListView(taskListDouble)

  debugger;

  assert.isTrue("multipleTaskListViewToHTML", taskListView.convert() === "<ul><li>Walk the dog</li><li>Walk the cat</li></ul>")
}

taskListViewProperty();
singleTaskListViewToHTML();
multipleTaskListViewToHTML();
