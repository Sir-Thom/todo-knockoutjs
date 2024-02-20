import * as ko from 'knockout';



function TodoViewModel(this: any) {
  var self = this;
    self.tasks = ko.observableArray([]);
    self.newTask = ko.observable(''); 

    
   self.addTask = function() {
        self.tasks.push({ title: self.newTask(), completed: ko.observable(false) });
        self.newTask('');
    };
    
    self.addTaskOnEnter = function(data, event) {
        if (event.keyCode ===  13) { //  13 = Enter 
            self.addTask();
        }
    };
    
    self.toggleTaskCompletion = function(task) {
        task.completed(!task.completed());
    };
}
ko.applyBindings(new TodoViewModel());

