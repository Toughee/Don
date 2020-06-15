function new_Don() {

    var taskd = document.getElementById('task_name').value;
    var dated = document.getElementById('due_name').value;
    var listedDon = '<b>' + taskd + '</b>' + ", Due date: " + dated;

    document.getElementById('result').innerHTML = listedDon;

    if (taskd == "") {
        alert("Please input your task");
    }
    return false;
}
document.getElementById('create_Don').addEventListener('click', new_Don);
