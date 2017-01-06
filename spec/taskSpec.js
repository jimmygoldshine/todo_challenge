function taskInitialisedWithText(){
  var task = new Task("Walk the dog");

  assert.isTrue("taskInitialisedWithText", task.text === "Walk the dog");
}

function taskInitialisedWithInProgressStatus(){
  var task = new Task("Walk the dog");

  assert.isTrue("taskInitialisedWithText", task.status === "In Progress");
}

taskInitialisedWithText();
taskInitialisedWithInProgressStatus();
