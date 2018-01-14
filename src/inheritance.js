class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание Задачи');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return "Simple Task";
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" is done!`);
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(parent, ...rest) {
        super(...rest);
        this.parent = parent;
        console.log('Создание ПОД-Задачи');
    }

    complete() {
        super.complete();
        console.log(`SubTask "${this.title}" is done!`);
    }
}

let task = new Task('LEARN JavaScript');
let subtask = new SubTask(task, 'Learn ES6');

// console.log(`instance of Task: ${subtask instanceof Task}` );
// console.log(`instance of SubTask: ${subtask instanceof SubTask}` );

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);


