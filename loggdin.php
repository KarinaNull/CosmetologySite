if (isset($_SESSION['logged_in']) === true) {
$data['username'] = $_SESSION['username'];
include 'personalAccount.js';
} else {
include 'main.js';
}