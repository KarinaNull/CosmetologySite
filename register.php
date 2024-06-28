<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ClinicDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = $_POST['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);




// Вставка данных в базу данных
$sql = "INSERT INTO Patients (Name, RegistrationDate, Role, Phone, Email, Password) VALUES ('$name', CURDATE(), 'client', '$phone', '$email', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "Регистрация прошла успешно!";
    http_response_code(201);
} else {
    echo "Ошибка при регистрации: " . $conn->error;
    http_response_code(400);
}

$conn->close();
