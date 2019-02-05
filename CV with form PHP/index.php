<?php
session_start();
if (!isset($_SESSION['counter'])) $_SESSION['counter']=0;

function Сonnection() {
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "db";
	$charset = "UTF8";

	try {
		$сonnection = new PDO("mysql:host=$servername;dbname=$dbname;charset=$charset", $username, $password);
		return $сonnection;
	} catch (PDOException $e) {
		return false;
	}
}

$сonnection = Сonnection();

if (!$сonnection) {
	echo "Error: Unable to connect to MySQL.";
    exit;
}

function insertingData($сonnection, $name, $email, $title, $comment){
	$parameters = array (
		':name' => $name,
		':email' => $email,
		':title' => $title,
		':comment' => $comment
	);
	$statement = $сonnection->prepare('INSERT INTO formprocessing (name, email, title, comment) VALUES(:name, :email, :title, :comment)');
	$statement->execute($parameters);
}


$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$data = array (
		$name = $_POST['name'],
		$email = $_POST['email'],
		$title = $_POST['title'],
		$comment = $_POST['comment']
	);
	foreach($data as $value) {
		if (!$value) {
			$error .= 'Please, fill all parameters.';
		}
	}
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$error .= 'Please, check e-mail address.';
	}
	if ($_SESSION['counter']>998) {
		$error .= 'You have already sent us a request. We will contact you shortly.<br/>Thank you.';
	}
	if (!$error) {
		insertingData($сonnection, $name, $email, $title, $comment);
		$success .= 'Your question has been send sucsessfully.<br/>Thank you.';
		$_SESSION['counter']=999;

	}
}
?>