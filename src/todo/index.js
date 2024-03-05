import "../../style.scss";
const URL_PATH = 'http://localhost:3000/';
document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const titleEl = document.getElementById('taskTitle');
    const descEl = document.getElementById('taskDescription');
    const selectEl = document.getElementById('taskPriority');
    console.log(`${titleEl.value} ____ ${descEl.value} ____ ${selectEl.value}`);
    addTask({
        title: titleEl.value,
        description:descEl.value,
        priority: selectEl.value,
        data: Date.now(),
    })
})
function addTask(task){
    console.log('obj', typeof task);
    console.log(typeof JSON.stringify(task));
    fetch('http://localhost:3000/todo-list', {
        method: 'POST',
        headers: {
     'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }).catch(function (e){
        console.error(e)
    })
}