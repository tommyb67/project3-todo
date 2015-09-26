$(document).ready(function () {
    $(".add-items").submit(function(event) {
      event.preventDefault();

      var item = $("#todo-list-item").val();

      if (item) {
        $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr /></li>");
        $("#todo-list-item").val("");
      }
    });

    $(document).on("change", ".checkbox", function() {
      $(this).parent().toggleClass("completed");
    });

    $(document).on("click", ".remove", function() {
      $(this).parent().remove();
    });
});
