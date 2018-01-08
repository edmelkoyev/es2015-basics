class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this.done = false;
        Task.count += 1;
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
let task2 = new Task('Go to the school');
let task3 = new Task();

console.log(typeof Task);
console.log(typeof task);
console.log(task instanceof Task);

console.log(task.title);
console.log(task2.title);
console.log(task3.title);

console.log('Task Count:', Task.count);

task.complete();