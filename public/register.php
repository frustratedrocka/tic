<?php
// configuration
require("../includes/config.php");
// if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    // TODO

    // validate submission
    if (empty($_POST["username"]))
    {
        apologize("You must provide a username.");
    }
    else if (empty($_POST["password"]))
    {
        apologize("You must provide a password.");
    }
    else if (empty($_POST["confirmation"]))
    {
        apologize("You must confirm your password.");
    }
    else if ($_POST["password"] != $_POST["confirmation"])
    {
        apologize("Your password and confirmation must match.");
    }

    $rows = query("SELECT * FROM users WHERE username = ?", $_POST["username"]);
    
    // insert user into table
    $result = query("INSERT INTO users (username, hash, cash) 
    VALUE(?, ?, 10000)", $_POST["username"], crypt($_POST["password"]));
    if ($result === false)
    {
        apologize("User already exists. Please choose a different username.");
        // the INSERT failed, presumably because username already existed
    }
    $rows = query("SELECT LAST_INSERT_ID() AS id");
    $id = $rows[0]["id"];

    $_SESSION["id"] = $id;
    redirect("/");
}
else
{
    // else render form
    render("register_form.php", ["title" => "Register"]);
}

?>
