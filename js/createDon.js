function new_Don() {

    var createDon = document.createElement('p');
    var taskdata = document.getElementById('task_name').value;
    // var deleteDon = document.createElement('button');
    var listedDon = document.createTextNode('x   ' + taskdata);

    createDon.appendChild(listedDon);

    document.getElementById("donSection").appendChild(createDon);

    function crossOut() {
        li.classList.toggle("done");
    }

    p.addEventListener("click", crossOut);
    //END STRIKETHROUGH


    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    p.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON


    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        p.classList.add("delete")
    }
}

// remover.textContent = 'x ';
// remover.classList.add('button', 'button-text');
// listedDon.appendChild(remover);
// remover.addEventListener('click', () =>)

// function xButton() {
//     p.classList.toggle("done");
// }

// p.addEventListener("click", xButton);

//     var dn = document.createElement("button");
//     dn.appendChild(document.createTextNode("x"));
//     p.appendChild(dn);
//     dn.addEventListener("click", deleteDon);

//     function deleteDon() {
//         p.classList.add("delete")
//     }
// }