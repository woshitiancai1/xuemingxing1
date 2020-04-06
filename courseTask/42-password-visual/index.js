$(function() {
    var addPassword = $("#add-password"),
        getPassword = $("#get-password"),
        arr = [];
    addPassword.click(function() {
        var addPassword = new PasswordTextbox({
            container: "div.main"
        });
        arr.push(addPassword),
        getPassword.removeAttr("disabled")
    }),
    getPassword.click(function() {
        arr.forEach(function(addPassword) {
            alert(addPassword.getPwd())
        })
    })
});