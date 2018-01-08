class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
    }

    get done() {
        return this._done === true ? 'Completed' : 'Not Completed';
    }

    set done(val){
        if (val !== undefined && typeof val === 'boolean'){
            this._done = val;
        } else {
            console.error('Error: value must be true/false');
        }
    }

    complete() {
        this.done = true;
        console.log(`Task [${this.title}] has been done!`);
    }

    static getDefaultTitle() {
        return "My Task";
    }

}
// Static Class property:
Task.count = 0;

let task = new Task('Clean-up the room');
console.log('Task Count:', Task.count);

console.log(task.done, task._done);

task.complete();

console.log(task.done, task._done);