function new_Don() {

    var taskdata = document.getElementById('task_name').value;
    var datedata = document.getElementById('due_name').value;


    var createDon = document.createElement('p');
    
    var listedDon = document.createTextNode(' Task: ' + taskdata + ', Due date:' + datedata);
    createDon.appendChild(listedDon);
    document.getElementById("donSection").appendChild(createDon);
}