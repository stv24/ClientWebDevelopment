document.addEventListener("DOMContentLoaded", function () {
    var addToDoButton = document.getElementById("add-button");
    var addToDoInput = document.getElementById("add-todo-input");
    var list = document.getElementById("ToDoItems");

    addToDoButton.addEventListener("click", function () {
        var text = addToDoInput.value;
        if (text.length !== 0) {
            var listItem = document.createElement("li");
            var removeButton = document.createElement("button");

            listItem.innerText = text;

            removeButton.innerText = "Удалить";
            listItem.appendChild(removeButton);
            list.appendChild(listItem);

            removeButton.addEventListener("click", function () {
                list.removeChild(listItem);
            });
        }
        addToDoInput.value = "";
    });


});