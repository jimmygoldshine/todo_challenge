(function(exportTaskModel) {

  var Task = function(string){
    this.text = string;
    this.status = "In Progress"
  };

  exportTaskModel.Task = Task;

})(this)
