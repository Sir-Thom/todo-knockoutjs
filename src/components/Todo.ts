import * as ko from 'knockout';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';

function taskItem(task, isDone) {
    this.task = ko.observable(task);
    this.isDone = ko.observable(isDone);
}

function TodoViewModel() {
    const self = this;
    self.taskInput = ko.observable("");
    self.taskItems = ko.observableArray([]);
    
    self.addTask = function() {
        const newItem = new taskItem(self.taskInput(), false);
        self.taskItems.push(newItem);
        self.taskInput("");
         const taskItemHtml = `<li class="grid-stack-item flex items-center justify-between py-2 drag-handle" draggable="true" data-gs-x="0" data-gs-y="${self.taskItems().length - 1}">
                            <input type="checkbox" data-bind="checked: isDone, attr: { 'checked': isDone() }" class="mr-2" />
                            <label data-bind="text: task, css: { 'line-through': isDone }"></label>
                            <button class="text-red-500" data-bind="click: $parent.removeTask">Remove</button>
                         </li>`;
        grid.addWidget(taskItemHtml, 0, self.taskItems().length - 1, 1, 1, true);
    };
        
    self.removeTask = function(task) {
        self.taskItems.remove(task);
        grid.removeWidget(task);
    };

    // Initialize Gridstack
    const grid = GridStack.init({
        cellHeight: 'auto',
        staticGrid: false,
        sizeToContent: true,
        float: true,
        animate: true,
        disableOneColumnMode: true,
        subGridOpts: {
            animate: true,
            disableOneColumnMode: true,
            cellHeight: 'auto',
            draggable: true,
            column: 1
        }
    });

    // Bind KnockoutJS
    ko.applyBindings(self);
}

new TodoViewModel();

