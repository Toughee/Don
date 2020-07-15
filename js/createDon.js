function new_Don() {

    var taskdata = document.getElementById('task_name').value;
    //var datedata = document.getElementById('due_name').value;



    var createDon = document.createElement('p');

    //var listedDon = document.createTextNode(' Task: ' + taskdata + ', Due date:' + datedata);
    var listedDon = document.createTextNode('[X] ' + taskdata);


    createDon.appendChild(listedDon);

    document.getElementById("donSection").appendChild(createDon);
}


function deleteDon() {

}

var dn = document.createElement("button");

dn.appendChild(document.createTextNode("X"));