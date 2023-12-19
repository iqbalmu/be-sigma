// show Modal Delete Inventory
$(document).ready(function () {
    $(".open-modalDeleteInventory").click(function () {
        $("#categoryName").val($(this).data("name"));
        $("#categoryId").val($(this).data("id"));
        $("#modalCategoryEdit").modal("show");
    });
});    