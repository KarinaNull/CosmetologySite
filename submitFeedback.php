<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 3600');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ClinicDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$phone = $data['phone'];

$sql = "INSERT INTO Feedback (FeedbackName, FeedbackNumber) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $phone);

if ($stmt->execute()) {
    echo json_encode(array("message" => "Заявка успешно добавлена в базу данных"));
} else {
    echo json_encode(array("message" => "Ошибка при добавлении записи в базу данных: " . $stmt->error));
}

$stmt->close();
$conn->close();
