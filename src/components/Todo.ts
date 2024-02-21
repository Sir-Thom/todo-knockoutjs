import { GridStack } from 'gridstack';
import * as ko from 'knockout';
//let grid = GridStack.init({ cellHeight:  70 , draggable: { handle: '.drag-handle' }, staticGrid: false });

function taskItem(this: any, task, isDone) {
  this.task = ko.observable(task);
  this.isDone = ko.observable(isDone);
}

function TodoViewModel(this: any) {
    
    var self = this;
    self.taskInput = ko.observable("");
    self.taskItems = ko.observableArray([]);
    
    self.addTask = function() {
        self.taskItems.push(new taskItem(self.taskInput(), false));
        self.taskInput("");
      

    };


    self.removeTask = function(task: any) {
        
        self.taskItems.remove(task);
    };
   

    //grid.load(self.taskItems().slice());
}

ko.applyBindings(new TodoViewModel());

