(function(exportTaskListView) {

  var TaskListView = function(taskList){
    this.taskList = taskList;
  };

  TaskListView.prototype.convert = function(){
    var output = this.taskList.allObjects.map(function(task) {
      return "<li class='taskContent'>" + task.text + " - " + "<span class='status'>" + task.status + "</span></li>"
    })
    return "<ul>" + output.join('') + "</ul>"
  }

  exportTaskListView.TaskListView = TaskListView;

})(this)
