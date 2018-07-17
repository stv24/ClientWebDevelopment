$(document).ready(function () {
    var name = $("#name");
    var surname = $("#surname");
    var cell_number = $("#cell_number");

    var addButton = $("#add-button");
    var tr_count = 0;


    addButton.click(function (e) {
        var addOrRemove = false;
        $("input").toggleClass("validation", addOrRemove);
        if (name.val().length === 0) {
            addOrRemove = true;
            $("#name").toggleClass("validation", addOrRemove);
            alert("Введите имя!");
            e.preventDefault();
            return;
        }
        if (surname.val().length === 0) {
            addOrRemove = true;
            $("#surname").addClass("validation", addOrRemove);
            alert("Введите фамилию!");
            e.preventDefault();
            return;
        }
        if (cell_number.val().length === 0) {
            addOrRemove = true;
            $("#cell_number").addClass("validation");
            alert("Введите номер телефона");
            e.preventDefault();
            return

        }
        addOrRemove = false;
        tr_count = tr_count + 1;
        var tr_el = $("<tr>");

        var td_1 = $("<td> ");
        td_1.text(tr_count);
        var td_2 = $("<td>");
        td_2.text(surname.val());

        var td_3 = $("<td>");
        td_3.text(name.val());
        var td_4 = $("<td>");
        var td_5 = $("<td>");
        var remove_button = $("<button>").addClass("rem_button");

        remove_button.text("x");

        td_5.append(remove_button);

        td_4.text(cell_number.val());
        tr_el.append(td_1)
            .append(td_2)
            .append(td_3)
            .append(td_4)
            .append(td_5);
        $("table").append(tr_el);
        remove_button.click(function () {
            tr_el.remove();
            --tr_count;

        });

        name.val("");
        surname.val("");
        cell_number.val("");

    });

});
