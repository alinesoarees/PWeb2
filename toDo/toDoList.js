var form = document.getElementById('formulario');
var tarefa = document.getElementById('new-task');
var listItem = document.getElementById('text');

const addItem = (item) => {
    var item = document.createElement("li");
    item.innerHTML = `<input type='checkbox'>` + `<label>${tarefa.value}</lable>`
    listItem.appendChild(item);
}
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (tarefa.value)
        addItem(tarefa.value)
});