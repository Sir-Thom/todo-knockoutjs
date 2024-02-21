import * as ko from 'knockout';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';

function taskItem(task: string, isDone: boolean) {
    this.task = ko.observable(task);
    this.isDone = ko.observable(isDone);
}

function TodoViewModel(this: any) {
    const self = this;
    self.taskInput = ko.observable("");
    self.taskItems = ko.observableArray([]);
    
    self.addTask = function() {
        self.taskItems.push(new taskItem(self.taskInput(), false));
        self.taskInput("");
    };

    self.removeTask = function(task: any) {
        self.taskItems.remove(task);
    };

    // Initialize Gridstack
    const grid = GridStack.init({
        cellHeight: 'auto',
        
        float: true,
        animate: true,
        disableOneColumnMode: true,
        
    });
    grid.enableMove(true, '.grid-stack-item');
    grid.enableResize(false, '.grid-stack-item');
    grid.setStatic(false);

   

}

ko.applyBindings(new TodoViewModel());
