$(document).ready(function () {
    var name = $("#name");
    var surname = $("#surname");
    var cellNumber = $("#cellNumber");

    var addButton = $("#addButton");
    var trCount = 0;


    addButton.click(function () {

        $(".inputClass").toggleClass("validation", false);
        if (name.val().length === 0) {
            $("#name").toggleClass("validation", true);
            alert("Введите имя!");
            return false;
        }
        if (surname.val().length === 0) {
            $("#surname").addClass("validation", true);
            alert("Введите фамилию!");
            return false;
        }
        if (cellNumber.val().length === 0) {
            $("#cellNumber").addClass("validation", true);
            alert("Введите номер телефона");
            return false;
        }

        trCount = trCount + 1;
        var trEl = $("<tr>");

        var td1 = $("<td> ");
        td1.text(trCount);
        var td2 = $("<td>");
        td2.text(surname.val());

        var td3 = $("<td>");
        td3.text(name.val());
        var td4 = $("<td>");
        var td5 = $("<td>");
        var removeButton = $("<button>").addClass("remButton");

        removeButton.text("x");

        td5.append(removeButton);

        td4.text(cellNumber.val());
        trEl.append(td1)
            .append(td2)
            .append(td3)
            .append(td4)
            .append(td5);
        $(".tableBodyClass").append(trEl);
        removeButton.click(function () {
            trEl.remove();
            $("tr td:nth-child(1)").each(function (i) {
                $(this).text(i + 1);
            });
            --trCount;
        });

        name.val("");
        surname.val("");
        cellNumber.val("");

    });

});
