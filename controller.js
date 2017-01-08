(function(exportController){

  var Controller = function(taskList){
    this.taskList = taskList;
    this.taskListView = new TaskListView(taskList);
  };

  Controller.prototype.renderTasks = function(){
    var tasks = document.getElementById("taskList");
    tasks.innerHTML = this.taskListView.convert();
  };

  Controller.prototype.changeStatus = function(){
    var taskStatus = document.querySelector(".status");
    taskStatus.onclick = function() {
      taskStatus.innerHTML = task.status;
    }
  }

  Controller.prototype.editTask = function(){
    var taskContent = document.querySelector(".taskContent");
    taskContent.onclick = function() {
      taskContent.contentEditable = true;
    }
  }

  Controller.prototype.submitTask = function(){
    var taskForm = document.getElementById("taskForm");
    taskForm.addEventListener("submit", function(event){
      event.preventDefault();
      var interceptedNote = document.getElementById('text').value;
      controller.taskList.addTask(interceptedNote);
      controller.renderTasks();
      controller.changeStatus();
      controller.editTask();
    })
  };

  exportController.Controller = Controller;

})(this);
