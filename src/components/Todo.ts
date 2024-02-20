import * as ko from 'knockout';
import $ from 'jquery';
import 'gridstack';
import { GridStack } from 'gridstack';

function TodoViewModel(this: any) {
    var self = this;
    self.tasks = ko.observableArray([]);
    
    // Function to add a new task
    self.addTask = function() {
        self.tasks.push({ title: ko.observable('New Task') });
    };
        


}

ko.applyBindings(new TodoViewModel());


