<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ClinicDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = $_POST['phone'];
    $password = $_POST['password'];


    $user = $conn->query("SELECT * FROM patients WHERE phone = '$phone'")->fetch_assoc();
    if ($user && password_verify($password, $user['Password'])) {

        $conn->query("UPDATE patients SET logged = TRUE WHERE phone = '$phone'");
        http_response_code(200);
        echo "Authentication successful";
    } else {

        http_response_code(401);
        echo "Incorrect phone or password";
    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $user = $conn->query("SELECT * FROM patients WHERE logged = TRUE")->fetch_assoc();
    if ($user) {
        echo $user['Phone'] . '&' . $user['Name'] . '&' .  $user['Email'];

        exit();
    } else {
        echo "User not logged in";
    }
}
