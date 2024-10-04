let list = document.getElementById("list")
let inputTask = document.getElementsByTagName("input")
let delAll = document.getElementById("deleteAllTask")

function addTask() {
    let todo = document.getElementById("task")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(todo.value))
    let deleteButton = document.createElement("button")
    let delText = document.createTextNode("Delete")
    deleteButton.setAttribute("onclick", "deleteTask(this)")
    deleteButton.appendChild(delText)
    li.appendChild(deleteButton)
    let editButton = document.createElement('button')
    let editText = document.createTextNode("Edit")
    editButton.appendChild(editText)
    editButton.setAttribute("onclick", "editTask(this)")
    li.appendChild(editButton)
    list.appendChild(li)
}

function deleteTask(e) {
    e.parentNode.remove()
}

function editTask(e) {
    let value = e.parentNode.firstChild.nodeValue
    let editedValue = prompt("Enter new value", value)
    e.parentNode.firstChild.nodeValue = editedValue
}

function deleteAll() {
    list.innerHTML = ""
}