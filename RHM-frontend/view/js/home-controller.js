/**
 * Created by Krishanthi on 3/30/2018.
 */
$("#txtFirstName,#txtLastName,#txtUserName,#txtemail,#txtPassword").focus(function () {
    $(this).select();
});
$(document).ready(function () {
    $("#txtFirstName").focus();
});

$("#btn").click(function () {
    var firstname = $("#txtFirstName").val();
    var lastname = $("#txtLastName").val();
    var username = $("#txtUserName").val();
    var email = $("#txtemail").val();
    var password = $("#txtPassword").val();

    if (firstname.trim().length===0){
        $("#txtFirstName").focus();
        $("#txtFirstName").addClass("error");
        return;
    }
    if (lastname.trim().length===0){
        $("#txtLastName").focus();
        $("#txtLastName").addClass("error");
        return;
    }
    if (username.trim().length===0){
        $("#txtUserName").focus();
        $("#txtUserName").addClass("error");
        return;
    }
    if (email.trim().length===0){
        $("#txtemail").focus();
        $("#txtemail").addClass("error");
        return;
    }
    if (password.trim().length===0){
        $("#txtpassword").focus();
        $("#txtpassword").addClass("error");
        return;
    }
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#txtUserName").val("");
    $("#txtemail").val("");
    $("#txtPassword").val("");

    $("#txtFirstName").focus();
});