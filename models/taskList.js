(function(exportTaskList) {
  var TaskList = function(){
    this.allObjects = [];
  };

  TaskList.prototype.addTask = function(string){
    this.allObjects.push(new Task(string));
  };

  TaskList.prototype.editTask = function(task, string) {
    task.text = string;
  }

  TaskList.prototype.taskCompleted = function(task) {
    task.status = "Completed"
  };

  exportTaskList.TaskList = TaskList;

})(this)
