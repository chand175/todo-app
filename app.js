
const manager = document.querySelector('.manager');
const form = document.querySelector("#form");
const nameOfaBook = document.querySelector("#book");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = nameOfaBook.value;
    if (!data) {
        alert("please enter the name of a book");
        nameOfaBook.focus()
        return;
    }

    const task = document.createElement('div');
    task.classList.add("task");

    const inputs = document.createElement("input");
    inputs.classList.add("text");
    inputs.value = data;
    inputs.setAttribute('readonly', 'readonly');
    inputs.type = "text"


    const actions = document.createElement('div');
    actions.classList.add("todolist");

    const edit = document.createElement("button");
    edit.classList.add('button1');
    edit.innerHTML = "Edit"

    const delet = document.createElement("button");
    delet.classList.add("button2")
    delet.innerHTML = "Delete"

    manager.appendChild(task)
    task.appendChild(inputs)
    actions.appendChild(edit)
    actions.appendChild(delet)
    manager.appendChild(actions)

    document.getElementById("text").value = [""];


    // Edit User Data

    edit.addEventListener('click', () => {
        if (edit.innerHTML == "Edit") {
            inputs.removeAttribute('readonly');
            inputs.focus();
            edit.innerHTML = "Save"

        } else {
            inputs.setAttribute('readonly', 'readonly');
            edit.innerHTML = "Edit"
        }
    })

    // Delete User Data

    delet.addEventListener("click", () => {
        if (delet.innerHTML == "Delete") {
            manager.removeChild(task)
            manager.removeChild(actions)
        }

    })


})


// let res = add();



// function add(a, b) {
//     return a + b;

// }

// console.log(add(2, 3))





