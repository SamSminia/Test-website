<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "samsminiazakelijk@gmail.com"; // Your email address
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
header("Location: thank_you.html"); // Redirect to a thank you page
?>